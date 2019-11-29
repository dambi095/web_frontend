// imports

// actions

// action creators

// initial state

const initialState = {
    // localStorage : 브라우저에 저장하는 쿠키 
    // JWT 아이템이 로컬 스토리지 안에 있는지 체크, JWT가 없을경우 false
    // 만약 유저 토큰이 존재한다면 이는 로그인 되었다는 뜻
    isLoggedIn: localStorage.getItem("jwt") || false
}

// reducer

function reducer(state = initialState, action) {
    switch (action, type) {
        default:
            return state;
    }
}
// reducer funtions

// exports

// reducer export 
export default reducer;