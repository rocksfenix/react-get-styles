# React Get Styles
[![Build Status](https://travis-ci.org/GerardoGallegos/react-get-styles.svg?branch=master)](https://travis-ci.org/GerardoGallegos/react-get-styles)

Help you to get object with styles from string or template string such as:
```javascript
// Input
const styles = gm`
  border-radius: 3px;
  flex-direction: column;
  box-shadow: 3px 1px 10px rgba(0,0,0,0.3); 
`
// Output
const styles = {
   borderRadius: '3px',
   flexDirection: 'column'
   boxShadow: '3px 1px 10px rgba(0,0,0,0.3)'
 }
```

## Usage
``npm install react-get-styles``

```javascript

import gs from 'react-get-styles'

const titleStyles = gs`
  border-radius: 3px;
  flex-direction: column;
  box-shadow: 3px 1px 10px rgba(0,0,0,0.3);
`

const Title = ({ text }) => (
  <h1 styles={titleStyles}>
    { text }
  </h1>
)

```

-----

This component uses Standard JS

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)