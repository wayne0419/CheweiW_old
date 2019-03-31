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
				<a href="static/image/CheWeiWangResume(Letter).pdf"><img className="resume_photo" src="static/image/CheWeiWangResume(Letter).png"></img></a>
			</div>
		);
	}
}

export default ResumePage;
