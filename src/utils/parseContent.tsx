export const parseContent = (
  contents: string[],
  Component: React.ElementType
) => {
  if (!contents) return null;

  const regex = /(\*\*.*?\*\*)/g; // **text** 형태의 문자열을 찾는 정규식

  // **text** 형태의 문자열을 찾아서 양쪽의 **를 삭제한 후 Component로 감싸줌
  return contents.map((content) =>
    content.split(regex).map((item, index) => {
      if (regex.test(item)) {
        return <Component key={index}>{item.replace(/\*\*/g, '')}</Component>;
      }
      return item;
    })
  );
};
