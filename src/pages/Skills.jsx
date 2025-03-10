import React from 'react';
import './Skills.css';
import node from '../assets/skills/node.png';
import java from '../assets/skills/Java.png';
import express from '../assets/skills/Express.png';
import springboot from '../assets/skills/SpringBoot.png';
import mongo from '../assets/skills/Mongo.png';
import postgres from '../assets/skills/postgres.png';
import mysql from '../assets/skills/MySQL.png';
import react from '../assets/skills/react.png';
import redux from '../assets/skills/Redux.png';
import javascript from '../assets/skills/javascript.png';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import bootstrap from '../assets/skills/Bootstrap.png';

function Skills() {
  return (
      <div className='skillsContainer'>
        <div>
            <h1>Back-End Skills</h1>
            <div className='skillsGroup'>
                <div>
                    <img src={node} alt="Node logo" className='skills' width="75" />
                    <h3>Node.js</h3>
                    <p>(Advanced)</p>
                </div>
                <div>
                    <img src={express} alt="Express logo" className='skills' width="75" />
                    <h3>Express.js</h3>
                    <p>(Advanced)</p>
                </div>
                <div>
                    <img src={java} alt="Java logo" className='skills' width="75" />
                    <h3>Java</h3>
                    <p>(Basic)</p>
                </div>
                <div>
                    <img src={springboot} alt="SpringBoot logo" className='skills' width="75" />
                    <h3>SpringBoot</h3>
                    <p>(Basic)</p>
                </div>
            </div>
            <div className='skillsGroup'>
                <div>
                    <img src={mongo} alt="MongoDB logo" className='skills' width="75" />
                    <h3>MongoDB</h3>
                    <p>(Advanced)</p>
                </div>
                <div>
                    <img src={postgres} alt="Postgres logo" className='skills' width="75" />
                    <h3>PostgreSQL</h3>
                    <p>(Basic)</p>
                </div>
                <div>
                    <img src={mysql} alt="MySQL logo" className='skills' width="75" />
                    <h3>MySQL</h3>
                    <p>(Basic)</p>
                </div>
            </div>
        </div>
        {/* <img src={profileImage} alt="profile" className='profileImage' /> */}
        <div>
            <h1>Front-End Skills</h1>
            <div className='skillsGroup'>
                <div>
                    <img src={react} alt="React logo" className='skills' width="75" />
                    <h3>React</h3>
                    <p>(Advanced)</p>
               </div>
               <div>
                    <img src={redux} alt="Redux logo" className='skills' width="75" />
                    <h3>Redux</h3>
                    <p>(Advanced)</p>
               </div>
               <div>
                    <img src={javascript} alt="JavaScript logo" className='skills' width="75" />
                    <h3>JavaScript</h3>
                    <p>(Advanced)</p>
               </div>
            </div>
            <div className='skillsGroup'>
                <div>
                    <img src={html} alt="HTML logo" className='skills' width="75" />
                    <h3>HTML</h3>
                    <p>(Advanced)</p>
                </div>
               <div>
                    <img src={css} alt="CSS logo" className='skills' width="75" />
                    <h3>CSS</h3>
                    <p>(Advanced)</p>
               </div>
               <div>
                    <img src={bootstrap} alt="Bootstrap logo" className='skills' width="75" />
                    <h3>Bootstrap</h3>
                    <p>(Basic)</p>
               </div>
            </div>
        </div>
      </div>
  );
}

export default Skills;