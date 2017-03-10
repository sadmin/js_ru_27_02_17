import React, {PropTypes, Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {


    render() {
        const {articles,openItemId,toggleOpenItem} = this.props
        console.log(openItemId);
        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openItemId}
                     toogleOpen={toggleOpenItem(article.id)}
            />
        </li>)

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