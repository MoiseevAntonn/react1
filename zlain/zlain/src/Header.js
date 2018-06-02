import React, {Component, PropTypes} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import {mapStateToProp} from './App'
import {connect} from 'react-redux'

class Header extends Component {
	
	render(){
		console.log('items', this.props.items);
		return (
			<div>
         	 	<Toolbar>
           		 	<Badge children="ZLa" badgeContent={4} color="primary"/>
          		</Toolbar>
        	</div>
		);
	}
}

export default Header;