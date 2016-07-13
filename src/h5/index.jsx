import React from 'react';
import {render} from 'react-dom';

class Top extends React.Component{
	render(){
		return (
			<div className="insert">
	            <ul className="menu">
	            	<ol>
						<button id="confirm" className="confirm" >确定</button>
		            	<button className="confirm">预览</button>
		            	<button className="confirm">案例</button>
	                	<button className="confirm">生成页</button>
	            	</ol>
	                <li data-type='bj'><span>背景</span></li>
	                <li data-type='img'><span>图片</span></li>
	                <li data-type='text'><span>文本</span></li>
	                <li data-type='button'><span>按钮</span></li>
	            </ul>
	        </div>
	    )
	}
}

class Box extends React.Component{
	render(){
		return (
			<div style={{display: 'flex', height: '91%', width: '98%', margin: '1% auto'}}>
				<ul className="cont list">
					<li><span>111</span></li>
					<li><span></span></li>
				</ul>
				<div className="cont main">
					<div className="config"></div>
					<div className="phone">
						<div className="phoneTit"><span>设置</span><font>标题</font></div>
						<div className="phoneBox swiper-container"> 
						  <div className="swiper-wrapper">
						      <div className="swiper-slide"></div>
						  </div>
						</div>
					</div>
			        <div id="panel" className="config"></div>

				</div>
				<div className="cont page">
					<ul>
						<li>第一页</li>
					</ul> 
					<ul>
						<li className="addPage">添加一页</li> 
					</ul>                        
				</div>
	        </div>
	    )
	}
}


		
render (<Top/>,document.getElementById('top'));
render (<Box/>,document.getElementById('box'));
