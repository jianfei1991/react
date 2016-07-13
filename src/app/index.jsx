import React from 'react';
import {render} from 'react-dom';
import Drag from './drag.jsx';



class TabSwitch extends React.Component{
	constructor(props){
		super(props);
		this.tab = this.tab.bind(this);
		this.state = {
			divStyle:{
				border:'solid #ccc 1px',
				width:'200px',
				height:'230px',
				margin:'100px auto'
			}
		}
	}
	tab(event){
		console.log(event);
		if(event.target.tagName.toLowerCase()=='input'){
			for(var i = 0; i < this.refs.panel.childNodes.length; i++){
				this.refs.panel.childNodes[i].className = '';
			}
			this.refs.panel.childNodes[event.target.defaultValue-1].className='ac';
		}
	}
	render(){
		return(
			<div style={this.state.divStyle} >
				<div ref='ctrl' id="ctrl" onClick={this.tab} style={{border:'solid green 1px'}}>
					<input type="button" value="1"/>
					<input type="button" value="2"/>
					<input type="button" value="3"/>
				</div>
				<ul ref="panel" id="panel">
					<li className="ac" style={{position:'relative' }}>!!!!
						<Drag/>
					</li>
					<li className=''>2222</li>
					<li className=''>3333</li>
				</ul>
			</div>
		)
	}
}

render (<TabSwitch/>,document.getElementById('tab'));