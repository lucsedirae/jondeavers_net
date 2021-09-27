//* Loads images with Next.js formatting rules
export const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

//* Formats UTI into locale date string
export const formatDate = (incoming) => {
  const date = new Date(incoming);
  return date.toLocaleDateString();
};
