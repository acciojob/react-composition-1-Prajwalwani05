
import React , {useState} from "react";




const Tabs = ({tabs})=>{
    const [click , setClick] = useState("");
    function handleClick(value){
        setClick(value);
    }

    return(
        <div>
            <ul>
                {
                    tabs.map((value)=>(
                        <li onClick={()=>{handleClick(value)}}>{value.title}</li>
                    ))
                }

            </ul>
            {
                click && <p>{click.content}</p>
            }
        </div>
    )
}

export default Tabs;