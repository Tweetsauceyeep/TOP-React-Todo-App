import React, {Component} from 'react'


class Overview extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul>
        {this.props.tasksArray.map((item)=>{
          return (<li key={item.id}>{item.text}</li>)
        })}
      </ul>
    )
  }
}

export default Overview
