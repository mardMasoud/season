import React, { Component } from 'react'
export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {lat:null,error:""} 
    navigator.geolocation.getCurrentPosition(pos => this.setState({lat:pos.coords.latitude}
      ,err=>this.setState({error:err.message})
      )
       
    );
  }
  render() {
    return (
      <div>
      <p>Latitude:{this.state.lat}</p>   
      <p>error:{this.state.error}</p>
      </div>
      
      
    )
  }
}



