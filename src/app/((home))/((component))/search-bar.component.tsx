import Loading from "@/component/atom/loader.component";
import SvgIcon from "@/component/icons/svg-icon";
import cx from "classnames";

/**
 * Search bar
 *
 */

export default function SearchBar({
  keyword,
  status,
  search,
  setKeyword = () => {},
}: {
  className?: string;
  status: "idle" | "loading" | "failed" | "success";
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  search: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={search}>
      <div className="theme-input flex ">
        <input
          className="peer w-full bg-surface outline-none placeholder:text-sm theme-text-sub1"
          placeholder="Search for any keyword"
          required={true}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          value={keyword}
        />
        {status === "loading" ? (
          <Loading className="h-6 w-6" />
        ) : (
          <button
            className="h-6 w-6 theme-text-sub1"
            onClick={() => {
              search;
            }}
          >
            <SvgIcon className="h-6 w-6" icon={"Search"} />
          </button>
        )}
      </div>
    </form>
  );
}
