import {
    put,
    takeLatest
} from "redux-saga/effects";
import { Vibration } from 'react-native';
import * as actionCreators from "../actionCreators/product"
import * as addProductActionCreators from "../actionCreators/addNewProduct";
import * as detailActionCreators from "../actionCreators/productItemDetail";
import {
    GET_PRODUCTS, GET_PRODUCT, ADD_PRODUCT, SEARCH_PRODUCT, DELETE_PRODUCT
} from "../actionTypes/product";

let URI = "http://172.16.105.175:4000";

function vibrate() {
    Vibration.vibrate(8000);
}

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

//It is only to get all the items
function* getProduct(action) {
    try {
        let product = yield fetch(`${URI}/products/${action.id}`).then(r => r.json());

        yield put(actionCreators.getProductSuccess(product))
    } catch (error) {
        console.log(error)
        yield put(actionCreators.getProductFailure(error))
    }
}
function* searchProduct(action) {
    console.log(action.product);
    let url = `${URI}/products?title_like=${action.product}`;
    console.log(url);
    try {
        let products = yield fetch(url).then(r => r.json());
        yield put(actionCreators.searchProductSuccess(products));
    } catch (error) {
        yield put(actionCreators.searchProductFailure(error));
    }
}

function* deleteProduct(action) {

    try {
        let product = yield fetch(`${URI}/products/${action.product}`, {
            method: 'DELETE'
        }).then(result => result.json());
        yield put(getProductsSuccess(product));
        yield vibrate
    }
    catch (error) {
        yield put(getProductsFailure(error));
    }
}


function* getProductDetail(action) {
    try {

        console.log(`${URI}/products/${action.id}`, 'detail url');
        let productDetails = yield fetch(`${URI}/products/${action.id}`).then(r => r.json());
        yield put(detailActionCreators.getProductDetailSuccess(productDetails))
    } catch (error) {
        yield put(detailActionCreators.getProductDetailFailure(error))
    }
}


function* addProduct(action) {

    try {
        let product = yield fetch(`${URI}/products`, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.item)
        }).then(result => result.json());
        yield put(addProductSuccess(product));
    }
    catch (error) {
        yield put(addProductFailure(error));
    }
}
export function* productWatchers() {
    yield takeLatest(GET_PRODUCTS, getProducts)
    yield takeLatest(SEARCH_PRODUCT, searchProduct)
    yield takeLatest(DELETE_PRODUCT, deleteProduct)
    yield takeLatest(ADD_PRODUCT, addProduct)
    yield takeLatest(GET_PRODUCT_DETAIL, getProductDetail)
}
