import React from 'react';
import Article from './Article';

function ArticleList({ articles }) {
  return (
    <div>
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </div>
  );
}

export default ArticleList;