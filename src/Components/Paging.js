import { useState } from "react";
import PageIcon from "./page-icon";
import { useSelector } from "react-redux";

const Paging = () => {
  const tog = useSelector((state) => {
    return state.Page;
  });
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const [tog, setTog] = useState(0);
  return (
    <div className="Paging">
      {arr.map((item, index) => {
        return (
          <div className={index === tog ? "pp" : ""} key={index}>
            <PageIcon item={item} index={index} tog={tog} />
          </div>
        );
      })}
    </div>
  );
};
export default Paging;
