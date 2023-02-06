import React from 'react'
import { Link } from 'react-router-dom'

const ArticleSmallPreview = ({ img, title, linkPreview, description, titleFontSize, className }) => {
  return (
    <div className={`flex items-start gap-3 rounded-md w-full px-4 py-2 bg-white border border-gray-200 ${className}`}>
      {img && <img src={img.source ?? img.source ?? img} loading='lazy' className='object-cover w-10 h-10 rounded-md' />}

      <div className='text-left'>
        <h1 className={`${titleFontSize} inline-block font-bold`}>
          <Link to={linkPreview}>
            {title}
          </Link>
        </h1>
        <p className='text-xs sm:text-sm text-gray-700 ellipsis ellipsis-1'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ArticleSmallPreview
