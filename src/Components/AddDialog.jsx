import { Dialog  , Flex ,Text,  TextField  } from '@radix-ui/themes';
import { useContext, useState } from 'react';
import {AppContext} from '../App'
const AddDialog = () => {
  const{ row , setRow , spent , setSpent , budget, remaining , setRemaining} = useContext(AppContext);
  const[department , setDepartment] = useState("");
  const[amount, setAmount] = useState(0);
  const handleAmountChange = (e) => {
    const input = e.target.value;
    const isValidInput = !isNaN(Number(input));
    if (isValidInput) {
      setAmount(input);
    }
  };
  const handleClick = () => {
    const tDepartment = department.trim();
    const isValidAmount = !isNaN(Number(amount));
  
    if (tDepartment !== '' && isValidAmount  ) {
      const CurrentAmount = Number(amount);
      const obj = {
        'department': tDepartment,
        'amount': Number(CurrentAmount)
      };
      if((spent+CurrentAmount) <= budget){
      setSpent(CurrentAmount + spent);
      setRemaining(remaining - CurrentAmount);
      const newRow = [...row, obj];
      setRow(newRow);
      setAmount(0);
      setDepartment('');
      }
      else{
       alert('Your list is exceeding the budget')
      }
    } else {
      alert('Enter valid department and amount');
    }
  };
  return (
    <Dialog.Root  className="fixed inset-0 flex items-center justify-center ">
      <Dialog.Trigger>
        <button className='w-30 h-10 bg-blue-400 text-white p-1 rounded-lg text-sm font-medium'>Add Budget</button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title className='text-center'>
          <Text className='text-xl font-semibold text-center'>Add Budget</Text>
        </Dialog.Title>
        <Dialog.Description className='text-center'>
          <Text className='text-lg font-medium text-center mb-3 '>Add your department and amount</Text>
        </Dialog.Description>
     <Flex direction="column" gap="3">
       <label>
         <Text className='text-sm font-semibold font-poppins mb-1 '>Department</Text>
         <TextField.Input onChange={(e)=>{setDepartment(e.target.value)}}
          placeholder="Enter the department"
          className='pl-2 font-medium'
        />
      </label>
      <label>
        <Text className='text-sm font-semibold font-poppins mb-1'>Amount</Text>
        <TextField.Input onChange={handleAmountChange}
          placeholder="Enter the amount"
          className='pl-2 font-medium'
        />
      </label>
    </Flex>
    <Flex gap="3" mt="4" justify="end">
       <Dialog.Close>
         <button className='bg-slate-300 px-2 rounded-md hover:bg-slate-400'>Close</button>
       </Dialog.Close>
       <Dialog.Close>
         <button onClick={handleClick} className='bg-blue-400 px-2 rounded-md hover:bg-blue-500' >Add</button>
       </Dialog.Close>
    </Flex>
      </Dialog.Content>
   </Dialog.Root>

  )
}

export default AddDialog