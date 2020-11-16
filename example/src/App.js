import React from 'react'
import useSizeQuery from 'screen-size-query';

const App = () => {
  const { size, isMobile } = useSizeQuery();

  return (
    <>
      <h1>
        Size: {size}
      </h1>
      <h1>
        IsMobile: {isMobile.toString()}
      </h1>
    </>
  )
}

export default App;
