import React from 'react';
import ReactDOM from 'react-dom';
import MainStuff from './MainStuff';


/*ReactDOM.render(
  <MainStuff />,
  document.getElementById('ReactEntrypoint_main')
);*/

let MainStuffComponent = ReactDOM.render(<MainStuff ref={(mainstuffComponent) => {window.mainstuffComponent = mainstuffComponent}}/>, document.getElementById('ReactEntrypoint_main'));

//Use window.mainstuffComponent.METHOD to access MainStuff's member function and data(props,state...etc)
