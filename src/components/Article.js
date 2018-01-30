import React, {Component} from 'react'

class Article extends Component {
  render() {
    const {article} = this.props
    const body = <section>{article.text}</section>
    return (
        <div>
          <h2>{article.title}</h2>
          {body}
          <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
        </div>
    )
  }
}

export default Article