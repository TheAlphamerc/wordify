import Loading from "@/component/atom/loader.component";
import SvgIcon from "@/component/icons/svg-icon";
import cx from "classnames";

/**
 * Search bar
 *
 */

export default function SearchBar({
  className,
  status,
  search,
  setKeyword = () => {},
}: {
  className?: string;
  status: "idle" | "loading" | "failed" | "success";
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  search: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={search}>
      <div className="theme-input flex ">
        <input
          className="peer w-full bg-surface outline-none placeholder:text-sm"
          placeholder="Search for any keyword"
          required={true}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        {status === "loading" ? (
          <Loading className="h-6 w-6" />
        ) : (
          <SvgIcon className="h-6 w-6" icon={"Search"} />
        )}
      </div>
    </form>
  );
}
