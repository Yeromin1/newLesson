import { HiSearch } from "react-icons/hi";

export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <HiSearch />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
