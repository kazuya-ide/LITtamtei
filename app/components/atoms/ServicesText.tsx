import React from 'react';
import styled from 'styled-components';
// framer-motion をインポート
import { motion } from 'framer-motion';

// Container もアニメーションさせる場合は motion コンポーネントにする (任意)
const Container = styled(motion.div)`
  text-align: center;
`;

// styled-components で motion コンポーネントをラップする
const MotionTitle = styled(motion.h1)`
  color: white;
  font-size: 2em;
  margin-bottom: 0.2em;
  // 文字が親要素からはみ出さないように overflow: hidden を追加すると良い
  overflow: hidden;
  // 文字列全体を中央寄せにする場合は以下も有効
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const MotionSubtitle = styled(motion.p)`
  color: yellow;
  font-size: 1em;
  margin-bottom: 5%;
  overflow: hidden; // 同上
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

// 親要素 (Title, Subtitle) のアニメーションバリアント
const sentenceVariants = {
  hidden: { opacity: 1 }, // 最初は親要素自体は表示
  visible: (i = 1) => ({ // i はカスタムプロパティで遅延時間を制御
    opacity: 1,
    transition: {
      staggerChildren: 0.06, // 各文字のアニメーション開始の遅延時間
      delayChildren: 0.2 * i, // 親要素のアニメーション開始遅延 (Subtitle を遅らせるため)
    },
  }),
};

// 子要素 (各文字) のアニメーションバリアント
const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50, // 少し下から登場する
    // x: -10, // 左から登場させる場合など
    // scale: 0.8, // 小さい状態から登場させる場合など
  },
  visible: {
    opacity: 1,
    y: 0,
    // x: 0,
    // scale: 1,
    transition: {
      type: 'spring', // バネのような動き
      damping: 12,
      stiffness: 200,
      // duration: 0.4, // type: 'tween' の場合
      // ease: "easeOut", // type: 'tween' の場合
    },
  },
};

// Propsの型定義 (TypeScriptを使用している場合)
interface ServicesTextProps {
  titleText: string;
  subtitleText: string;
}

const ServicesText: React.FC<ServicesTextProps> = ({ titleText, subtitleText }) => {
  return (
    // Container にもアニメーションを追加する場合
    // <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <Container>
      <MotionTitle
        variants={sentenceVariants}
        initial="hidden"
        whileInView="visible" // 要素がビューポート内に入ったら "visible" に遷移
        viewport={{ once: true, amount: 0.5 }} // アニメーションは1回だけ、要素が50%見えたら開始
        custom={1} // delayChildren 用のカスタムプロパティ (Title は遅延なし)
      >
        {/* 文字列を分割して motion.span でラップ */}
        {titleText.split('').map((char, index) => (
          <motion.span
            key={char + '-' + index}
            variants={letterVariants}
            style={{ display: 'inline-block' }} // span がインライン要素なので必要に応じて調整
          >
            {/* 半角スペースはそのまま表示すると無視されることがあるため、ノーブレークスペースに変換 */}
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </MotionTitle>

      <MotionSubtitle
        variants={sentenceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={2} // delayChildren 用のカスタムプロパティ (Subtitle を少し遅らせる)
      >
        {subtitleText.split('').map((char, index) => (
          <motion.span
            key={char + '-' + index}
            variants={letterVariants}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </MotionSubtitle>
    </Container>
    // </Container> // Container にアニメーションを追加した場合の閉じタグ
  );
};

export default ServicesText;