import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserAppt extends Component{
  render(){
    console.log(this.props)
    return(
      <div>
      <h2>Service:{this.props.appointments[0].service}</h2>
      <p>Date:{this.props.appointments[0].date} Time:{this.props.appointments[0].time}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    appointments: state.appointments
  }
}

export default connect(mapStateToProps)(UserAppt)
