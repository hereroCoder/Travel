import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Africa from '../img/Africa.jpeg'
import Cuba from '../img/Cuba.jpeg'
import Jamaica from '../img/jamaica.jpeg'
import Prague from '../img/Prague.jpeg'
import ChiangMai from '../img/ChiangMai.jpeg'
import header from '../img/header.png'
import suitcase from '../img/suitcase.jpg'
import jordan from '../img/jordan.jpg'
import switz from '../img/switz.jpg'
import './styles/Home.css'

function Home() {
	return (
		<>
			<header>
				<div className='header-banner'>
					<a href='/'>
						<img
							src={header}
							alt='Trekking-tales Travel-blog'
							className='banner'
						/>
					</a>
				</div>
			</header>
			<div className='carousel-block'>
				<Carousel fade>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={Africa}
							alt='First slide'
							style={{
								objectFit: 'cover',
								height: '500px',
								width: '800px',
								borderRadius: '10px',
								opacity: '0.8',
							}}
						/>
						{/* <Carousel.Caption>
							<h4>First slide label</h4>
						</Carousel.Caption> */}
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={Jamaica}
							alt='Second slide'
							style={{
								objectFit: 'cover',
								height: '500px',
								width: '800px',
								borderRadius: '15px',
								opacity: '0.8',
							}}
						/>

						{/* <Carousel.Caption>
							<h4>Second slide label</h4>
						</Carousel.Caption> */}
					</Carousel.Item>

					<Carousel.Item>
						<img
							className='d-block w-100'
							src={Cuba}
							alt='Third slide'
							style={{
								objectFit: 'cover',
								height: '500px',
								width: '800px',
								borderRadius: '15px',
								opacity: '0.8',
							}}
						/>

						{/* <Carousel.Caption>
							<h3>Third slide label</h3>
						</Carousel.Caption> */}
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={Prague}
							alt='Third slide'
							style={{
								objectFit: 'cover',
								height: '500px',
								width: '800px',
								borderRadius: '15px',
								opacity: '0.8',
							}}
						/>

						{/* <Carousel.Caption>
							<h3>Third slide label</h3>
						</Carousel.Caption> */}
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={ChiangMai}
							alt='Third slide'
							style={{
								objectFit: 'cover',
								height: '500px',
								width: '800px',
								borderRadius: '15px',
								opacity: '0.8',
							}}
						/>

						{/* <Carousel.Caption>
							<h3>Third slide label</h3>
						</Carousel.Caption> */}
					</Carousel.Item>
				</Carousel>
			</div>
			<h5 className='typing-h5'>
				Embark on a Journey, Explore the Extraordinary. <br />
				Let our Travel Blog be Your Guide to
				<br /> Unforgettable Adventures and Inspiring Destinations.
			</h5>

			<div class='container2'>
				<a href='/destination' className='destination-link'>
					<h4 className='destination1'> Accommodation </h4>
				</a>
				<div class='hover13 column'>
					<div>
						<figure>
							<img
								src={suitcase}
								className='border-display'
								alt='sunset-beach'
							/>
						</figure>
						<span></span>
					</div>
					<div>
						<figure>
							<img src={jordan} className='border-display' alt='jordan' />
						</figure>
						<span></span>
					</div>
					<div>
						<figure>
							<img src={switz} className='border-display' alt='switzerland' />
						</figure>
						{/* <span>Name</span> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default Home