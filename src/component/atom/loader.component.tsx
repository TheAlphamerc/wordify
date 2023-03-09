import cx from "classnames";

export default function Loading({ className }: { className?: string }) {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={cx("flex items-center justify-center", className)}>
      <div className="animate-spin rounded-full  border-t-2 h-full w-full border-b-2 border-purple-500"></div>
    </div>
  );
}
