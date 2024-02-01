import  { createContext, useState } from 'react';
import Budget from './Components/Budget';
import Header from './Components/Header';
import Allocation from './Components/Allocation';
import AddDialog from './Components/AddDialog';

export const AppContext = createContext();

const App = () => {
  const [budget, setBudget] = useState(1000);
  const [symbol, setSymbol] = useState("$");
  const [row, setRow] = useState([]);
  const [spent , setSpent] = useState(0);
  const[remaining , setRemaining] = useState(1000);

  return (
    <AppContext.Provider value={{ budget, symbol, row , spent ,remaining , setRemaining , setSymbol , setBudget, setRow , setSpent}}>
        <Header />
        <Budget />
        <Allocation />
        <div className='w-full mt-5 md:pr-32 pr-10 flex items-center justify-end'>
          <AddDialog />
        </div>
    </AppContext.Provider>
  );
};

export default App;
