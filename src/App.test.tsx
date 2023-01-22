import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('desctest', ()=>{ 
  
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Emmanuel/i);
  expect(linkElement).toBeInTheDocument();
});


test('myname', ()=>{
  render (<App />)
  const t = screen.getByText(/Agyemang/i)
  expect(t).toBeInTheDocument()
})

})