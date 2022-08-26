import Cake from './components/Cake';
import IceCream from './components/IceCream';
import User from './components/User';
import './App.css';

function App() {
  return (
    <div className="App">
       <h2>Redux</h2>
       <Cake />
       <hr />
       <IceCream />
       <hr />
       <User />
    </div>
  );
}

export default App;
