//### HT1.1 Создать CommentList для каждой открытой статьи
import React, {Component} from 'react'

//Это можно сделать Functional Component, по возможности используй их
class Comment extends Component {

    render() {
        const {comment} = this.props
        return (
            <div>
               // <a href="#">{comment.id}</a>. 
               // <strong>{comment.user}</strong> say: {comment.text}
               111
            </div>
        )
    }

}

export default Comment
