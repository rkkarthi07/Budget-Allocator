import { useContext } from 'react'
import { AppContext }from '../App'
const Budget = () => {
  const{setBudget, symbol , setSymbol , budget , spent , remaining , setRemaining }  = useContext(AppContext);
    const handleSymbol =(e) =>{
          const currency = e.target.value;
          if(currency === 'dollar') setSymbol('$')
          else if(currency === 'inr') setSymbol('₹')
          else if(currency === 'euro') setSymbol('€')
          else setSymbol('£')
    }
    const handleBudget = (e) => {
      let newBudget = e.target.value;
      if(newBudget < 0) newBudget = 0;
      const remainingAmount = newBudget - spent;
      if(remainingAmount < 0) alert('Your budget is more expensive');
      else{
      setRemaining(remainingAmount)
      setBudget(newBudget);
      }
    };
  return (
    <div className='w-full grid md:grid-cols-4 grid-cols-2 md:min-h-16 min-h-32 mt-5 place-content-evenly mb-5'>
        <div className='flex justify-center items-center text-center min-h-16 text-lg border-2 border-black rounded-xl md:mx-5 mx-1 my-4'>
          <div className='w-full h-max flex flex-row'> <h1 className='flex items-center justify-end w-max ml-1 md:ml-5 text-right text-sm md:text-lg font-medium'> Budget :&nbsp;{symbol}</h1> <div className='flex-1 px-3 py-4 h-2/3'><input type="number" value={budget} className='rounded-lg w-full text-sm border-black border-2 p-2' onChange={handleBudget}/></div></div>
        </div>
        <div className='flex justify-center items-center text-center min-h-16 text-lg border-2 border-black rounded-xl md:mx-5 mx-1 my-4'>
          <div className='w-full flex flex-row'><h1 className='w-max ml-1 md:ml-5 text-right text-sm md:text-lg font-medium'>Remaining :&nbsp;{symbol}&nbsp;</h1><h1 className='flex-1 h-full text-sm md:text-lg text-left'>{remaining}</h1></div>
        </div>
        <div className='flex justify-center items-center text-center min-h-16 text-lg border-2 border-black rounded-xl md:mx-5 mx-1 my-4'>
        <div className='w-full flex flex-row'><h1 className='w-max ml-1 md:ml-5 text-right text-sm md:text-lg font-medium'>Spent So Far:&nbsp;{symbol}&nbsp;</h1><h1 className='flex-1 h-full text-left text-sm md:text-lg'>{spent}</h1></div>
        </div>
        <div className='flex justify-center items-center  text-center min-h-16  text-lg border-2 border-black rounded-xl md:mx-5 mx-1 my-4'>
        <h1 className='w-max font-medium ml-1 md:ml-5 text-sm md:text-lg'>Currency :&nbsp;</h1> <select name="currency" defaultValue={'Dollar'} className='md:text-lg text-sm flex-1 border-2 rounded-xl ' onChange={handleSymbol}>
                <option value="dollar">Dollar $</option>
                <option value="inr">INR ₹</option>
                <option value="euro">Euro €</option>
                <option value="pound">Pound £</option>
            </select>
        </div>
    </div>
  )
}
export default Budget