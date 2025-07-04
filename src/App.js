import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { validationUser } from './util/validate';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [aviso, setAviso] = useState('')

  const handleSub = (e) => {
    e.preventDefault();

    const errors = validationUser(name, parseInt(age,10));

    if (errors) {
      setAviso(errors)
    } else {
      console.log('SUCESSO TOTAL !!!')
      setName('')
      setAge('')
      setAviso('')
    }
  }

return (
  <form onSubmit={handleSub}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
         {aviso}
        </p>
        <input value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="App-input" placeholder="Type you name" />

        <input value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number" className="App-input" placeholder="Type you age" />
        <button type='submit' className="App-button">Submit</button>
      </header>
    </div>
  </form>
);
}

export default App;
