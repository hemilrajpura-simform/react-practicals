import { createStore } from 'redux';

// const initialValues = {
//     email: '',
//     username: '',
//     number: '',
//     password: '',
//     cpassword: '',
//     photo: null
// };

const UserManagementReducer = (state = {
    username: '',
    password: '',
    number:null,
    img: '',
    email: '',
    isLogin: false
}, action) => {

    if (action.type === "login") {
        console.log('login from store');

        return {
            username: action.username,
            password: action.password,
            img: action.img,
            email: action.email,
            number:action.number,
            isLogin: true
        };
    }
    if (action.type === "logout") {
        console.log('logout from store');
        return {
            isLogin: false
        };
    }
    return state;
};

const store = createStore(
    UserManagementReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


);

export default store;