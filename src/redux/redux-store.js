import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk as thunkMiddleware } from 'redux-thunk'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import AuthReducer from './auth-reducer'
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: AuthReducer,
	form:formReducer,
	app:appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
