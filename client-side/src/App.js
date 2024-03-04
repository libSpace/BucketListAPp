// Import React and Fragment from 'react'
import React, { Fragment } from 'react';

// Import CSS file for styling
import './App.css';

// Import custom components
import InputItem from './components/InputItem';
import ListItem from './components/ListItem';

// Main App component rendering InputItem and ListItem
function App() {
  return (
    // Use Fragment to group components
    <Fragment>
      {/* Render InputItem component */}
      <InputItem />

      {/* Render ListItem component */}
      <ListItem />
    </Fragment>
  );
}

// Export App component as default
export default App;
