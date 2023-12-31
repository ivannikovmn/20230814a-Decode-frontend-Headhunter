import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jwt_decode from "jwt-decode"

import { END_POINT } from '@/config/end-point'
// const token = localStorage.getItem("token")

let initialState = {
  isAuth: false,
  currentUser: null,
  tokenExt: 0,
  error: null  
}
// console.log(token);

// const token = localStorage.getItem("token")

// if(token) {
//   let decodeToken = jwt_decode(token)
//   // console.log(token, decodeToken.exp * 1000 <= Date.now());
//   if(decodeToken.exp * 1000 > Date.now() ) {
//     initialState = {
//       isAuth: true,
//       currentUser: {
//         id: decodeToken.id,
//         email: decodeToken.email,
//         full_name: decodeToken.full_name,
//         phone: decodeToken.phone,
//         role: decodeToken.role,
//       },
//       tokenExt: decodeToken.exp 
//     }   
//     console.log(initialState);
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//   } else {
//     localStorage.removeItem("token")
//   }
// }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // initialState: {
  //   isAuth: false,
  //   currentUser: null,
  //   tokenExt: 0
  // },
  reducers: {
    authorize: (state, action) => {

    localStorage.setItem("token", action.payload.token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`

    const decoded = jwt_decode(action.payload.token)
      state.currentUser = {
        id: decoded.id,
        email: decoded.email,
        full_name: decoded.full_name,
        phone: decoded.phone,
        role: decoded.role,
      }
      state.isAuth = true

      state.tokenExt = decoded.exp
    },
    logOut: (state) => {
      state.isAuth = false
      state.currentUser = null;
      state.exp = 0;
      localStorage.removeItem("token")
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { authorize, logOut, setError } = authSlice.actions

export const sendVerificationEmail = (email) => (dispatch) => {
  
    axios.post(`${END_POINT}/api/auth/sendmail`, {
      email
    })

    // dispatch(incrementByAmount(amount))
  
}

export const verifyCode = (email, code) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/verifycode`, {
    email,
    code
  }).then(res => {
    // console.log(res.data);
    dispatch(authorize(res.data))

  })
}

export const signUp = (data, router) => (dispatch) => {
  const fd = new FormData();
  fd.append("full_name", data.full_name)
  fd.append("email", data.email)  
  fd.append("password", data.password)  
  fd.append("password2", data.password2)  
  fd.append("company_name", data.company_name)        
  fd.append("company_description", data.company_description) 
  fd.append("company_address", data.company_address)     
  fd.append("company_logo", data.company_logo)     

  axios.post(`${END_POINT}/api/auth/signup`, fd).then(res => {
    // console.log(res.data);
    router.push("/employer/signin")
  }).catch(e => {
    // console.log(e.response.data);
    dispatch(setError(e.response.data))
  })
}

export const signIn = (data, router) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/login`, data).then(res => {   
    dispatch(authorize(res.data))
    router.push("/vacancy")
  }).catch(e => {  
    console.log(e);
    if(e.response && e.response.data)  
    dispatch(setError(e.response.data))
  })
}

export default authSlice.reducer