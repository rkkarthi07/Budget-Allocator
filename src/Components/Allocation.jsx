import { Table  } from '@radix-ui/themes';
import { useContext, useState } from 'react';
import { FiPlusCircle as Plus , FiMinusCircle as Minus} from "react-icons/fi";
import PropTypes from 'prop-types'
import {AppContext} from '../App';
import { FaPlus , FaMinus } from "react-icons/fa";
const Allocation = () => {
  const{ row } = useContext(AppContext);
  return (
    <Table.Root variant="surface"  size={3}>
      <Table.Header className='w-full'>
        <Table.Row className='w-full h-10 '>
          <Table.ColumnHeaderCell><p className='w-full h-full items-center flex pl-4  md:text-xl'>Department</p> </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell><p className='w-full h-full items-center flex  pl-4 md:text-xl'>Amount</p></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell><p className='w-full h-full items-center justify-center flex text-center md:text-xl'><FaPlus/>10</p></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell><p className='w-full h-full items-center justify-center flex text-center md:text-xl'><FaMinus/>10</p></Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
      {row.map((item, index) => (
         <AddTableRow key={index} department={item.department} amount={item.amount} />
          ))}
      </Table.Body>
    </Table.Root>
  );
};
const AddTableRow =(props)=>{
  const{  symbol , spent ,setSpent ,remaining , setRemaining} = useContext(AppContext);
  const[amount , setAmount]= useState(props.amount);
  const handleIncrease =()=>{
    if((remaining - 10) >= 0 ){
     setAmount(amount + 10);
     setSpent(spent + 10);
     setRemaining(remaining - 10);
    }
    else{
      alert('You have reached your budget limit')
    }
  }
  const handleDecrease =()=>{
    if((remaining + 10) && (amount - 10) > 0){
    setAmount(amount - 10);
    setSpent(spent -10);
    setRemaining(remaining + 10);
    }
    else{
      alert('Your amount cannot be <= 0')
    }
 }
  return (
    <Table.Row className='w-full h-10'>
    <Table.Cell> <p className='w-full h-full flex text-lg items-center pl-4'>{props.department}</p> </Table.Cell>
    <Table.Cell> <p className='w-full h-full flex text-lg items-center pl-4'>{symbol}&nbsp;{amount}</p> </Table.Cell>
    <Table.Cell> <div className='w-full h-full flex justify-center items-center'><button className='w-max  rounded-full hover:scale-110' onClick={handleIncrease}><Plus size={20}/></button></div>  </Table.Cell>
    <Table.Cell> <div className='w-full h-full flex justify-center items-center'><button className='w-max rounded-full hover:scale-110' onClick={handleDecrease}><Minus size={20}/></button> </div> </Table.Cell>
   </Table.Row>
  )
}
AddTableRow.propTypes={
  amount : PropTypes.number.isRequired,
  department : PropTypes.string.isRequired
}
export default Allocation;
