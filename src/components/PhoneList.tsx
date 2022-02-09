import { useContext, useEffect, useMemo, useState } from 'react';
import { PhoneContext } from '../context/PhoneContext';
import { HowManyTimes } from './HowManyTimes';
import { NumberList } from './NumberList';






export const PhoneList = () => {

    //I utilise dispatch from the context 
    const { dispatch }= useContext(PhoneContext);

    //Number to add to list
    const [number, setNumber] = useState<string>('');

    //How many times did i add a number 
    const [clicks,setClicks] = useState(0);

    //I declare the section that i will to show in the return
    let HowM = <HowManyTimes change={clicks} />;

    //I declare the list that i will show at the return, but in this time i show the use of useMemo
    let List= useMemo(() => <NumberList change={clicks} />, [clicks]);;
    
    //UseEffect to change HowM elements if i add another number
    useEffect(() => {
      HowM = <HowManyTimes change={clicks} />
    }, [clicks]);
    
    

    //Function to manipulate a form
    const onChange = (event:any) => {
        setNumber(event.target.value);
    }



    const onSubmit = (event:any) => {
        event.preventDefault();

        //number have to be a value 
        if(number===''){return};

        // I send to reducer the action to do, add a number in the list
        dispatch({type : 'Number added', payload: number})

        setClicks(clicks + 1);   
    }



  

    return (
        <div className='container'>
        <div className="mt-2 form-group">
            <form >
                <h3>Add a number</h3>
                <input 
                    type="text" 
                    placeholder="Add a phone number"
                    name="number"
                    value={number}
                    onChange={onChange}
                    className='form-control mt-4'

                />
                <button
                    className="btn btn-outline-primary mt-2"
                    onClick={onSubmit}>
                    Add
                </button>
            </form>
            <hr/>
        </div>

        {HowM}

        {List}

        </div>
    )
}
