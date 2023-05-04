export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
