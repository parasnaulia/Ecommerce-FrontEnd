import { FaStar } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
const Item = ({ image, title, price, rating, index }) => {
  return (
    <Link to="/Cart" className="Item-Container">
      <div className="item">
        <div className="item-1">
          <img
            className="item-img"
            src={image}
            alt="No Img"
            style={{ width: "92%", height: "10rem" }}
          />
          <h3>{title}</h3>
          <h3>Rs {price * 83}</h3>
          <h3>
            {" "}
            <MdOutlineAccountCircle />
            {" " + rating.count}
          </h3>
          <h3>
            {" "}
            <FaStar />
            {rating.rate}
          </h3>
        </div>
      </div>
    </Link>
  );
};
export default Item;
