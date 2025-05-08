import react from 'react'
import Users from './users'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'


let mapStateToProps = state => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = dispatch => {
  return {
		follow: usersId => {
			dispatch(followAC(usersId))
		},
		unfollow: usersId => {
			dispatch(unfollowAC(usersId))
		},
		setUsers: users => {
			dispatch(setUsersAC(users))
		},
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
