import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src='https://www.wearegecko.co.uk/media/50316/mountain-3.jpg'></img>
			</div>
			<div className={s.descriptionBlock}>
			Avatar + Description
			</div>
		</div>
	)
}

export default ProfileInfo
