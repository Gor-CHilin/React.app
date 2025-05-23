import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
userId:null,
login:null,
email:null,
isAuth:false
}

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth:true,
			}

		default:
			return state
	}
}



export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data:{userId,login,email} })
export const getAuthUserData =()=>(dipatch)=>{
		authAPI.me()
				.then(response => {
					if(response.data.resultCode ===0){
						let {id,email,login}=response.data.data
						dipatch(setAuthUserData(id,email,login))
					}
				})
}

export default AuthReducer
