import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import UserPage from './UserPage'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>


      It's a Salon!
      <UserPage/>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch)
// }
