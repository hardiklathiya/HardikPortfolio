import React, { useEffect } from 'react'
import "./bottomuparrow.css"
import {IoIosArrowUp} from 'react-icons/io'

import { useState } from 'react'
export default function BottomUpButton() {
    const [bottomUpButton, setBottomUpButton] = useState(false)
 
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>300){
                setBottomUpButton(true)
             
            }
            else{
                setBottomUpButton(false)
            }
        })
    })

  return (<>
    {bottomUpButton&&
    <div  
           className="bottom_up" id="bottom_up">
        <a  href="#home">

    <IoIosArrowUp className='bottom_up_btn'id='bottom_up_btn'/>
        </a>
    </div>}
    </>
    )
}
