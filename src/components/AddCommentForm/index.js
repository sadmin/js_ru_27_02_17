import React from 'react';
import './style.css'

class AddCommentFrom extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    userName: '',
    commentBody: ''  
  };

handleUserNameChange = ev => {
    this.setState({userName : ev.target.value});
}
handleCommentBodyChange = ev => {
    this.setState({commentBody : ev.target.value});
}
handleSubmitClick = ev => {
    if(ev && ev.preventDefault) ev.preventDefault()
    console.log('handleSubmitClick');
}


  render() {
    return (
      <div className="AddCommentForm">
        <div className="row">
            <label>UserName</label>
            <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
        </div>
        <div className="row">
            <label>Comment</label>
            <textarea value={this.state.commentBody} onChange={this.handleCommentBodyChange}></textarea>
        </div>
        <div className="row">
            <a href="#" onClick={ this.handleSubmitClick}>Submit</a> 
        </div>
      </div>
    );
  }

}
export default AddCommentFrom