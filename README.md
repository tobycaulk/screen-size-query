# screen-size-query

> A small, no external dependency hook that lets you know if the current viewport is mobile sized. 

[![NPM](https://img.shields.io/npm/v/screen-size-query.svg)](https://www.npmjs.com/package/screen-size-query) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save screen-size-query
```

## Usage

```jsx
import React, { Component } from 'react'
import useSizeQuery from 'screen-size-query'

class Example extends Component {
  render() {
    const { size, isMobile } = useSizeQuery();

    return (
      <>
        <h1>Size: {size}</h1>
        <h1>IsMobile: {isMobile.toString()}</h1>
      </>
    )
  }
}
```

## License

MIT © [tobycaulk](https://github.com/tobycaulk)
