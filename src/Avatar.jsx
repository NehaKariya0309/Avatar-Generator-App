import React, { useState } from 'react';
import "./Avatar.css"
import Axios from 'axios';
import { useEffect } from 'react';

const Avatar = () => {

	// Setting up the initial states using react hook 'useState'
	const [sprite, setSprite] = useState("bottts");
	const [seed, setSeed] = useState(1000);
	const [radius, setRadius] = useState(0);
	const [size, setSize] = useState();
	const [scale, setScale] = useState(100);
	const [flip, setFlip] = useState(false);
	const [rotate, setRotate] = useState(0);
	const [translateX,setTranslateX] = useState(0);
	const [translateY,setTranslateY] = useState(0);

    useEffect(()=>{
        setRadius(0);
        // setSeed(0);
		// handleGenerate();
		
        setScale(100);
        // setFlip(false);
        setRotate(0);
        setTranslateX(0);
        setTranslateY(0);
    },[sprite,seed]);
	function handleRadius(e) {
		setRadius(e.target.value);
	}

    function handleSize(e) {
		setSize(e.target.value);
	}
    function handleScale(e) {
		setScale(e.target.value);
	}
    function handleFlip(e) {
		setFlip(e.target.checked);
	}
    function handleRotate(e) {
		setRotate(e.target.value);
	}
	// Function to set the current sprite type
	function handleTranslateX(e) {
		setTranslateX(e.target.value);
	}
    function handleTranslateY(e) {
		setTranslateY(e.target.value);
	}
	
	// Function to generate random seeds for the API
	function handleGenerate() {
		let x = Math.floor(Math.random() * 1000);
		setSeed(x);
	}
    function handleSprite(type){
        setSprite(type);
    }
	
	// Function to download image and save it in our computer
    // https://avatars.dicebear.com/api/adventurer/.svg?b=%239a5151&size=6&scale=104&rotate=360&translateX=5
	function downloadImage() {
		Axios({
			method: "get",
			url: `https://avatars.dicebear.com/api/${sprite}/${seed}.svg?b=%2361a6b8&r=${radius}&scale=${scale}&rotate=${rotate}&translateX=${translateX}&translateY=${translateY}&flip=${flip}`,
			responseType: "arraybuffer"
		})
		.then((response) => {
			var link = document.createElement("a");
			link.href = window.URL.createObjectURL(
				new Blob([response.data],
				{ type: "application/octet-stream" })
			);
			link.download = `${seed}.svg`;
			document.body.appendChild(link);
			link.click();
			setTimeout(function () {
				window.URL.revokeObjectURL(link);
			}, 200);
		})
		.catch((error) => { });
	}

	return (
		<div className="container">
			<div className="nav">
				<p>Random Avatar Generator</p>
			</div>
			<div className="home">
				<div className="btns">
					<button onClick={() => {
						handleSprite("avataaars") }}>Human</button>
					<button onClick={() => {
						handleSprite("adventurer") }}>Adventurer</button>
					<button onClick={() => {
						handleSprite("bottts") }}>Bots</button>
					<button onClick={() => {
						handleSprite("jdenticon") }}>Vector</button>
					<button onClick={() => {
						handleSprite("identicon") }}>Identi</button>
					<button onClick={() => {
						handleSprite("gridy") }}>Alien</button>
					<button onClick={() => {
						handleSprite("micah") }}>Avatars</button>
				</div>
				<div className="total">
				<div className="avatar">
					<figure><img src=
{`https://avatars.dicebear.com/api/${sprite}/${seed}.svg?b=%2361a6b8&r=${radius}&scale=${scale}&rotate=${rotate}&translateX=${translateX}&translateY=${translateY}&flip=${flip}`} alt="Sprite" />
				</figure>
				</div>
				{/* <div className="generate">
					<button id="gen" onClick={() => {
						handleGenerate() }}>Next</button>
					<button id="down" onClick={() => {
						downloadImage() }}>Download</button>
				</div> */}
   <div className="custom">            
		<div className="prop">
				<label>Seed:</label>
             <input className="range" value={seed} type="text" onChange={(e)=>setSeed(e.target.value)}/>
			 </div>
			 <div className="prop">
             <label>Radius:</label>
             <input className='range' value={radius} type="range" min="0" max="50" step="1"  onChange={(e)=>handleRadius(e)}/>
             </div>
			 {/* <label>Size:</label>
             <input className='scale' value={size} type="range" min="1" onChange={()=>handleSize()}/> */}
             <div className="prop">
			 <label>Scale:</label>
             <input className='range' value={scale} type="range" min="0" max="100" step="1" onInput={(e)=>handleScale(e)}/>
            </div>
			{/* <div className="prop">
			 <label class="switch">
                Flip:
            </label>
            <input className='flip' value={flip} type="checkbox" onChange={(e)=>handleFlip(e)}/>
			 </div> */}
			 <div className="prop">
            <label>Rotate:</label>
             <input className='range' value={rotate} type="range" min="0" max="360" step="1"  onChange={(e)=>handleRotate(e)}/>
             </div>
			 <div className="prop">
			 <label>TranslateX:</label>
             
			 <input className='range'  value={translateX} type="range" min="-100" max="100" step="1"  onChange={(e)=>handleTranslateX(e)}/>
             </div>
			 <div className="prop">
			 <label>TranslateY:</label>
             <input className='range' value={translateY} type="range" min="-100" max="100" step="1"  onChange={(e)=>handleTranslateY(e)}/>
            </div>
			</div>
                </div>
			<div className="generate">
					<button id="gen" onClick={() => {
						handleGenerate() }}>Next</button>
					<button id="down" onClick={() => {
						downloadImage() }}>Download</button>
				</div>
				</div>
				</div> 
			
		
	)
}

export default Avatar;
