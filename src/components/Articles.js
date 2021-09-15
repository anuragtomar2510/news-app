import React from 'react'
import Article from './Article'


const Articles = ({articles}) => {


    return (
       
        articles.map((article, index) => (<Article key={index} article={article} />))

    )
}

export default Articles
