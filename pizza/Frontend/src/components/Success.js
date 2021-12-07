import React from 'react'
import NavbarDash from './NavbarDash'
import { useHistory } from 'react-router-dom'

export default function Success() {
    let History=useHistory()
    const click=()=>{
        History.push("/Dash")
    }
    return (
        <div className="container-fluid">
            <NavbarDash />

            <h1>Order Has been Placed Successfully !!!</h1>
            <div class="alert alert-warning" role="alert">
               You Will receive notification by email with order details.
            </div><br/>
            <button type="button" class="btn btn-dark"onClick={click}>Go order Some More</button>
        </div>
    )
}
