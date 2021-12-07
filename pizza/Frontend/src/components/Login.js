import React, { useState, useEffect } from 'react'
import {useHistory,Link} from 'react-router-dom'
import {verify} from '../config/MyService'
import LoginDash from './LoginDash';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [proData, setProData] = useState([])
    const History =useHistory();

    useEffect(() => {
       verify()
          .then(res=>{
            console.log(res.data);
            setProData(res.data.data);
        })
        console.log(proData)
        
        
    }, [])
    console.log(proData)
    const handler = (e) => {
        e.preventDefault();

        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password': setPassword(e.target.value)
                break;
            default: console.log("Nothing Matches")
                break;

        }

    }
    
    const formsubmit = (e) => {
        e.preventDefault();
        let formdata = {
            email: email,

            password: password
        }
        console.log(formdata)
        let flag = 0;
        for (var i = 0; i < proData.length; i++) {
            if (proData[i].email === formdata.email && proData[i].password === formdata.password) {
                alert("Login Successful")
                localStorage.setItem('userdetails', formdata.email);
                flag = 1;
                History.push("/Dash")
            }
          
        }
        if (flag === 0) {
            alert("Enter valid credentials")
        }
    }

    return (
        <div>
            <LoginDash/>
            <div className="container row bg-light" style={{ marginLeft: "380px", width: "500px", marginTop: "100px",height:"300px"}}>


                <h1 className="text-center">Login</h1>
                Email:<input className="form-control" type="text" placeholder="Enter Email" name="email" aria-label="default input example" onChange={handler} />
                Password:<input type="password" className="form-control" id="inputPassword" name="password" placeholder="Enter Password" onChange={handler} />


                <button type="button" class="btn btn-success" style={{ width: "100px", marginLeft: "180px", marginTop: "20px",marginBottom:"10px" }} onClick={formsubmit}>Log in</button>
                <br />
            </div>
            <br/>
            <p className="text-center">If Not Registered, <Link to="/Reg">Register Here</Link></p>
        </div>
    )
}
