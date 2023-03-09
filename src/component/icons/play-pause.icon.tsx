import React from "react";
import cx from "classnames";
import { Config, SvgIconProps, Variant } from "./svg-icon";

export default function PlayPause({
  className,
  size,
  config,
}: SvgIconProps<Config<Variant<"play" | "pause">>>) {
  const isPlay = config?.variant === "play";
  if (isPlay) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cx("", className)}
        // width="44"
        // height="44"
        height={size ? size * 4 : "100%"}
        width={size ? size * 4 : "100%"}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="6" y="5" width="4" height="14" rx="1" />
        <rect x="14" y="5" width="4" height="14" rx="1" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cx("", className)}
        height={size ? size * 4 : "100%"}
        width={size ? size * 4 : "100%"}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 4v16l13 -8z" />
      </svg>
    );
  }
}
