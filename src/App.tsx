import React, {useState} from 'react';
import './App.css';
import RandomizedDish from './RandomizedDish';
import CategorySelection from './CategorySelection';

function App() {
  const [category, setCategory] = useState<string>('');
  return (
      <div className="App">
        {
          category
              ? <RandomizedDish category={category} onReturn={() => setCategory('')}/>
              : <CategorySelection onSelect={setCategory}/>
        }
      </div>
  );
}

export default App;
