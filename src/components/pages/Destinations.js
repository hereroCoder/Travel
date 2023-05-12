import makgadikgadi from "../img/makgadikgadi.jpeg";
import kalahari from "../img/kalahari.jpeg";
import okavango from "../img/Okavango delta.jpeg";
import omatepe from "../img/ometepebestpic.webp";
import masaya from "../img/masaya volcano.jpeg";
import bosawas from "../img/Bosawas.jpeg";
import mtkenya from "../img/Mount_Kenya.jpg";
import masai from "../img/masai.jpeg";
import mombasa from "../img/mombasa.jpeg";
import kenya from "../img/kenya.jpeg";
import botswana from "../img/botswana.jpeg";
import nicarangua from "../img/nicaragua.jpeg";

import "./styles/Destinations.css"

export default function Destinations() {
    return(
   
    <div className="destinations">
      <div className="theTitle">
        <h1>Hidden Gem <br/>Destinations</h1>
      <p>Here is a few unpopular destinations for your next holiday.</p>
      </div>

      <div className="content-for-all-des">
        <div className="content-des">
         <a href="#botswana"><img src={botswana}/></a> 
          <h2>BOTSWANA</h2>
        </div>
       <div className="content-des">
          <a href= "#nicaragua"><img src={nicarangua}/></a>
          <h2>NICARAGUA</h2>
        </div>
       <div className="content-des">
          <a href="#kenya"><img src={kenya}/></a>
          <h2>KENYA</h2>
        </div>

      </div>
      
      <div className="dest" id="botswana">
        <div className="header">
           <h2>Botswana</h2>
          <p>Beautiful , safe country in southern Africa. It is well known for having some of the best wilderness and wildlife.</p>
        </div>

       
          <h3>Top attractions</h3>
          <ul>
            <li>Okavanga Delta</li>
            <li>Makgadikgadi pans</li>
            <li>Kgalagadi desert </li>
          </ul>

             <h3>What to do</h3>
        <div className="todo">
            
               <p>
             Take a guided game drive to see the Big 5. Rhino, elephant, lion, leopard, and buffalo- all of which can be found in Botswana, particularly in the Okavango Delta.</p>
             <img alt="okavango-delta" src={okavango}/>
          
      
              <p >Visit the Makgadikgadi Pans on horseback. Since other animals are not afraid of horses,  you get a chance to get to close to them than you could in a cat or on foot </p>
          <img alt="makgadikgadi-pans" src={makgadikgadi}/>
     
          
           
               <p >
            You can learn about one of the oldest cultures in the world by visiting the san people in Kalahari desert. Take a guided walking experiences to learn about their unique culture, their outstanding tracking and hunting abilities, and extraordinary knowledge of medicinal and toxic plants. </p>
            <img alt="sans in Kalahari" src={kalahari}/>
        
          </div>
      
          <h3>When to Visit Botswana</h3>
          <p>The greatest time for a safari in Botswana typically occurs during the dry winter months of May to October, when wildlife crowds around the few remaining waters. </p>

          <h3>Additional info</h3>
          <p>English and Setswana are the official languages in Botswana</p>
          <p>Currency used is Pulas, £1 is roughly P16. Meals for the day can cost about £11</p>
       
      </div>


      <div className="dest" id="nicaragua">
          <div className="header">
             <h2>Nicaragua</h2>
          <p>Nicaragua is a Central American country. It's famous for its lakes and volcanoes. It has amazing landscapes. Plenty of volcanoes to climb, wilderness to explore, and oceans to surf.</p>
          </div>
         
          <h3>Top attractions</h3>
          <ul>
            <li>Ometepe</li>
            <li>Masaya Volcano</li>
            <li>Bosawas Biosphere Reserve </li>
          </ul>

      <div className="todo">

            <h3>What to do</h3>

               <p>Visit the island of Ometepe. A wooden boat ride across Lake Nicaragua takes you to an island surrounded by volcanoes and brilliant blue skies. Hike the volcanoes or relax on one of the gorgeous sand beaches with a book in hand. Don't forget to bring your sunscreen..</p>
          <img alt="omatepe-island" src={omatepe} height="120px" width="300px"/>


          <p>Visit the Masaya active volcano, which is located around 20 kilometres from Manangua, Nicaragua's capital city. A lake of molten lava may be seen looking down into the pit. Stop by after dark to observe the glow created by the bubbling lava in the crater.</p>
          <img alt="masaya-volcano" src={masaya}/>


          <p>Take a day trip to Bosawas Biosphere Reserve if you love birds. This reserve is home to 600 of the 790 bird species. There are also plenty of mammals like monkeys, jaguars, and Baird's tapirs.</p>
          <img alt="Bosawas-reserve" src={bosawas}/>
         
        </div>

          <h3>When to Visit Nicaragua</h3>
          <p>To get the most out of your holiday, the best time to visit Nicaragua is when there is barely any rain across the country. In the period from December to February, weather in Nicaragua is moderate and enjoyable. </p>


          <h3>Additional info</h3>
          <p>Spanish is the official language in Nicaragua. English is also spoken.</p>
          <p>The Cordoba is the official currency of Nicaragua. £1 is roughly 45.16 NIO. A meal is about 149 NIO</p>
       
      </div>
         <div className="dest" id="kenya">
          <div className="header">
             <h2>Kenya</h2>
          <p>A beautiful country in Eastern Africa that is very experienced at handling tourism as it forms a major part of its economy.</p>
          </div>
         
          <h3>Top attractions</h3>
          <ul>
            <li>Lake Naivasha</li>
            <li>Maasai Mara</li>
            <li>Bosawas Biosphere Reserve </li>
          </ul>

      <div className="todo">

            <h3>What to do</h3>

               <p>Visit Kenya’s Thriving Modern Cities of Nairobi, the Capital, or Mombasa on the coast where you can swim in beautiful the Indian Ocean, and snorkel on coral reefs.</p>
          <img alt="mombasa" src={mombasa} />


          <p>Visit the people of the Maasai tribe in a Maasai village and take a tour of the Maasai Mara a real wild savannah and the inspiration for the movie Lion King.</p>
          <img alt="masai" src={masai}/>


          <p>If you are feeling adventurous why not visit Mt. Kenya </p>
          <img alt="mountKenya" src={mtkenya}/>
         
        </div>

          <h3>When to Visit Kenya</h3>
          <p>The greatest season to visit Kenya falls between June and October, when there is very little rainfall and the days are not excessively hot. Kenya is also a popular year-round safari and beach getaway destination due to its diversified landscape. </p>


          <h3>Additional info</h3>
          <p>English Is widely spoken in Kenya.</p>
          <p>The currency is Kenyan Shilling with £1 equivalent to 171.29 Kenyan Shillings.</p>
       
      </div>
    </div>


    )
  }
