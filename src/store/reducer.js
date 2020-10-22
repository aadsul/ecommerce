import { combineReducers } from "redux";
import * as Account from "./componentStores/Account";

const rootReducer = combineReducers({
  account: Account.reducer,
});

export default rootReducer;
