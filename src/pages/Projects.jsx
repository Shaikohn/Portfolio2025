import React from 'react';
import './Projects.css';
import ztreamgames from '../assets/projects/Ztream.png';
import cuevanix from '../assets/projects/Cuevanix.jpg';
import preguntate from '../assets/projects/Preguntate.png';
import feetsies from '../assets/projects/Feetsies.png';
import pokeshai from '../assets/projects/Pokeshai.png';
// import dogsapp from '../assets/projects/DogsApp.png';
import godsroulette from '../assets/projects/GodsRoulette.png';
import magicisland from '../assets/projects/MagicIsland.png';
import bahelitours from '../assets/projects/BaHelitours.png';

function Projects() {
  return (
    <div className="projectsContainer">
        <div>
            <h1>Full-Stack</h1>
            <div>
                <div className='projectContainer'>
                    <img src={ztreamgames} alt="ZtreamGames image" className='projectImage' />
                    <h3>ZTREAMGAMES | ACADEMIC PROJECT</h3>
                    <p>ZTREAMGAMES is an academic project that simulates an e-commerce app for buying video games. It includes features such as a user system, a friends system, a shopping cart with payment integration (via Stripe), among other functionalities.</p>
                    <a href='https://ztreamgames.vercel.app/' target='_blank' rel='noreferrer'>VIEW LIVE</a>
                </div>
                <div className='projectContainer'>
                    <img src={cuevanix} alt="Cuevanix image" className='projectImage' />
                    <h3>CUEVANIX | PERSONAL PROJECT</h3>
                    <p>CUEVANIX is a personal project that simulates an e-commerce app for buying series and movies. It includes features such as a user system, a search bar, a shopping cart with payment integration (via Stripe), an inquiry system, among other functionalities.</p>
                    <a href='https://cuevanix-shaikohn.vercel.app/' target='_blank' rel='noreferrer'>VIEW LIVE</a>
                </div>
                <div className='projectContainer'>
                    <img src={preguntate} alt="Preguntate image" className='projectImage' />
                    <h3>PREGUNTATE | FREELANCE</h3>
                    <p>PREGUNTATE is a game where you are presented with a question or scenario, which can be thoughtful or fun depending on the selected category. It’s perfect for having a good time with friends. It includes features such as a user system, a like system, and other functionalities.</p>
                    <a href='https://preguntate.net/' target='_blank' rel='noreferrer'>VIEW LIVE</a>
                </div>
                <div className='projectContainer'>
                    <img src={feetsies} alt="Feetsies image" className='projectImage' />
                    <h3>FEETSIES | ACADEMIC PROJECT</h3>
                    <p>Feetsies is a personal project that simulates an animal shelter website. Users can adopt animals and submit a form to leave an animal at the shelter. It includes features such as a user system, a cart with payment integration (Stripe), an inquiry system, and more.</p>
                    <a href='https://feetsies.vercel.app/' target='_blank' rel='noreferrer'>VIEW LIVE</a>
                </div>
                <div className='projectContainer'>
                    <img src={pokeshai} alt="PokeShai image" className='projectImage' />
                    <h3>POKESHAI | PERSONAL PROJECT</h3>
                    <p>POKESHAI is a personal project that includes two games: Who Is That Pokémon? and Higher or Lower, both adapted to the Pokémon universe using the Pokémon API.</p>
                    <a href='https://pokeshai-deploy.vercel.app/' target='_blank' rel='noreferrer'>VIEW LIVE</a>
                </div>
                {/* <div className='projectContainer'>
                    <h3>DOGS APP | ACADEMIC PROJECT</h3>
                    <p>DOGS APP is a personal project that simulates a basic encyclopedia of dog breeds. It includes features such as a search bar, a filtering system, a form to add new breeds, and more.</p>
                    <a href='https://dogs-app-shaikohn.vercel.app/' target='_blank' rel='noreferrer'>VIEW LIVE</a>
                </div> */}
            </div>
        </div>
        <div>
            <h1>Front-End</h1>
            <div>
                <div className='projectContainer'>
                    <img src={godsroulette} alt="Gods Roulette image" className='projectImage' />
                    <h3>GOD'S ROULETTE | FREELANCE</h3>
                    <p>In this project, I developed a multiplayer casino game for 2 to 3 players from scratch using React and CSS. The goal of the game is for players to compete to achieve the highest profit balance at the end of 5 rounds. In each round, the player faces a randomly assigned casino challenge.</p>
                    <a href='https://godsroulette.app/' target='_blank' rel='noreferrer'>VIEW LIVE</a>
                </div>
                <div className='projectContainer'>
                    <img src={magicisland} alt="Magic Island image" className='projectImage' />
                    <h3>MAGIC ISLAND | FREELANCE</h3>
                    <p>MAGIC ISLAND is a multiplayer game for 2 or 3 players, where casino challenges are presented to the players. They must compete to see who finishes the game with the highest profit balance.</p>
                    <a href='https://magicisland.app/' target='_blank' rel='noreferrer'>VIEW LIVE</a>
                </div>
                <div className='projectContainer'>
                    <img src={bahelitours} alt="BA Helitours image" className='projectImage' />
                    <h3>BA HELITOURS | FREELANCE</h3>
                    <p>BA HELITOURS is an e-commerce app for purchasing helicopter tours. It includes features such as a contact form to arrange the tours, a system to view tour prices in different currencies, among other things.</p>
                    <a href='https://www.bahelitours.com/en/' target='_blank' rel='noreferrer'>VIEW LIVE</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;