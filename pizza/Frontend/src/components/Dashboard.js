import React,{useEffect,useState} from 'react'
import {getPosts} from '../config/MyService'
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import NavbarDash from './NavbarDash';

function Dashboard(props) {
  const [postdata, setPostdata] = useState([])
  const cart = useSelector((state) => state.cartItems);
  console.log(cart);
  const dispatch = useDispatch();
    useEffect(() => {
          getPosts()
       
          .then(res=>{
            console.log(res.data.data);
            setPostdata(res.data.data);
        })
        console.log(postdata)
        
        
    }, [])
    console.log(postdata)
    return (
        <div>
          <NavbarDash/>
         
            <h1>Menu</h1>
            <div className="container-fluid row">
                {postdata.map((val,index)=>
                <div className="col-md-4">
                <div className="card" style={{width: "18rem",marginTop:"20px"}}>
      <img src={val.image} className="card-img-top" alt="..." height="170px"/>
      <div className="card-body">
        <h5 className="card-title">{val.name}</h5>
        <p className="card-text">Price: ₹{val.price}</p>
        <a  className="btn btn-primary" onClick={() =>
                  props.cart(
                    val._id,
                    val.image,
                    val.name,
                    val.price
                  )
                }>Add to cart</a>
      </div>
    </div>
                    </div>)}
            
            </div>
         
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      mycounter: state.count,
    };
  };
  
  const mapDispatchTopProps = (dispatch) => {
    return {
      cart: function (_id, image, name, price) {
        dispatch({
          type: "CART",
          payload: {
            id: _id,
            image: image,
            name: name,
            price: price
          },
        });
      },
    };
  };
  export default connect(mapStateToProps, mapDispatchTopProps)(Dashboard);