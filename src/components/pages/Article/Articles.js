import React from 'react'
import '../../../App.css'
import ArticleCards from './ArticleCards';

// I should probably make the component first then just simply import it here rather than developing it all here...
// Refer to how Home.js is set up where it just imports and uses the Hero video...

function Articles () {
  return (
    <>
      <ArticleCards />
    </>
  );
}

export default Articles;