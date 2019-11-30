
/*
  configurestore 에서는 스토어를 설정 및 구성해준다.
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import users from "./modules/user";

// prod or dev 에 따라 스토어의 설정이 달라진다. 
const env = process.env.NODE_ENV;

const history = createBrowserHistory();

/*
    필요한 미들웨어 생성
    routerMiddleware: 히스토리랑 싱크되어야한다.
*/
const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
    // 리덕스를 위해 한 작업들을 log. 즉 이전 state 나 액션, 액션의 결과를 보고싶을 때 유용 
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

// 여러개의 리듀서를 합치는 부분 
const reducer = combineReducers({
    users,
    router: connectRouter(history) // routing: 불러온 router reducer
})

// ...middlewares 로 작성하면 array를 풀 수 있다.
let store = initialState =>
    createStore(
        reducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

// history를 export 하는 이유는 곧 생성될 라우터에겐 히스토리 오브젝트가 필요하기 때문이다.
export { history };
export default store();