import React from "react";
import cx from "classnames";
import BookIcon from "./book.icon";
import ToggleIcon from "./toggle.icon";
import SearchIcon from "./search.icon";
import LightDark from "./light-dark.icon";
type Icons = "Book" | "Toggle" | "Search" | "LightDark";

export type SvgIconSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export class Config<T> {
  public variant: Variant<T>;
  constructor(public value: T) {
    this.variant = value as Variant<T>;
  }
}
export type Variant<T> = T;

export type SvgIconProps<Config> = {
  className?: string;
  size?: SvgIconSize;
  config?: Config;
};

type SvgIconButtonProps = {
  icon: Icons;
  className?: string;
  onClick?: (e: any) => void;
  size?: SvgIconSize;
  variant?: any;
};

const SvgIcon = ({
  icon,
  className,
  size,
  variant,
  onClick,
}: SvgIconButtonProps) => {
  return (
    <span onClick={onClick} style={{ display: "inline-block" }}>
      {getSVGIcon(icon, size, className, variant)}
    </span>
  );
};

export default SvgIcon;

function getSVGIcon(
  icon: Icons,
  size?: SvgIconSize,
  className: string = "",
  variant?: any
) {
  switch (icon) {
    case "Book":
      return <BookIcon size={size} className={className} />;
    case "Toggle":
      return (
        <ToggleIcon
          size={size}
          className={className}
          config={new Config<Variant<"on" | "off">>(variant)}
        />
      );
    case "Search":
      return <SearchIcon size={size} className={className} />;
    case "LightDark":
      return (
        <LightDark
          size={size}
          className={className}
          config={new Config<Variant<"light" | "dark">>(variant)}
        />
      );
      break;

    default:
      return <></>;
  }
}
