import react from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/img/UserPhoto.jpg'
import { NavLink } from 'react-router-dom'

let Users = props => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div>
				{pages.map(p => {
					return (
						<button
							className={props.currentPage === p ? styles.selectedPage : ''}
							onClick={event => props.onPageChanged(p)}
						>
							{p}
						</button>
					)
				})}
			</div>
			{props.users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<NavLink to={`/profile/${u.id}`}>
								<img
									src={u.photos && u.photos.small ? u.photos.small : userPhoto}
									className={styles.userPhoto}
									alt='User'
								/>
							</NavLink>
						</div>
						<div>
							{u.followed ? (
								<button
									disabled={props.followingInProgress.some(id => id === u.id)}
									onClick={() => props.unfollow(u.id)}
								>
									Unfollow
								</button>
							) : (
								<button
									disabled={props.followingInProgress.some(id => id === u.id)}
									onClick={() => props.follow(u.id)}
								>
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
export default Users
