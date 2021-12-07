import React from 'react'
import LoginDash from './LoginDash'
import { useHistory } from 'react-router'

export default function Front() {
    let History=useHistory()
    const click=()=>{
            History.push("/Login")
    }
    return (
        <div className="container-fluid">
            <LoginDash/>
            <div className="container row mx-auto " style={{marginTop:"20px",height:"400px"}}>
                <div className="col-md-12 bg-light"style={{paddingLeft:"50px",paddingRight:"50px"}}>
                <h1 style={{marginTop:"90px"}}>PizzaHouse</h1>
                <p>Welcome to PizzaHouse. This is the place when you may chose the most delicious pizza you like 
                    from wide variety of options !
                     
                </p>
             
                <hr/>
               
                <p>We're performing delivery free of charge in case if your order is higher than ₹ 500</p>
                <button type="button" class="btn btn-dark" style={{width:"1000px"}} onClick={click}>Sign In and Order</button>

                </div>
           
            </div>
            
            
        </div>
    )
}
