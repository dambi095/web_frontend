
// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const SAVE_TOKEN = "SAVE_TOKEN";

// action creators
function setLogIn(token) {
    return {
        type: LOG_IN,
        token
    };
}

function logOut(user) {
    return { type: LOG_OUT };
}

function setUser(user) {
    return {
        type: SET_USER,
        user
    };
}

function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    };
}

// API Actions

function signUp(email, password, username) {
    console.log(`signUp email: ${email} password : ${password} username : ${username}`);
    return dispatch => {
        return fetch('/user/inserUser',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
                username
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(" *-*-*-*-* signUp API result : ", result);
     
        })
    }
}

function logIn(email, password) {
    console.log(`login email : ${email} `);
    return dispatch => {
        return fetch(`/user/logIn`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(JSON.stringify(json));
                if (json.user) {
                    return true
                }
            })

    }
}


// initial state

const initialState = {
    // localStorage : 브라우저에 저장하는 쿠키 
    // JWT 아이템이 로컬 스토리지 안에 있는지 체크, JWT가 없을경우 false,  유저 토큰이 존재한다면 이는 로그인 되었다는 뜻
    isLoggedIn: localStorage.getItem("jwt") || false
}

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return applyLogIn(state, action);
        default:
            return state;
    }
}

// reducer funtions
function applyLogIn(state, action) {
    //console.log("===applyLogIn=============" + JSON.stringify(state));
    const { token } = action;
    return {
        ...state,
        isLoggedIn: true,
        token
    };
}

// exports
const actionCreators = {
    signUp,
    logIn
};

export { actionCreators };

// reducer export 
export default reducer;