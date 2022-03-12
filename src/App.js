import './App.css';
import React, {useState} from 'react';
import List from './List';
import data from './data';

function App() {
  const [people,setPeaple] = useState(data)

  return (
    <main>
      <section className='container'>
        <h1>{people.length} birthdays</h1>
        <List people={people}/>
        <button onClick={()=>setPeaple([])}>
            Limpiar Todo
        </button>
      </section>
    </main>
  );
}

export default App;
