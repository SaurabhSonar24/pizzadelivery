import { connect } from "react-redux";
import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import NavbarDash from "./NavbarDash";
const regForCard = RegExp(/^[0-9]{16}$/);


const Cart = (props) => {
  let History=useHistory()
  const cart = useSelector((state) => state.cartItems);
  console.log(cart);
  const newState = JSON.stringify(cart);
  console.log(newState)
  localStorage.setItem("LState", newState);
   const LState = localStorage.getItem("LState");
  console.log(newState);
  const [card, setCard] = useState('')
  
  const handler=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
    setCard(e.target.value)

  }
  const addorder=(e)=>{
      e.preventDefault();
      if(regForCard.test(card)){
        console.log("http://localhost:8000/api/addorder");
        axios.post("http://localhost:8000/api/addorder",{
            cart:cart,
            card:card,
            user:localStorage.getItem("userdetails")
        })
        .then(res=>{
            console.log(cart)
        })
        History.push("/Dash/cart/Success")
      }
      else{
        alert("Enter Valid card details")
      }
     
  }
  let tot=0;
  for(let i=0;i<cart.length;i++){
    tot=tot+cart[i].price;
  }
  console.log(tot)

  console.log(cart[0])
  return (
    <div className="container-fluid">
      <NavbarDash/>
      <h2>Cart</h2>
      
    
      <form method="post" >
      <div className="container-fluid row">
                {cart==""?<h4>No items in the cart</h4>:cart.map((val,index)=>
                <div className="col-md-4">
                <div className="card" style={{width: "18rem",marginBottom:"25px"}}>
      <img src={val.image} className="card-img-top" alt="..." height="170px"/>
      <div className="card-body">
        <h5 className="card-title" name="name">{val.name}</h5>
        <p className="card-text" name="price">Price: ₹{val.price}</p>
        
      </div>
    </div>
                    </div>)}<br/><br/>
                    <hr/><br/>
                    
                    <button type="button" className="btn btn-primary" 
                onClick={() => props.remove()} style={{width:"200px"}}>Empty Cart</button><br/>
                <h3 style={{marginTop:"30px"}}>Order Total: ₹{tot}</h3>
                   <br/> <input className="form-control" type="text" placeholder="Enter Credit card details" onChange={handler} aria-label="default input example"style={{width:"300px"}}/>
                    
                   &nbsp;&nbsp; <button type="submit" class="btn btn-primary" style={{width:"90px"}} onClick={addorder}>Checkout</button>
                    </div>
                    </form>
           
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mycounter: state.count,
  };
};
const mapDispatchTopProps = (dispatch) => {
  return {
    remove: function () {
      dispatch({
        type: "REMOVE",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(Cart);
