import { FC } from "react";

export interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Image: FC<ImageProps> = (props) => <img {...props} alt={props.alt} />;

export default Image;
