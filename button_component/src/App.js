import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <div className="buttons">
        <div className='button'>
          <p>{`<Button />`}</p>
          <Button />
        </div>
        <div className='button'>
          <p>{`&:hover, &:focus`}</p>
          <Button hover/>
        </div>
      </div>
      <div className="buttons">
        <div className='button'>
          <p>{`<Button variant="outline" />`}</p>
          <Button variant="outline">Outline</Button>
        </div>
        <div className='button'>
          <p>{`&:hover, &:focus`}</p>
          <Button variant="outline" hover>Outline</Button>
        </div>
      </div>
      <div className="buttons">
        <div className='button'>
          <p>{`<Button variant="outline" />`}</p>
          <Button variant="text">Text</Button>
        </div>
        <div className='button'>
          <p>{`&:hover, &:focus`}</p>
          <Button variant="text" hover>Text</Button>
        </div>
      </div>
      <div className="buttons">
        <div className='button'>
          <p>{`<Button disableShadow />`}</p> 
          <Button disableShadow>Disable Shadow</Button>
        </div>
      </div>
      <div className="buttons">
        <div className='button'>
          <p>{`<Button disabled />`}</p> 
          <Button disabled>Disabled</Button>
        </div>
        <div className='button'>
          <p>{`<Button variant="text" disabled />`}</p> 
          <Button variant="text" disabled>Disabled</Button>
        </div>
      </div>
      <Button startIcon="local_grocery_store">Start Icon</Button>
      <Button endIcon="local_grocery_store">End Icon</Button>
      <Button size="sm">Size Small</Button>
      <Button size="md">Size Medium</Button>
      <Button size="lg">Size Large</Button>
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
}

export default App;
