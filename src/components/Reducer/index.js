import { createStore, combineReducers } from "redux";
import { checkbox } from "./Checxbox-reducer";
const rootReducer = combineReducers({
  checkbox,
});
const store = createStore(rootReducer);

export { store };
