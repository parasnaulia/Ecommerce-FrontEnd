import { useSelector } from "react-redux";

const Price = () => {
  const count = useSelector((state) => {
    return state.MainStore;
  });

  const sum = useSelector((state) => {
    return state.Count;
  });
  const Price = useSelector((state) => {
    return state.Price;
  });
  const Counting = useSelector((state) => {
    return state.Count;
  });

  // let sum = count.reduce((acc, item, index) => {
  //   return acc + item.price * 83;
  // }, 0);
  // console.log("The Sum IS " + sum);
  const Pricing = Number(Math.round(Price));
  return (
    <div className="Price">
      <div className="Price-Inner">
        <h1>Total Amount</h1>
      </div>
      <div>
        <label>Total item Percahed</label>: {count.length}
      </div>
      <div>
        <label>Overall Total</label>: Rs{Math.round(sum) + Math.round(Price)}
      </div>
      <div>
        <label>Total Discount of 10% </label>: -Rs
        {Math.round(sum * 0.1) + Math.round(Price)}{" "}
      </div>
      <div>
        <label>Total Price: </label>:{" "}
        <span className="Total-Amount">
          Rs{Math.round(Price) + Number(Math.round(sum - sum * 0.1))}
        </span>
      </div>
      <div>
        <span className="Saving">
          {" "}
          You Save Rs :{Math.round(sum * 0.1) + Pricing}{" "}
        </span>
      </div>
    </div>
  );
};
export default Price;
