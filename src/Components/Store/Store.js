import { configureStore } from "@reduxjs/toolkit";
import data from "./Data";
import Tog from "./Toggle";
import Paging from "./Page";
import Catagory from "./Catagory";
import Filter from "./FilterData";
import Index1 from "./Index1";
import CardData from "./CardItems1";
import Count1 from "./Count";
import Prfile1 from "./ProfileInfo";
import Auth1 from "./Auth";
import StoreData1 from "./StoreData";
import Quantity from "./Qty";
import MainStore1 from "./MainStore";
import Price1 from "./Price";
const Store = configureStore({
  reducer: {
    Data: data,
    Toggle: Tog,
    Page: Paging,
    Cat: Catagory,
    Filter: Filter,
    Index: Index1,
    CardItems: CardData,
    Count: Count1,
    ProfileInfo: Prfile1,
    Auth: Auth1,
    StoreData: StoreData1,
    Qty: Quantity,
    MainStore: MainStore1,
    Price: Price1,
  },
});
export default Store;
