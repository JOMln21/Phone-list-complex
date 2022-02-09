import { useContext, useEffect, useState } from "react";
import { PhoneContext } from "../context/PhoneContext";
import { NumberItem } from "./NumberItem";


export const HowManyTimes = (change:any) => {

    //I import the state of the context
    const {state} = useContext(PhoneContext);


    //I declare the value of the form 
    const [toSearch, settoSearch] = useState<string>('');

    //Can i see the results or not? 
    const [isOpen, setIsOpen] = useState<boolean>(false);

    //Number to show in the results
    const [NSearched, setNSearched] = useState('');

    //Quantity to show in the results
    const [QToShow, setQToShow] = useState('');

    //Function to execute 
    const onGetNumber = (event:any) => {
        
        event.preventDefault();
        

        if(toSearch===''){return};

        //Similary to a simple approach
        setNSearched(toSearch);

        setQToShow(state.get(toSearch)? state.get(toSearch) : '0')
        
        setIsOpen(true)

    }

    const onChange = (event:any) => {
        setIsOpen(false);
        settoSearch(
            event.target.value
        );
    
    }

    //If i added another number, i have to update the value to show
    useEffect(() => {

        setQToShow(state.get(NSearched)? state.get(NSearched) : '0');

    }, [change]);
    

  return <div>
      <form className='mt-4'>
            <h3>How many times</h3>
            <input 
                            type="text" 
                            placeholder="Search a phone number"
                            name="toSearch"
                            value={toSearch}
                            onChange={onChange}
                            className='form-control mt-4'
                            />
        {(!isOpen)?
            null : <NumberItem keyof={NSearched} value={QToShow}/>}
        
            <button
                    className="btn btn-outline-primary mt-2"
                    onClick={onGetNumber}>
                    Get
            </button>
        </form>
  </div>;
};
