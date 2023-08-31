
import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget} = useContext(AppContext);
  

    const [cost, setCost] = useState('');

    const handleCostChange = (event) => {
        setCost(event.target.value)

        if(budget < cost) {
            alert("You cannot reduce budget value lower than the spending!");
        
            return;
        }
           };
    

   

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                id='cost'
                value= {cost}
                style={{ marginLeft: '0.5rem' , size: 10}}
                onChange={handleCostChange}
                >
                
            </input>
        </div>
    );
};
export default Budget;