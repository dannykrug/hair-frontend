import React, {Component} from 'react'

export default class Login extends Component{
  render(){
    return(
      <div>
      <form>
      <input type='text' placeholder='name' key='name'/>
      <input type='text' placeholder='password' key='password'
      </form>
      </div>
    )
  }
}
