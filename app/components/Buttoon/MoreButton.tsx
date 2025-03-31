import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* 矢印とテキストの間隔 */
  &:hover {
    background-color: #333; /* ホバー時の背景色 */
  }
`;

const Arrow = styled.span`
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const MoreButton = () => {
  return (
    <Button>
      <Arrow />
      MORE
    </Button>
  );
};

export default MoreButton;