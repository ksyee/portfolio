import React from 'react';

export const parseContent = (
  contents: string[],
  component: React.ElementType
) => {
  if (!contents || contents.length === 0) return null;

  // Alias to ensure the JSX element name is capitalized
  const Component = component;

  const regex = /\*\*(.*?)\*\*/g; // **text** 형태의 문자열을 찾는 정규식

  // **text** 형태의 문자열을 찾아서 양쪽의 **를 삭제한 후 Component로 감싸줌
  return contents.map((content, contentIndex) =>
    content.split(regex).map((item, index) => {
      const isHighlighted = index % 2 === 1;

      if (isHighlighted) {
        return <Component key={`${contentIndex}-${index}`}>{item}</Component>;
      }
      return <React.Fragment key={`${contentIndex}-${index}`}>{item}</React.Fragment>;
    })
  );
};
