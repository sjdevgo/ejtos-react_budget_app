
import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,currency,dispatch} = useContext(AppContext);
  

    const [cost, setCost] = useState(budget);

    const handleCostChange = (event) => {
        const newBudget = event.target.value;
        setCost(newBudget)

        dispatch({type:'SET_BUDGET',payload:newBudget});

        // if(budget < cost) {
        //     alert("You cannot reduce budget value lower than the spending!");
        
        //     return;
        // }
           };
    

   

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}</span>
            <input
                required='required'
                type='number'
                id='cost'
                value= {cost}
                style={{ marginLeft: '0.7rem' , size: 10,width:150}}
                onChange={handleCostChange}
                >
                
            </input>
        </div>
    );
};
export default Budget;