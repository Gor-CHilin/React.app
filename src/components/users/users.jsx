import React from 'react'
import styles from './users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/img/UserPhoto.jpg'

class Users extends React.Component {
	constructor(props) {
		super(props)

		axios
			.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return (
			<div>
				{this.props.users.map(u => (
					<div key={u.id}>
						<span>
							<div>
								<img
									src={u.photos && u.photos.small ? u.photos.small : userPhoto}
									className={styles.userPhoto}
									alt='User'
								/>
							</div>
							<div>
								{u.followed ? (
									<button onClick={() => this.props.unfollow(u.id)}>
										Unfollow
									</button>
								) : (
									<button onClick={() => this.props.follow(u.id)}>
										Follow
									</button>
								)}
							</div>
						</span>
						<span>
							<span>
								<div>{u.name}</div>
								<div>{u.status}</div>
							</span>
							<span>
								<div>{'u.location.country'}</div>
								<div>{'u.location.city'}</div>
							</span>
						</span>
					</div>
				))}
			</div>
		)
	}
}

export default Users
