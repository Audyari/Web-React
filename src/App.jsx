/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';

// Komponen pembungkus
function withAdditionalProps(WrappedComponent) {
  
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent
          additionalProp1="Ini adalah props tambahan 1"
          additionalProp2="Ini adalah props tambahan 2"
          {...this.props}
        />
      );
    }
  };
}

// Komponen yang akan dibungkus
function MyComponent(props) {
  return (
    <div>
      <p>{props.additionalProp1}</p>
      <p>{props.additionalProp2}</p>
      <p>{props.message}</p>
    </div>
  );
}

// Menggunakan komponen pembungkus
const EnhancedMyComponent = withAdditionalProps(MyComponent);

function App() {
  return (
    <div>
      <EnhancedMyComponent message="Halo, Dunia!" />
    </div>
  );
}

export default App;