import React from 'react';

class ResumePage extends React.Component {
  	constructor(props) {
    	//  Initialize mutable state
    	super(props);
		this.state = {};
  	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="ResumePagebackground">
				<div className="ResumeCard">
					<div className="ResumeCard_large_section">
						<h1>Education</h1>
						<div className="ResumeCard_small_section">
							<h2>University of Michigan, Ann Arbor, MI, USA.</h2>
							<p>Bachelor of Science in Engineering in Computer Science, expected graduation in April 2020</p>
						</div>
						<div className="ResumeCard_small_section">
							<h2>Shanghai Jiao Tong University, Shanghai, China.</h2>
							<p>Bachelor of Science in Engineering in Electrical &amp; Computer Engineering, expected graduation in September 2020</p>
						</div>
					</div>
					<div className="ResumeCard_large_section">
						<h1>Courses</h1>
						<div className="ResumeCard_small_section">
							<ul>
								<li>Web System</li>
								<li>Data Structure and Algorithms</li>
								<li>Introduction to Computer Organization</li>
								<li>Introduction to Logic Circuit</li>
								<li>Linear Algebra</li>
								<li>Discrete Mathematics</li>
								<li>Probability and Statistics</li>
							</ul>
						</div>
					</div>
					<div className="ResumeCard_large_section">
							<h1>Programming Languages &amp; Devlopment Tools</h1>
							<div className="ResumeCard_small_section">
								<h2>Programming Languages</h2>
								<ul>
									<li>C/C++</li>
									<li>JavaScript</li>
									<li>Python</li>
									<li>MATLAB</li>
									<li>Bash script</li>
								</ul>
							</div>
							<div className="ResumeCard_small_section">
								<h2>Front-end Tools</h2>
								<ul>
									<li>HTML5/CSS3</li>
									<li>JavaScript tool: npm/webpack/eslint</li>
									<li>React</li>
								</ul>
							</div>
							<div className="ResumeCard_small_section">
								<h2>Back-end Tools</h2>
								<ul>
									<li>Python Flask</li>
									<li>Python Jinja</li>
									<li>Rest API</li>
									<li>SQLite</li>
								</ul>
							</div>
							<div className="ResumeCard_small_section">
								<h2>Others</h2>
								<ul>
									<li>Git</li>
									<li>OS: Windows/Linux</li>
								</ul>
							</div>
					</div>
					<div className="ResumeCard_large_section">
						<h1>Languages</h1>
						<div className="ResumeCard_small_section">
							<ul>
								<li>Mandarin Chinese</li>
								<li>English</li>
							</ul>
						</div>
					</div>
					<div className="ResumeCard_large_section">
						<h1>Clubs</h1>
						<div className="ResumeCard_small_section">
							<ul>
								<li>UM Wolverine Soft(Game development club)  Sep 2018 - Now</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ResumePage;
