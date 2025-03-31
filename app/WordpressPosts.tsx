'use client';import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useFetchWordPressPosts from './useFetchWordPressPosts';

interface Post {
id: number;
featured_media: number;
_embedded?: {
'wp:featuredmedia'?: {
source_url: string;
alt_text?: string;
}[]
};
}

const WordPressPosts = () => {
const [displayedCount, setDisplayedCount] = useState(6);
const { posts, loading, error } = useFetchWordPressPosts();
const cardRefs = useRef<HTMLElement[]>([]);

const handleResize = useCallback(() => {
    if (window.innerWidth < 1024) {
        setDisplayedCount(4);
    } else {
        setDisplayedCount(6);
    }
}, []);

useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [handleResize]);

useEffect(() => {
    if (posts && posts.length > 0) {
        if (posts.length <= 6) {
            setDisplayedCount(posts.length);
        } else {
            handleResize();
        }
    }
}, [posts, handleResize]);

useEffect(() => {
    if (cardRefs.current) {
        cardRefs.current.forEach((card, index) => {
            if (card) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }
}, [displayedCount, posts]);

if (loading) {
    return <p>Loading...</p>;
}

if (error) {
    return <p>Error: {error}</p>;
}

const displayedPosts = posts?.slice(0, displayedCount) || [];
const hasMore = posts ? posts.length > displayedCount : false;

return (
    <section className="py-16 bg-black text-white">
        <div className="container max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
            </div>
            <div className="h-[1px] bg-gray-700 w-full mb-8 mt-3"></div>
            <div className="flex flex-col justify-between gap-6 lg:flex-row">
                <h2 className="text-3xl font-medium lg:w-1/2">Project</h2>
            </div>
            <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPosts?.map((post: Post, index: number) => (
                    <div
                        key={post.id}
                        className={`rounded-lg shadow-md bg-gray-900 w-full flex flex-col overflow-hidden`}
                        style={{
                            opacity: 0,
                            transform: 'translateX(-20px)',
                            transition: 'opacity 0.6s ease, transform 0.6s ease',
                        }}
                        ref={(el) => {
                            if (el) {
                                cardRefs.current = cardRefs.current || [];
                                cardRefs.current.push(el);
                            }
                        }}
                    >
                        {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                            <div className={"w-full relative aspect-square"} style={{ opacity: 0.5 }}> {/* aspect-square を追加 */}
                                <Image
                                    src={post._embedded['wp:featuredmedia'][0].source_url}
                                    alt={post._embedded['wp:featuredmedia'][0].alt_text || ""}
                                    fill
                                    className={"object-cover rounded-t-lg"}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                    priority={index < 6 ? true : false}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {hasMore && (
                <div className="flex justify-center mt-6">
                    <Link href="/projects" className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded">
                        もっと見る
                    </Link>
                </div>
            )}
        </div>
    </section>
);
};

export default WordPressPosts;