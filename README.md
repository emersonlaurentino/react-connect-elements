# React Connect Elements

Connect elements with SVG

[DEMO](https://emersonlaurentino.github.io/react-connect-elements/)

## Setup

```bash
yarn add react-connect-elements
```

## Getting Started
Include ConnectElements in the parent component.

```jsx
import ConnectElements from 'react-connect-elements';

const Component = () => (
  <div>
    <div className="elements">
        <div className="element element1" />
        <div className="element element2" />
    </div>
    <ConnectElements
      selector=".elements"
      elements={[{ from: '.element1', to: '.element2' }]}
    />
  </div>
);
```

## Props

|Prop|Description|Type|Default|
|---|---|---|---|
|elements|The connections of the elements|array|required|
|selector|The DOM target selector of the parent element|string|required|
|overlay|z-index value of the line connecting the elements|number|0|
|strokeWidth|width of the line in pixels|number|5|
|color|Color of the line connecting the elements|string|#666|

### Elements Syntax

|Attribute|Description|Required|
|---|---|---|
|from|The DOM target selector of the start element|true|
|to|The DOM target selector of the end element|true|
|color|Color of the line connecting the elements (overrides the prop `color`) |false|

### Credits

[This gist](https://gist.github.com/pmkary/3694ac1a2e89cc74a3777529a69cfcb3) where I got how to connect two elements / draw a path between two elements with SVG path (using jQuery).
