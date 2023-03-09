import React from "react";
import cx from "classnames";
import { Config, SvgIconProps, Variant } from "./svg-icon";

export default function ToggleIcon({
  className,
  size,
  config,
}: SvgIconProps<Config<Variant<"on" | "off">>>) {
  const variant = config?.variant;
  return (
    <>
      {variant === "on" ? (
        <>
          {" "}
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
            <circle cx="8" cy="12" r="2" />
            <rect x="2" y="6" width="20" height="12" rx="6" />
          </svg>
        </>
      ) : (
        <>
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
            <circle cx="16" cy="12" r="2" />
            <rect x="2" y="6" width="20" height="12" rx="6" />
          </svg>
        </>
      )}
    </>
  );
}
