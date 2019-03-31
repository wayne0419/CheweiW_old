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
				<img className="resume_photo" src="static/image/CheWeiWangResume(Letter).png"></img>
			</div>
		);
	}
}

export default ResumePage;
