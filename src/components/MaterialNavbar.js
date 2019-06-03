import React, { Component } from 'react';
class MaterialNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            condition: false,
            drops: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.dropdown = this.dropdown.bind(this)
    }
    handleClick() {
        this.setState({
            condition: !this.state.condition
        })
    }
    dropdown() {
        this.setState({
            drops: !this.state.drops
        })
    }
    render() {
        return (
            <div className="">
            	<header  className={this.props.position}>
            		<div className="content">
            			<a href="#" className="logo">
            				{this.props.logo}
            			</a>
	            		<nav className={ this.state.condition ? "nav-container open" : "nav-container" }>
	            			<ul>
		            			{this.props.navigation.map((nav, index) => {
							        return(
							            <li key={index} >
							                <a href={nav.Url}>{nav.linkName}</a>
							            </li>
							        )
						        })}
						        <li className= { this.state.drops ? "dropdown open" : "dropdown" }>
						        	<a href="#"  
						        		onClick={ this.dropdown }>hamza
						        		<b class="caret"></b>
						        	</a>
						        	<ul className="dropdown-menu">
                						<li><a href="#">dropdown 1</a></li>
                                        <li><a href="#">dropdown 2</a></li>
                                        <li><a href="#">dropdown 3</a></li>
              						</ul>
						        </li>
                                 {this.props.navbutton.map((btn, index) => {
                                    return(
                                        <li className="nav-btn" key={index} >
                                            <a href={btn.btnUrl} className="btn " style={{background: btn.btnColor}}>{btn.btnName}</a>
                                        </li>
                                    )
                                })}
	            			</ul>
	            		</nav>
						<div 
							onClick={ this.handleClick } 
        					className= { this.state.condition ? "toggle-menu toggled" : "toggle-menu" }
        				>
        				</div>
            		</div>
            	</header>
            </div>
        )
    }

}

export default MaterialNavbar