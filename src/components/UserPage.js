import React, { Component } from 'react'
import UserContainer from './UserContainer'
import {connect} from 'react-redux'


class UserPage extends Component {
  render(){


    const renderUsers = this.props.stylists.map(stylist => <UserContainer key={stylist.name} stylist={stylist}/>)

    return(
      <div>
      UserPage
      {renderUsers}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    stylists: state.stylists
  }
}

export default connect(mapStateToProps)(UserPage)
