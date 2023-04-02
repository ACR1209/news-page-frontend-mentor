import React from 'react'
import { ListArticlesProp } from '../utils/types'
import ListArticle from './ListArticle'

function ListArticles(props: ListArticlesProp) {
  const articles = props.articles

  return (
    <div className='block md:flex mt-20 justify-between md:space-x-2 md:space-y-0 space-y-10'>
        {
            articles.map((article, index) =>(
                <ListArticle key={index} article={article} index={index}/>
            ) )
        }
    </div>
  )
}

export default ListArticles