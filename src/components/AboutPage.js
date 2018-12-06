import React, { Component } from 'react'

export default class AboutPage extends Component {
    onClick =() =>{
        const {history} = this.props
        //history.goBack()
        history.goForward()
    }

  render() {
    return (
      <div>
        AboutPage
        <button onClick = {this.onClick}>
            go back
        </button>
      </div>
    )
  }
}
