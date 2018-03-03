import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent {
  render() {
    const articleElements = this.props.articles.map((article, index) =>
        <li key={article.id} className="article-list__item">
          <Article article={article} defaultOpen={index === 0} />
        </li>
    )
    return (
        <ul className="article-list">
          {articleElements}
        </ul>
    )
  }
}