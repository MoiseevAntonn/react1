import React, { Component } from 'react';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'


import {bindActionCreators} from 'redux'
import {incrementNumberOfClick} from './actions/IncrementActions'
import countState from './reducers/index'

import Header from './Header';



class App extends Component {
  


  constructor(props){
    super(props);
    this.state = {data: [],numberOfClick: 0}
  }

  componentDidMount() {
    axios.get('https://5afad185bc1beb0014c29d5f.mockapi.io/users')
      .then(
        (response) => this.setState({data: response.data})
        )
      .catch(function(error){
        console.log(error);
      });
  }

  
  
  render() {
    console.log('data', this.state.data);
    const {countState} = this.props.incrementNumberOfClick;
    return (
        <div>
          
          <Header/>
          <div>
              <div>
                <Button children = 'Sort id' variant='raised' onClick={() => this.sort('id')}/>
              </div>
              <div>
                <Button children = 'Sort first_name' variant='raised' onClick={() => this.sort('first_name')}/>
              </div>
              <div>
                <Button children = 'Sort second_name' variant='raised' onClick={() => this.sort('last_name')}/>
              </div>
              <div>
                <Button children = 'Sort department' variant='raised' onClick={() => this.sort('department')}/>
              </div>
              <GridList cellHeight={50}>
                  {this.state.data.map(this.renderUser)}
              </GridList>
          </div>
        </div>
    );
  }


  renderUser=(user,index)=>{
    return (
        <div style={styles.noteTheme} key = {index}>
          <Button children = '' onClick={()=>this.props.incrementNumberOfClick()}>
            {user.id} {user.first_name} {user.last_name} {user.department}
          </Button>
        </div>
      );
  }


  sort(type) {
      //const {data} = this.this.props;
      const sorted =[].slice.call(this.state.data).sort((a,b)=>{
        if(a[type]===b[type]){return 0;}
        return a[type]>b[type];
      });

      this.setState({data: sorted});
  }

  
}


  const styles = {
    noteTheme : {
     backgroundColor : 'orange',
     padding : 12,
     borderRadius : 12,
     display: 'flex',
     justifyContent: 'space-between'
    }
  }

  function mapDispatchToProps(dispatch){
    return{
      incrementNumberOfClick: bindActionCreators(incrementNumberOfClick, dispatch)
  }
 }

  export default connect(null,mapDispatchToProps)(App);

