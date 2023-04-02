import React from 'react'

function RecentArticle({title, content}: {title: string, content: string}) {
  return (
    
    <div className='text-offWhite flex justify-center flex-col'>
        <h3 className='font-extrabold hover:text-softOrange cursor-pointer text-2xl'>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default RecentArticle