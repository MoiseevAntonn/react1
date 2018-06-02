import React, {Component, PropTypes} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as incrementActions from './actions/IncrementActions'
import countState from './reducers/index'

class Header extends Component {
	
	render(){
		return (
			<div>
         	 	<Toolbar>
           		 	<Badge children="ZLa" badgeContent={this.props.numberOfClick} color="primary"/>
          		</Toolbar>
        	</div>
		);
	}
}

function mapStateToProps(state){
    return{
      numberOfClick: state.numberOfClick
    }
  }
  
 



export default connect(mapStateToProps)(Header);

