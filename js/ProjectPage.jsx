import React from 'react';

class ProjectPage extends React.Component {
  	constructor(props) {
    	//  Initialize mutable state
    	super(props);
		this.state = {};
  	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="ProjectPagebackground">
				<div className="ProjectCard">
					<h1>Projects</h1>
					<div className="ProjectCard_large_section">
						<h1>Game Development</h1>
						<div className="ProjectCard_small_section">
							<h2>Balloon</h2>
							<p>You are a ballon and try to push yourself as high as you can.</p>
							<p>Made in University of Michigan Wolverine Soft 2019 48-hours Turkey Game Jam</p>
							<p>Require a gamepad to play.</p>
							<p>Downloadable at: <a href="https://itch.io/jam/wsoft-turkey-jam-19/rate/522999" target="_blank">Mac Version</a><span>&nbsp;</span><a href="https://github.com/wayne0419/Balloon/blob/master/Balloon_win10.zip" target="_blank">Windows Version</a></p>
							<span className="skill-box">Unity</span>
							<span className="skill-box">C#</span>
							<span className="skill-box">Game Design</span>
							<span className="skill-box">Game Jam</span>
						</div>
						<div className="ProjectCard_small_section">
							<h2>Nen: En simulator</h2>
							<p>A simlation of the ability: Nen:En of a Phantom Rogue mamber Nobunaga Hazama from animie Hunter x Hunter</p>
							<p>Playable at: <a href="http://www-personal.umich.edu/~ddwayne/Nen_En/" target="_blank">http://www-personal.umich.edu/~ddwayne/Nen_En/</a></p>
							<span className="skill-box">Unity</span>
							<span className="skill-box">C#</span>
							<span className="skill-box">Game Design</span>
						</div>
						<div className="ProjectCard_small_section">
							<h2>Zelda_NES Dungeon rebuild + custom level</h2>
							<p>Playable at: <a href="http://www-personal.umich.edu/~ddwayne/Zelda_NES/" target="_blank">http://www-personal.umich.edu/~ddwayne/Zelda_NES/</a></p>
							<span className="skill-box">Unity</span>
							<span className="skill-box">C#</span>
							<span className="skill-box">Game Design</span>
						</div>
						<div className="ProjectCard_small_section">
							<h2>Infectant</h2>
							<p>A 2D reverse-tower-defense game built with Umich Wolverine Soft Studio.</p>
							<p>Window version Download: <a href="http://www-personal.umich.edu/~ddwayne/Infectant_win.zip" target="_blank">http://www-personal.umich.edu/~ddwayne/Infectant_win.zip</a></p>
							<p>Mac version Download: <a href="http://www-personal.umich.edu/~ddwayne/Infectant_mac.app.zip" target="_blank">http://www-personal.umich.edu/~ddwayne/Infectant_mac.app.zip</a></p>
							<span className="skill-box">Unity</span>
							<span className="skill-box">C#</span>
							<span className="skill-box">Game Design</span>
						</div>
					</div>
					<div className="ProjectCard_large_section">
						<h1>Web Development</h1>
						<div className="ProjectCard_small_section">
							<h2>Internal Network Web Application – Ally Financial Inc.</h2>
							<p>Collaborate with UM peers from a variety of disciplines, University of Michigan faculty sponsors, 
								and Ally Financial sponsors to deliver a full-stack web application for internal network of Ally’s financial call center in December 2019.
								Up to now, we have completed investigating, reviewing end-user requirements, and designing of the architecture of the web application.
								Currently, we are designing and constructing data visualization on the web application.
							</p>
							<span className="skill-box">HTML</span>
							<span className="skill-box">CSS</span>
							<span className="skill-box">JavaScript/React</span>
							<span className="skill-box">Python/Python Flask</span>
							<span className="skill-box">SQLite</span>
						</div>
						<div className="ProjectCard_small_section">
							<h2>Insta485 – EECS 485 Course Project</h2>
							<p>Develop a simple version of Instagram using Python flask, SQLite and React</p>
							<p>Deployed with Amazon AWS service at: <a href="http://ec2-18-222-206-33.us-east-2.compute.amazonaws.com" target="_blank">http://ec2-18-222-206-33.us-east-2.compute.amazonaws.com</a></p>
							
							<span className="skill-box">HTML</span>
							<span className="skill-box">CSS</span>
							<span className="skill-box">JavaScript/React</span>
							<span className="skill-box">Python/Python Flask</span>
							<span className="skill-box">SQLite</span>
						</div>
					</div>
					<div className="ProjectCard_large_section">
						<h1>Algorithm &amp; Data structure</h1>
						<div className="ProjectCard_small_section">
							<h2>Letterman game – EECS 281 Course Project</h2>
							<p>Given "starting word", "ending word" and a dictionary, 
								together with types of conversions allowed (such as changing one letter to another, 
								adding or deleting a letter, etc) using stack and queue to find how to change from "starting word" to "ending word".
							</p>
							<span className="skill-box">C++</span>
							<span className="skill-box">Data Structure: Stack, Queue</span>
							<span className="skill-box">Algorithm: DFS, BFS</span>
						</div>
						<div className="ProjectCard_small_section">
							<h2>MineEscape game – EECS 281 Course Project</h2>
							<p>A miner trapped in a mine, given certain map, 
								find the easiest way to get out by finding softest rock and using TNT. 
								The whole program is implemented using priority queue.
							</p>
							<span className="skill-box">C++</span>
							<span className="skill-box">Data Structure: Heap(priority_queue)</span>
							<span className="skill-box">Algorithm: DFS</span>
						</div>
						<div className="ProjectCard_small_section">
							<h2>Database simulator – EECS 281 Course Project</h2>
							<p>Using unordered map to simulate operations for database, e.g. 
								Insertion, Deletion, Generate Index, Print, Join two database, Remove, etc.
							</p>
							<span className="skill-box">C++</span>
							<span className="skill-box">Data Structure: Hashtable(unordered_map)</span>
						</div>
						<div className="ProjectCard_small_section">
							<h2>Pokemon catching planner – EECS 281 Course Project</h2>
							<p>Given a map of Pokemon information, plan the easiest path to catch all of them by using branch and bound, 
								Prim’s algorithm to solve Traveling Salesman Problem.
							</p>
							<span className="skill-box">C++</span>
							<span className="skill-box">Algorithm: Prim's algorithm, Traveling Salesman Problem, Branch&Bound</span>
						</div>
					</div>
					<div className="ProjectCard_large_section">
						<h1>Other C++ Projects</h1>
						<div className="ProjectCard_small_section">
							<h2>Temperature-control Water Bottle – 2017 UM-SJTU Joint Institute Summer Design Expo</h2>
							<p>
								Design and build a water bottle that allows user to warm up or cool down water temperature.
								<img className="poster" src="static/image/Group6_Poster-1-1.png"/>
								<a href="static/image/Group6_Fantasy_FinalReport-5.pdf" target="_blank">Link to project report</a>
							</p>
							<span className="skill-box">C++</span>
							<span className="skill-box">Arduino</span>
							<span className="skill-box">Semiconductor cold plate</span>
						</div>
						<div className="ProjectCard_small_section">
							<h2>Bridge Crane – UM-SJTU Joint Institute VG100 Project</h2>
							<p>
								Design and build a bridge crane and a paper bridge.
								<a href="static/image/VG100Proj1.mp4" target="_blank">Link to a footage of our bridge crane on game day</a>
							</p>
							<span className="skill-box">C++</span>
							<span className="skill-box">Arduino</span>
						</div>
						<div className="ProjectCard_small_section">
							<h2>Robot Lifter – The 9th SJTU Mechanical Innovation Competition for Freshman</h2>
							<p>
								Constructed a remote control robot lifter to compete with others robot.
							</p>
							<span className="skill-box">C++</span>
							<span className="skill-box">Arduino</span>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectPage;
