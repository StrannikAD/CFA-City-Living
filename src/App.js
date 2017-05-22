import React from 'react'
import Fetch from 'react-fetch'
import './App.css';

export default class App extends React.Component{

  render(){
    return (
      <Fetch url="https://api.teleport.org/api/urban_areas/slug:sydney/scores/">
        <TestComponent/>
      </Fetch>
    )
  }

}

class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}

