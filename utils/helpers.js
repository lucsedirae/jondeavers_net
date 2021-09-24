//* Loads images with Next.js formatting rules
export const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};