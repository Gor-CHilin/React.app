import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/users/usersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/login/login'
const App = props => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile/:userId?' element={<ProfileContainer />} />
						<Route path='/dialogs' element={<DialogsContainer />} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/login' element={<LoginPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
