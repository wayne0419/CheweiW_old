import React from 'react';

class AboutPage extends React.Component {
  	constructor(props) {
    	//  Initialize mutable state
    	super(props);
		this.state = {};
  	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="codeboard">
			<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.welcome()</p>
			<p className="codeoutputNotend">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=>&nbsp;"Hi, I am Che Wei Wang (Wayne Wang). /</p>
			<p className="codeoutput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=>&nbsp;This is my personal website where I practice and showoff :) some web dev skills."</p>
			<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.origin</p>
			<p className="codeoutput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=>&nbsp;"Taipei, Taiwan."</p>
			<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.education</p>
			<p className="codeoutput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=>&nbsp;"University of Michigan, Computer Science major."</p>
			<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.expectedGraduation</p>
			<p className="codeoutput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=>&nbsp;"April, 2020."</p>
			<p className="codeinput">>&nbsp;&nbsp;&nbsp;&nbsp;CheWei.interests</p>
			<p className="codeoutput">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=>&nbsp;"I love coding, learning, cooking and playing computer games with friends."</p>
			</div>
		);
	}
}

export default AboutPage;