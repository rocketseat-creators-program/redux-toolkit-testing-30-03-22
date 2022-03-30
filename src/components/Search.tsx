import { SearchIcon } from "./SearchIcon";

type SearchProps = {
  onChangeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Search({ onChangeHandle }: SearchProps) {
  return (
    <div className="relative w-full flex-1 py-2 mx-auto mr-4 ml-0 ">
      <input
        data-testid="search"
        type="search"
        className="px-3 w-full h-12 rounded focus:shadow-md focus:outline-none"
        placeholder="Search..."
        onChange={onChangeHandle}
      />
      <div className="absolute top-0 right-0 p-5">
        <SearchIcon />
      </div>
    </div>
  );
}
