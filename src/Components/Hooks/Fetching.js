const Fetching = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const realData = await data.json();
  return realData;
};
export default Fetching;
