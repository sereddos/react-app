import React from 'react'
function Article(props) {
  const {artilce} = props
  const body = <section>{artilce.text}</section>
  return (
      <div>
        <h2>{artilce.title}</h2>
        {body}
        <h3>creation date: {(new Date(artilce.date)).toDateString()}</h3>
      </div>
  )
}

export default Article