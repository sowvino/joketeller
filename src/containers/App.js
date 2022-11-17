import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '../components/Button.js';
import ListComponent from '../components/ListComponent.js';





function App() {
  const [components, setComponents] = useState([]);
  const [fact, setFact] = useState('');
  const [jokes, setJokes] = useState([]);
  const [query, setquery] = useState('teeth');




  const getCategory = async function () {
    await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`).then(response => {
      return response.json();
    }).then((users) => setJokes(users.result));
  }



  const handleSearch = (e) => {
    e.preventDefault();
    getCategory();
  }

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random').then(response => {
      return response.json();
    }).then(users => setFact(users.value));

  },)

  function addComponent() {
    setComponents([...components, fact])

  }

  return (
    <div className='tc'>
      <h1 className='f1 b--black bg-washed-red b--dashed bw3 pa1 mh7-l'>Joke teller</h1>
      <img className="br-100 pa1 ba b--black-10 h12 w4" src={`https://www.pngitem.com/pimgs/m/157-1579962_chuck-norris-chuck-norris-cartoon-pics-transparent-hd.png?size=200x200`} alt='img' />
      <br />
      <form onSubmit={handleSearch} >
        <input type="text" className="pa3 ba b--green bg-washed-red " onChange={e => setquery(e.target.value)}
          value={query} />
        <button type="submit" className='   pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer br--right-ns'>SEARCH JOKE!!</button>
        <br />
        <Button onClick={addComponent} text="RANDOM JOKE!!" />
      </form>

      {components.map((item, i) => (<ListComponent key={i} text={item} index={i} />))}
      {jokes.map((joke, i) => (<p className="pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer br--right-ns" key={i}>{joke.value}</p>))}




    </div>
  );
}

export default App; 
