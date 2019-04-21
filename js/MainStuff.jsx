import React from 'react';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import ProjectPage from './ProjectPage';

class MainStuff extends React.Component {
	constructor(props) {
		// Initialize mutable state
		super(props);
		this.state = {
			show_who: 0, //0 for AboutPage, 1 for ResumePage
		};
    	this.change_show_who = this.change_show_who.bind(this);
  	}
	componentDidMount(){
	}
	change_show_who(target) {
		// Change showed target
		this.setState({
			show_who: target,
		});
	}

  	render(){
		if(this.state.show_who===0)
			return(<AboutPage/>);
		else if(this.state.show_who===1)
			return(<ResumePage/>);
		else if(this.state.show_who===2)
			return(<ProjectPage/>);
		else
			return("");
  	}
}

export default MainStuff;
