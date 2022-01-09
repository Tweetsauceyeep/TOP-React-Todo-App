import React, {Component} from 'react'

class EditForm extends Component {
  render(){
    return(
      <form>
        <input placeholder="edit text" type="input"/>
        <button type="submit">Finish Editing</button>
      </form>
    )
  }
}

export default EditForm
