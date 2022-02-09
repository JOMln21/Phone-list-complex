
interface props {
    value:string,
    keyof:string
}
export const NumberItem = (props:props) => {
    
    return (
        <div className="mt-4">
           <li> The number: '{props.keyof}' appears {props.value} times </li>
        </div>
    )
}