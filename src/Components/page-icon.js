import { useDispatch } from "react-redux";
import { PageAdd } from "./Store/Page";

const PageIcon = ({ item, index, tog }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(PageAdd(index));
      }}
    >
      {item}
    </div>
  );
};
export default PageIcon;
