import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import "./styles/Gallery.css";
import Africa from "../img/Africa.jpeg"
import Cuba from "../img/Cuba.jpeg";
import Canada from "../img/Canada.jpeg";
import CostaRica from "../img/CostaRica.jpeg";
import Montserrat from "../img/Montserrat.jpeg";
import Panama from "../img/Panama.jpeg";
import StLucia from "../img/StLucia.jpeg";
import Caribbean from "../img/Caribbean.jpeg";
import PhiPhi from "../img/PhiPhi.jpeg";
import Philippines from "../img/Philippines.jpeg";
import Myanmar from "../img/Myanmar.jpeg";
import USAs from "../img/USA.jpeg";
import NewYork from "../img/NewYork.jpeg";
import California from "../img/California.jpeg";
import Sardinia from "../img/Sardinia.jpeg";
//install react-spring for scroll animation 


const Gallery = () => {
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.container');
      const img = container.querySelectorAll('.photo');

      img.forEach((photo) => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementOffset = photo.offsetTop;
        const distance = elementOffset - scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const breakPoint = windowHeight * 0.3;

        if (distance > breakPoint) {
          photo.classList.add('more-padding');
        } else if (distance < breakPoint) {
          photo.classList.remove('more-padding');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeProps = useSpring({
    opacity: 1,
    // rotateX: 0,
    // rotateY: 0,
    from: { opacity: 0 },
    config: { tension: 320, friction: 34 },
  });

  return (
    <>
    <header>
        <div className="hero-div">
          <h1 className="title">Let`s Travel and Make The Dreams Happen</h1>
        </div>
      </header>
    <div className="container">
      <div className="left-content">
        <animated.img src={Africa} className="photo" style={fadeProps} />
        <p className="text"><strong><i>African</i></strong> wildlife is by far the number one tourist attraction in Africa, and each African nation has different animals to see. The Congo and nearby Uganda are famous for its mountain gorillas, and the Virunga National Park is perhaps the best place in the world where these impressive beasts can be seen.</p>
        <animated.img src={Cuba} className="photo" style={fadeProps} />
        <p className="text"><strong><i>Cuba</i></strong>is famous for its cigars. Tobacco, known as “cohiba”, has been grown on the island for thousands of years but it wasn’t until the Spanish arrived that mass cultivation and export began. 18. Cuba is home to nine UNESCO World Heritage Sites, more than any other country in the Caribbean. </p>
        <animated.img src={Caribbean} className="photo" style={fadeProps} />
        <p className="text">With its stunning scenery and vibrant cultures, the <strong><i>Caribbean</i></strong> is one of the world’s top tourist destinations. Sustainable use of ocean resources, known as the “blue economy,” offers potential for economic diversification, while preserving the region’s environment, as well as further development of other sectors with potential for growth.</p>
        <animated.img src={CostaRica} className="photo" style={fadeProps} />
        <p className="text">The nicest places in <strong><i>Costa Rica</i></strong> can be found all over the country. They materialize in large national parks, unspoiled beaches, and even charming cities and villages. Costa Rica is so lush and beautiful. Did you know that Costa Rica doesn’t have any zoos? Instead, the animals stay in their natural habitat – in national parks.</p>
        <animated.img src={Canada} className="photo" style={fadeProps} />
        <p className="text"><strong><i>Canada</i></strong> is a popular tourist destination for many reasons. Firstly, it is a huge country with a diverse landscape including mountains, forests, and oceans</p>
        <animated.img src={Montserrat} className="photo" style={fadeProps} />
        <p className="text">On <strong><i>Montserrat</i></strong>'s west coast, Little Bay Beach is one of the most popular crescents of sand on the island. The calm waters are great for swimming and snorkeling, and you can relax along the gray-sand shore and watch boats bob in port at the bay's northern end. The best place to swim here is closer to the cliff-backed end of the beach.</p>
        <animated.img src={Panama} className="photo" style={fadeProps} />
        <p className="text">The Canal Undoubtedly the most visited place in <strong><i>Panama</i></strong>  City, the Canal is a 48-mile (77km) long artificial waterway that connects the Atlantic Ocean and the Pacific Ocean. Casco Viejo is the second most-visited neighborhood of Panama City. The Biomuseo is Panama City’s most famous museum.</p>
        <animated.img src={StLucia} className="photo" style={fadeProps} />
        <p className="text">The Caribbean island of <strong><i>Saint Lucia</i></strong> attracts tourists throughout the year. It is an ideal location for those looking for a vacation at a beautiful, tropical location. The island provides equally for those who wish to spend their time relaxing and those in search of adventure and exciting activities.</p>
      </div>
      <div className="right-content">
        <animated.img src={PhiPhi} className="photo" style={fadeProps} />
        <p className="text-right"><strong><i>Koh Phi Phi </i></strong> is one of the top island holiday destinations in Thailand, and once you lock eyes on the crystal bright, turquoise waters that surround the island, you will understand why Phi Phi has fast become a must-visit destination for anyone visiting the Kingdom. </p>
        <animated.img src={USAs} className="photo" style={fadeProps} />
        <p className="text-right">In the <strong><i>United States</i></strong>, tourism is a large industry that serves millions of international and domestic tourists yearly. Foreigners visit the U.S. to see natural wonders, cities, historic landmarks, and entertainment venues. Americans seek similar attractions, as well as recreation and vacation areas.</p>
        <animated.img src={Myanmar} className="photo" style={fadeProps} />
        <p className="text-right"><strong><i>Myanmar</i></strong> is a Southeast Asian country which conceals cultural beauties of unusual excellence. There are myriads of captivating attractions for visitors from all over the world to drop in and discover.  </p>
        <animated.img src={Philippines} className="photo" style={fadeProps} />
        <p className="text-right">The <strong><i>Philippines</i></strong>  is a country with a rich natural beauty, sunny weather, and a diverse range of bio-diversity that is both unique and diverse. Many tourists are drawn to a country’s culture, exemplified by its people, cuisine, and lifestyle. Several travel publications have ranked the Philippines as one of the world’s best destinations. </p>
        <animated.img src={NewYork} className="photo" style={fadeProps} />
        <p className="text-right"><strong><i>New York</i></strong> has numerous tourist hotspots after all, so it can take you weeks to decide which destinations to explore. However, one of the most quintessential cities you need to visit at least once in your lifetime is New York City. New York has been a popular city to visit for many US residents and foreign tourists alike.</p>
        <animated.img src={Sardinia} className="photo" style={fadeProps} />
        <p className="text-right"><strong><i>Sardinia</i></strong> - By the time the island joined the Kingdom of Italy in 1861, the local culture (and food) was so heavily influenced by its past that it was always going to stand out. Today, Sicily is one of Italy’s most popular tourist destinations, and it’s the food that keeps people coming back year after year. </p>
        <animated.img src={California} className="photo" style={fadeProps} />
        <p className="text-right">There are many reasons to visit <strong><i>California</i></strong> because there’s something for everyone in the Golden State – fun, adventure, beauty, and history await you in this particular West Coast state. After reading our list of reasons to visit California, you’ll be booking your CA trip in no time. Of course, what would California be without its infamous weather?</p>
        
      </div>
    </div>
    
    </>
  );
};


export default Gallery;
