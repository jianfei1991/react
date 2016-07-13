import React from 'react';

class Drag extends React.Component{
	constructor(props){
		super(props);
		this.drag = this.drag.bind(this);
		this.state = {
			divStyle:{
				height:'100px',
				width:'100px',
				border:'solid yellow 2px',
				position:'absolute'
			}
		}
	}
	drag(ev){
		var oDiv = this.refs.dragDiv;//ev.target;
		// ev.cancelBubble = true;
		// debugger;
		var disX = ev.clientX - oDiv.offsetLeft;
		var disY = ev.clientY - oDiv.offsetTop;

		document.onmousemove = function(ev){
			var l = ev.clientX - disX;
			var t = ev.clientY - disY;
			oDiv.style.left = l+'px';
			oDiv.style.top  = t+'px';
		}
		document.onmouseup = function(ev){
			console.log("X:"+oDiv.offsetLeft+"--- ----"+"Y:"+oDiv.offsetTop)
			document.onmousemove = null;
			document.onmouseup = null;
		}
		return false;
	}
	render(){
		return (
			<div ref="dragDiv" style={this.state.divStyle} onMouseDown={this.drag}>
				
			</div>
		)
	}
}

export default Drag;