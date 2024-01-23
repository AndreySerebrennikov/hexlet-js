const take = (items, n = 1) => {
  if (items.length === 0 || n < 0) return [];
  return (n > items.length) ? items : items.slice(0, n);
};
module.exports = take;
