import React from 'react'
import { NewsArticle, ArticleProp } from '../utils/types'
import web3Mobile from '../assets/image-web-3-mobile.jpg'

export default function MainNew(props: ArticleProp) {
  const article = props.article
  return (
    <div className='flex h-100 lg:mb-0 mb-10 flex-col w-100 flex-grow lg:w-fit'>
        <picture>
          <source media="(min-width: 750px)" srcSet={article.image?.src} />
          <source media="(min-width: 350px)" srcSet={web3Mobile} />
          <img src={article.image?.src} alt={article.image?.alt}/>
        </picture>
        <div className='w-100 block lg:flex mt-8 lg:space-x-5 '>
            <h1 className='text-6xl font-extrabold flex-1'>{article.title}</h1>
            <div className='w-100 ml-0 px-0 lg:px-8 flex-1 flex flex-col text-left justify-between'>
                <p className='text-md mb-5 lg:mb-0 text-grayishBlue-900'>{article.content}</p>
                <button className='bg-softRed hover:bg-darkBlue font-bold text-offWhite tracking-[0.2rem] py-3 px-10 w-fit'>READ MORE</button>
            </div>
        </div>
    </div>
  )
}
