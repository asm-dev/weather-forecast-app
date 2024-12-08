export const capitalise = (word: string): string => {
  const capitalisedFirstChar = word.charAt(0).toUpperCase();
  const wordWithoutFirstChar = word.slice(1);

  return `${capitalisedFirstChar}${wordWithoutFirstChar}`;
};
