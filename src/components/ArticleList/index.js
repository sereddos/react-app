import React from 'react'
import Article from '../Article'
import './style.css'

export  default  function ArtcleList({articles}) {
  const articleElements = articles.map((article, index) =>
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