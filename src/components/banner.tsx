import { ReactElement } from "react";

/**
 * Banner.
 * Displays an image that takes the whole width and the defined height.
 * A title or paragraph may be added if needed.
 */
export default function Banner({
  height,
  color = "bg-gray-100",
  children,
}: {
  height: string;
  color?: string;
  children?: ReactElement[] | ReactElement;
}) {
  {
    /* landing image, this component can be reused for specifying the height of the image, opacity and a middle title */
  }
  return <div className={`${height} w-full ${color}`}>{children}</div>;
}
