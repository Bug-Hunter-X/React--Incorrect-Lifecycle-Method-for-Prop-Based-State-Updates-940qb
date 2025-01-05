The `getDerivedStateFromProps` lifecycle method provides a cleaner, safer way to update the component state in response to prop changes. It is a static method, so you do not have access to `this` inside. You must return an object containing the changes.  Here's how you would rewrite the component:

```javascript
import React from 'react';

class MyComponent extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.myProp !== prevState.myProp) {
      return {
        myProp: nextProps.myProp
      };
    }
    return null; // No state update needed
  }

  constructor(props) {
    super(props);
    this.state = { myProp: props.myProp };
  }

  render() {
    return <div>{this.state.myProp}</div>;
  }
}

export default MyComponent;
```