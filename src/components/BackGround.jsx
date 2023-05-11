import React from 'react'
import BG from '../assets/BG.mp4'
import './BackGround.css'

const BackGround = () => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				zIndex: -1,
			}}
			className='main'>
			<div className='overlay'></div>
			<video src={BG} autoPlay loop muted />
		</div>
	)
}

export default BackGround
