import React, { Component } from 'react'
import UserAppt from './UserAppt'
import UserSched from './UserSched'

export default class UserContainer extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
      UserContainer
      <img src={this.props.stylist.pic} alt={this.props.stylist.name}/>
      <h2>{this.props.stylist.name}</h2>
      <UserAppt/>
      <UserSched/>
      </div>
    )
  }
}
