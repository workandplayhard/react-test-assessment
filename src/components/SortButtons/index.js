import { IMAGES } from "../../static";

const SortButton = ({ type, onClick }) => {
  return (
    <button className="upIcon" onClick={onClick}>
      <img
        src={type === "asc" ? IMAGES.sort_asc_icon : IMAGES.sort_dsc_icon}
        alt={type === "asc" ? "Ascending" : "Descending"}
      />
    </button>
  );
};

const AscendingSortButton = ({ onClick }) => {
  return <SortButton direction="asc" onClick={onClick} />;
};

const DescendingSortButton = ({ onClick }) => {
  return <SortButton direction="desc" onClick={onClick} />;
};

export { AscendingSortButton, DescendingSortButton };
