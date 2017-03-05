import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {comments} = this.props
        const {isOpen} = this.state
         
        const commentsItems = isOpen ? comments.map(comment => <li key={comment.id} id={"comm"+comment.id}  /*value={comment.id}*/>
          <a href={"#comm"+comment.id}>Comment</a> from <b>{comment.user}</b>:
          <p>{comment.text}</p>
        </li>) : null;
        
        return (
        <div>    
            <a href='#' onClick={this.handleClick}><h4>Комментарии:</h4></a>
            <ol>
                {commentsItems}
            </ol>
        </div>        
        )
    }
    
    handleClick = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default CommentList