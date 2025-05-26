import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../../Common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus.jsx'
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx'

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			{/* <div>
				<img  className="Profile_info_img"  src='https://www.wearegecko.co.uk/media/50316/mountain-3.jpg'></img>
			</div> */}
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} />
				<ProfileStatusWithHooks
					status={props.status}
					updateStatus={props.updateStatus}
				/>
			</div>
		</div>
	)
}

export default ProfileInfo
