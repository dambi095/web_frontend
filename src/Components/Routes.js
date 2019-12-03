// Router Component는 어떤 라우터들을 보여줄지 다루는 Component 이다 
import propTypes from "prop-types";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Diary from "../Routes/Diary";
import Auth from "../Routes/Auth";

// Switch 는 딱 하나의 라우트만 렌더링 해줍니다. 
const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/diary" component={Diary}/>
    </Switch>
)

const LoggedOutRoutes = () => (
    <Switch> 
         <Route exact path="/" component={Auth}/>
    </Switch>
)

const AppRouter = ({ isLoggedIn }) => (
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />
)

AppRouter.propTypes = {
    isLoggedIn: propTypes.bool.isRequired
}

export default AppRouter;