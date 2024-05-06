import React, { useState } from 'react';
import './skills.scss';
import jsonData from './assets/backend/text.json';
import imageOfMe from './assets/image-of-me/picture-of-me.png';

const Skills = () => {
    const [background, setBackground] = useState('linear-gradient(to bottom, gray, transparent)');
    const [text, setText] = useState('Click on the skill icons to see more...');
    const [subString, setSubstring] = useState(true);
    const [menu, setMenu] = useState(false);
    const [fullText, setFullText] = useState(''); 
    
 
    const loadMore = () => {
        if (subString) {
            setText(fullText);
            setSubstring(false);
        } else {
            setText(fullText.substring(0, 200) + '...'); 
            setSubstring(true);
        }
    };
    
 
    const handleIconClick = (newBackground, newText) => {
        setMenu(true); 
        setBackground(newBackground); 
        setFullText(newText); 
        setText(newText.substring(0, 200) + '...'); 
        setSubstring(true); 
    };
    
    return (
        <div className='main'>
            <div className='image__icon__main'>
                <div className='iconsDiv'>
                    <div className='line__top'></div>
                    <div className='icons' id="illustrator" onClick={() => handleIconClick('linear-gradient(to bottom, orange, transparent)', jsonData.illustrator)}></div>
                    <div className='icons' id="photoshop" onClick={() => handleIconClick('linear-gradient(to bottom, blue, transparent)', jsonData.photoshop)}></div>
                    <div className='icons' id="figma" onClick={() => handleIconClick('linear-gradient(to bottom, purple, transparent)', jsonData.figma)}></div>
                    <div className='icons' id="dallE" onClick={() => handleIconClick('linear-gradient(to bottom, #10AD87, transparent)', jsonData.dallE)}></div>
                    <div className='icons' id="midjourney" onClick={() => handleIconClick('linear-gradient(to bottom, #ffff, transparent)', jsonData.midJourney)}></div>
                    <div className='line__bottom'></div>
                </div>

                <div className='background' style={{background}}>
                    <div className='image' style={{
                        backgroundImage: `url(${imageOfMe})`,
                    }}></div>
                </div>
                  <div className='iconsDiv'>
                    <div className='line__top'></div>
                    <div className='icons' id="html" onClick={() => handleIconClick('linear-gradient(to bottom, #F75934, transparent', jsonData.html)}></div>
                    <div className='icons' id="css" onClick={() => handleIconClick('linear-gradient(to bottom, #3474E8, transparent', jsonData.css)}></div>
                    <div className='icons' id="javascript" onClick={() => handleIconClick('linear-gradient(to bottom, #E9D54C, transparent', jsonData.javascript)}></div>
                    <div className='icons' id="react" onClick={() => handleIconClick('linear-gradient(to bottom, #4CC8ED, transparent', jsonData.react)}></div>
                    <div className='icons' id="python" onClick={() => handleIconClick('linear-gradient(to bottom, #E9D54C, transparent', jsonData.python)}></div>
                    <div className='line__bottom'></div>
                </div>
            </div>
            <p className='text'>{text}</p>
            {menu && (!subString ? <p className='load__more' onClick={loadMore}>Load less</p> : <p className='load__more' onClick={loadMore}>Load more</p>)}
        </div>
    );
}

export default Skills;
