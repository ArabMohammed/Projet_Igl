import {
 LOGIN_SUCCESS , LOGIN_FAIL,
 LOAD_USER_SUCCESS, LOAD_USER_FAIL,
 LOGOUT,
 AUTHENTIFICATED_SUCCESS,
 AUTHENTIFICATED_FAIL,
 PASSWORD_RESET_FAIL,
 PASSWORD_RESET_SUCCESS,
 PASSWORD_RESET_CONFIRM_SUCCESS,
 PASSWORD_RESET_CONFIRM_FAIL,
 SIGNUP_SUCCESS,
 SIGNUP_FAIL,
 ACTIVATION_SUCCESS,
 ACTIVATION_FAIL,
 GOOGLE_AUTH_SUCCESS,
 GOOGLE_AUTH_FAIL,
 LOAD_WILAYA_COMMUNES,
}from '../actions/types'
const initialState ={
   access: localStorage.getItem('access'),
   refresh: localStorage.getItem('refresh'),
   //isAuthenticated:localStorage.getItem('isAuthenticated'),
   isAuthenticated:false,
   user : localStorage.getItem('user'),
   wilayas_communes:localStorage.getItem('wilayas_communes') ,
}

export default function(state = initialState, action) {
    const { type, payload} = action;
    console.log("welcome in reducers page")
    console.log(type)
    switch(type) {
        case AUTHENTIFICATED_SUCCESS:
            console.log("welcome in reducers 1")
            //localStorage.setItem('isAuthenticated',true)
            return {
                ...state,
                isAuthenticated: true,
            }
        case LOGIN_SUCCESS:
        case GOOGLE_AUTH_SUCCESS:
            console.log("welcome in reducers 2")
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            //localStorage.setItem('isAuthenticated',true)
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case SIGNUP_SUCCESS:
            console.log("welcome in reducers 3")
            //localStorage.setItem('isAuthenticated',false)
            return {
                ...state,
                isAuthenticated: false
            }
        case LOAD_USER_SUCCESS:
            console.log("welcome in reducers 4")
            console.log("uploading user")
            localStorage.setItem('user',JSON.stringify(payload))
            return {
                ...state,
                user: payload
            }
        case LOAD_WILAYA_COMMUNES:
            localStorage.setItem('wilayas_communes',JSON.stringify(payload));
           // console.log(localStorage.getItem('wilayas_communes'))
            return {
                ...state,
                wilayas_communes:payload
            }
        case AUTHENTIFICATED_FAIL:
            console.log("welcome in reducers 5")
            //localStorage.setItem('isAuthenticated',false)
            return {
                ...state,
                isAuthenticated: false
            }
        case LOAD_USER_FAIL:
            console.log("welcome in reducers 6")
            localStorage.setItem('user',null)
            return {
                ...state,
                user: null
            }
        case GOOGLE_AUTH_FAIL:
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            console.log("welcome in reducers 7")
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            //localStorage.setItem('isAuthenticated',false);
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            console.log("welcome in reducers 8")
            return {
                ...state
            }
        default:
            console.log("welcome in reducers 9")
            return {
                 ...state 
             }
    }
};
/*
export default function(state=initialState,action){
    const{type,payload}=action;
    console.log("type of action"+type)
    switch(type){
        case SIGNUP_SUCCESS:
            return{
                ...state,
                isAuthenticated:false
            }
        case AUTHENTIFICATED_SUCCESS:
            return{
               ...state,
                isAuthenticated:true
            }
        case AUTHENTIFICATED_FAIL:
            return{
                ...state,
                isAuthenticated:false
            }
        case LOGIN_SUCCESS:
            console.log("Login  begin")
            console.log(payload.access)
            console.log(payload.refresh)
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            console.log("GOOGLE_AUTH_SUCCESS end")
            return{
                ...state,
                isAuthenticated:true,
                access:payload.access,
                refresh:payload.refresh,
            }
        case GOOGLE_AUTH_SUCCESS:
            console.log("Login  begin")
            console.log(payload.access)
            console.log(payload.refresh)
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            console.log("GOOGLE_AUTH_SUCCESS end")
            return{
                ...state,
                isAuthenticated:true,
                access:payload.access,
                refresh:payload.refresh,
            }
        case LOAD_USER_SUCCESS:
            return{
              ...state,
              user:payload
            }
        case LOAD_USER_FAIL:
            return{
               ...state,
               user:null
            }
        case GOOGLE_AUTH_FAIL:
        case LOGIN_FAIL:
        case LOGOUT :
        case SIGNUP_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access:null,
                refresh:null,
                isAuthenticated:false,
                user:null

            }
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return{
                ...state
            }
        default:
            return state       
    }
}*/