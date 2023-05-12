import Wame from "../img/Wame.jpeg";
import Ceanna from "../img/Ceanna.jpeg";
import Marcia from "../img/Marcia.jpeg";
import Elena from "../img/Elena.jpeg";
import Gift from "../img/Gift.jpeg";

import React from 'react'
import './styles/About.css'
function About() {
	return (
		<div className="wrapper">
			<div class='card-deck'>
				<div class='card3'>
					<img
						className='card-img-top'
						src={Gift}
						alt='Card cap'
						style={{ width: 'auto', height: 'auto' }}
					/>
					<div className='card-body'>
						<h5 className='card-titless'>Tharitar Serna</h5>
						<p className='card-text'>
<p className="titless">Chief Product Manager & Github operator</p>
 <p>My favorite hobby is cooking! I love to create new dishes and try
different ingredients and flavors. When I cook, I follow recipes to
 learn new techniques and improve my skills, but I also like to be
 creative and come up with my own recipes. One of my favorite things
about cooking is that it's make me feel relax. I can focus on the task
at hand and then enjoy a delicious meal at the end.</p>{' '}
							<br />
							
						</p>
					</div>
				</div>
        

				<div class='card3'>
					<img
						className='card-img-top'
						src={Marcia}
						alt='Card cap'
						style={{ width: 'auto', height: 'auto' }}
					/>
					<div className='card-body'>
						<h5 className='card-titless'>Marcia Mijnhijmer</h5>
						<p className='card-text'>
<p className="titless">Chief Problem Solving Engineer & Figma Designer </p>
<p> My favourite hobbies are Snowboarding (even though I don’t get to do it as often as I would like) and
Skateboarding, I am part of a Black-led queer skate collective where I teach marginalised kids to skate.
Being on a board gives me a sense of freedom that I don’t experience anywhere else.
 Landing a trick that I have been practicing for some time is the best feeling.
 I love the community that comes with it, I have met great people, made awesome friends and have done some incredible things because of skateboarding.</p>
{' '}
							<br />
						
						</p>
					</div>
				</div>
        </div>

				<div class='card3'>
					<img
						className='card-img-top'
						src={Elena}
						alt='Card cap'
						style={{ width: 'auto', height: 'auto' }}
					/>
					<div className='card-body'>
						<h5 className='card-titless'>Elena Gospodinova</h5>
						<p className='card-text'>
 <p className="titless">Chief Art Designer and Director of Animations</p>
<p>Name: I am passionate about traveling around the world and the extreme sports.
 My favorite sport is kitesurfing and scuba diving. Usually, when I am searching for a holiday, I am looking for a destination where I can practice them or at least one of them. 
 Also, I love exploring new cultures and traditions, especially when I travel with my friends. </p>
{' '}
							<br />
						</p>
					</div>
				</div>

				<div class='card3'>
					<img
						className='card-img-top'
						src={Wame}
						alt='Card cap'
						style={{ width: '400px', height: '500px' }}
					/>
					<div className='card-body'>
						<h5 className='card-titless'>Wame Chibamo</h5>
						<p className='card-text'>
                <p className="titless"> Chief Researcher & Director of Destinations</p>
                <p>Favorite hobbies are listening to music. I love music, it's something that has always brought me closer to my brother. 
                We used to compete on things like who knows lyrics and share some dance routines.  
                Listening to music and singing along just improves my mood;  I also feel more productive when I'm working and listening to my favorite songs. </p>
                {' '}
						</p>
					</div>
				</div>

				<div class='card3'>
					<img
						className='card-img-top'
						src={Ceanna}
						alt='Card cap'
						style={{ width: '400px', height: '400px' }}
					/>
					<div className='card-body'>
						<h5 className='card-titless'>Ceanna Madden</h5>
						<p className='card-text'> 
            <p className="titless"> Designer & Backend operator</p>
 <p>My Favorite hobbies are outdoor pursuits such as camping with my dogs and wife, kayaking, hiking and pretty much any ball sport. I love being outside in the fresh air, with nature and bird song. 
it lifts my spirits, clears the cobwebs in my mind, heightens the senses and refocuses your perspective on what is important in life when you can get away from the rat race for a while.
There is nothing better than sitting around a camp fire after a long day in the great outdoors, and reading a good book with good company under the stars. 
 </p></p></div>{' '}
  </div> 
				
        
        

        
			
		</div>
	)
}

export default About








