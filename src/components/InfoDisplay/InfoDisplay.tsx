//** External Imports */
import React from "react";

//** Local Imports */

//** Typings */
export interface InfoDisplayProps {}

//** Default Props */
const defaultProps: Partial<InfoDisplayProps> = {};

/**
 * Component for rendering current time and city
 *
 * @component
 */
const InfoDisplay: React.FC<InfoDisplayProps> = () => {
  return <div>InfoDisplay</div>;
};

InfoDisplay.defaultProps = defaultProps;

export default InfoDisplay;
