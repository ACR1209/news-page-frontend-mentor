import React from 'react'
import { RecentArticlesProp } from '../utils/types'
import RecentArticle from './RecentArticle'


function RecentNews(props: RecentArticlesProp) {
    const articles = props.articles
    return (
    <div className='bg-darkBlue lg:w-6/12 w-100 h-100 flex flex-col lg:ml-10 p-5'>
        <h2 className='font-extrabold text-softOrange text-5xl'>New</h2>

        <div className='flex flex-grow py-5 h-100 divide-grayishBlue justify-between flex-col'>
            {
                articles.map((article, index) => (
                    <>
                        <RecentArticle key={index} title={article.title} content={article.content}/>
                        {index != articles.length - 1 ?<hr className='h-px my-8 bg-grayishBlue-900 border-0 '/> : null}
                        
                    </>
                    ))
            }
            
        </div>
    </div>
  )
}

export default RecentNews