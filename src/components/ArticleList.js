import React, {PropTypes, Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {


    render() {
        const {articles,openItemId,toggleOpenItem} = this.props
        console.log(openItemId);
        console.log(toggleOpenItem);
        const articleComponents = articles.map(article => {
        console.log(article.id, openItemId)                                       
         return <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openItemId}
                     toggleOpen={toggleOpenItem(article.id)}
            />
        </li>})

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }


}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default accordion(ArticleList)