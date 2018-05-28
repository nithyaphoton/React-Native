import {
    combineReducers
} from "redux";
import productReducer from "./product";
import storeReducer from "./store";
import searchReducer from './search';
import addProductReducer from "./addProduct";
import productDetailReducer from './productDetail';
import {
    createNavigationReducer
} from "react-navigation-redux-helpers";
import {AppNavigator} from "../containers/AppNavigator";


const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
    productState: productReducer,
    storeState: storeReducer,
    navState: navReducer,
     addProductState: addProductReducer,
    productDetailState: productDetailReducer,
     searchState: searchReducer
})

export default rootReducer;
