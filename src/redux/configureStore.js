
/*
 *  configurestore 에서는 스토어를 설정 및 구성해준다.
 */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import users from "./modules/user";

// prod or dev 에 따라 스토어의 설정이 달라진다. 
const env = process.env.NODE_ENV;

// 미들웨어 생성 
const middlewares = [thunk];

if (env === "development") {
    // 리덕스를 위해 한 작업들을 log 한다. 즉 이전 state 나 액션, 액션의 결과를 보고싶을 때 유용 
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

// 여러 리듀서를 합치는 부분 
const reducer = combineReducers({
    users
})


let store = initialState =>
    // ...middlewares 로 작성하면 array를 풀 수 있다.
    createStore(reducer, applyMiddleware(...middlewares));

export default store();