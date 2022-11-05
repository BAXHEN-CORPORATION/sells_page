export interface LinearGradientImage {
  primary: string;
  secondary?: string;
  url: string;
}

const linearGradientImage = (props: LinearGradientImage) => {
  const { primary, secondary, url } = props;
  return `linear-gradient( ${primary}, ${secondary || primary} ), url(${url})`;
};

export default linearGradientImage;
