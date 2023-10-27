import Head from 'next/head';
import React from 'react';

const HomePage = (): React.JSX.Element => {
  return (
    <div>
      <Head>
        <title>Home - HomePage</title>
       </Head>
       <div>
         Hello, this is HomePage!
       </div>
    </div>
  )
}

export default HomePage;
