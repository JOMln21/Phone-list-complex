 import  { useContext,  useMemo, useState } from 'react';
import { PhoneContext } from '../context/PhoneContext';
import { NumberItem } from './NumberItem';

 



export const NumberList = (change: any ) => {

    //I import the context
    const { state, dispatch }= useContext(PhoneContext);

    //Can i see the list? 
    const [isOpen, setIsOpen] = useState(false);


    //Auxiliary array
    let toShow = [];

    //Array to show
    const [dataShow, setDataShow] = useState<any[]>([]);

   
    
    const processList = () => {
        
        //I will calculate the list again 
        toShow=[];

        for(const [key, value] of state.entries()) {
            toShow.push([key,String(value)])
        }

        setDataShow(toShow)

        
        
    



    };

    // I will process the list only if i change the list, i could do the same with useEffect
    useMemo(processList,[change]);

    const showList = () => {
        
        setIsOpen(!isOpen);

        if(isOpen){
            //I reset the auxiliary vector
            toShow=[];
            
            //I get the keys and values
            for(const [key, value] of state.entries()) {
                toShow.push([key,String(value)])
            }
            //I assign the axiliary vector
            setDataShow(toShow)
        }

    }
    const resetList = () => {

        dispatch({type: 'Reset list'})

        setIsOpen(false);

        setDataShow([]);
    }


    
   return (<>
   <hr/>
            <h3>All the list</h3>
            <button className='btn btn-outline-primary m-1' onClick={showList}>Show/hide all list</button>
            <button className='btn btn-outline-primary m-1 ' onClick={resetList}>Reset List</button>
            <div className='list '>        

                {(isOpen)?
                //I create a number item for each pair key values (See more in NumberItem.tsx)
                        ( dataShow.map(([k,v]) => 
                                    (<NumberItem keyof={k} 
                                                value={String(v)}
                                                />)
                                    ))
                        : <p className='mt-5'>Click to see the whole list if it is not empty</p>
                }



                
                </div>

   
   
   </>);
 };
 