
// configurestore 에서는 스토어를 설정 및 구성해준다.

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import users from "./modules/user";

// 미들웨어 생성 
const middlewares = [thunk];

// 여러 리듀서를 합치는 부분 
const reducer = combineReducers({
    users
})


let store = initialState => 
// ...middlewares 로 작성하면 array를 풀 수 있다.
createStore(reducer, applyMiddleware(...middlewares));

export default store();