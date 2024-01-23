const capitalize = (text) => {
  const [firstChar, ...restChars] = text;
  return (firstChar === undefined) ? '' : `${firstChar.toUpperCase()}${restChars.join('')}`;
};
module.exports = capitalize;
