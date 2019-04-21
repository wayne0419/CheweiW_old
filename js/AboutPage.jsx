import React from 'react';

class AboutPage extends React.Component {
  	constructor(props) {
    	//  Initialize mutable state
    	super(props);
		this.state = {blinking_dash: "_"};
		this.dash_blinking = this.dash_blinking.bind(this);
		this.dasher = 0;
  	}
	componentDidMount() {
		this.dasher = setInterval(this.dash_blinking, 500);
	}
	dash_blinking() {
		if(this.state.blinking_dash==="_"){
			this.setState({blinking_dash: " "});
		}
		else{
			this.setState({blinking_dash: "_"});
		}
	}
	componentWillUnmount() {
		clearInterval(this.dasher);
	}
	render() {
		return (
			<div className="AboutPagebackground">
				<div className="codeboardtop"><span className="codeboardtop_red"></span><span className="codeboardtop_yellow"></span><span className="codeboardtop_green"></span></div>
				<div className="codeboard">
				<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.welcome()</p>
				<p className="codeoutputNotend">"Hi, I am Che Wei Wang (Wayne Wang).</p>
				<p className="codeoutput">This is my personal website where I practice and showoff :) some web dev skills."</p>
				<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.origin</p>
				<p className="codeoutput">"Taipei, Taiwan."</p>
				<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.education</p>
				<p className="codeoutputNotend">[ "University of Michigan, Computer Science Major.",</p>
				<p className="codeoutput">"Shanghai Jiaotong University, Electrical &amp; Computer Engineering Major" ]</p>
				<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.expectedGraduation</p>
				<p className="codeoutput">{"{"} "UM": "April, 2020", "SJTU": "August, 2020" {"}"}</p>
				<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.interests</p>
				<p className="codeoutput">"I love coding, learning, cooking and playing computer games with friends."</p>
				<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.blinking_dash}</p>
				</div>
			</div>
		);
	}
}

export default AboutPage;