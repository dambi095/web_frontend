
// configurestore 에서는 나의 스토어를 설정 및 구성

import { createStore, combineReducers, } from "redux";
import users from "./modules/user";

// 여러 리듀서를 합치는 부분 
const reducer = combineReducers({
    users,
})

let store = initialState => createStore(reducer);

export default store();