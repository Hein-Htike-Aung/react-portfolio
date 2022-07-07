import React from 'react';
import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {
	// const textRef = useRef();

	// useEffect(() => {
	//   init(textRef.current, {
	//     showCursor: true,
	//     backDelay: 1500,
	//     backSpeed:60,
	//     strings: ["Developer", "Designer", "Content Creator"],
	//   });
	// }, []);

	return (
		<div id='intro' className='intro'>
			<div className='left'>
				<div className='imgContainer'>
					<img src='assets/xiaoting.png' alt='' />
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>Hi There, I'm</h2>
					<h1>Xiaoting</h1>
					{/* <h3>
            Freelance <span ref={textRef}></span>
          </h3> */}
					<div className='titleContainer'>
						<h3>Freelance</h3>
						<h4>
							<Typewriter
								options={{
									strings: ['Developer', 'Designer', 'Content Creator'],
									autoStart: true,
									delay: 75,
									loop: true,
								}}
							/>
						</h4>
					</div>
				</div>
				<a href='#portfolio'>
					<img src='assets/down.png' alt='' />
				</a>
			</div>
		</div>
	);
};

export default Intro;
