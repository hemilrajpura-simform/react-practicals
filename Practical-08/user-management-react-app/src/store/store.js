import { createStore } from 'redux';

const UserManagementReducer = (state = {
    username: '',
    password: '',
    number: null,
    img: '',
    email: '',
    isLogin: false
}, action) => {

    if (action.type === "login") {
        localStorage.setItem("login", JSON.stringify(action));
        return {
            username: action.username,
            password: action.password,
            img: action.img,
            email: action.email,
            number: action.number,
            isLogin: true
        };
    }
    if (action.type === "logout") {
        localStorage.clear();
        return {
            isLogin: false
        };
    }
    return state;
};

const store = createStore(
    UserManagementReducer
);

export default store;