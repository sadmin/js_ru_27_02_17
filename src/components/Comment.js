//### HT1.1 Создать CommentList для каждой открытой статьи
import React, {Component} from 'react'

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