import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.css";
//import { useQuery } from "@tanstack/react-query";
//import newRequest from "../../utils/newRequest";

const currentUser = {
  id: 1,
  username: "John Doe",
  isSeller: true
};

const Orders = () => {
  // Uncomment and use these hooks as needed
  // const navigate = useNavigate();
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["orders"],
  //   queryFn: () =>
  //     newRequest.get(`/orders`).then((res) => {
  //       return res.data;
  //     }),
  // });

  // const handleContact = async (order) => {
  //   const sellerId = order.sellerId;
  //   const buyerId = order.buyerId;
  //   const id = sellerId + buyerId;

  //   try {
  //     const res = await newRequest.get(`/conversations/single/${id}`);
  //     navigate(`/message/${res.data.id}`);
  //   } catch (err) {
  //     if (err.response.status === 404) {
  //       const res = await newRequest.post(`/conversations/`, {
  //         to: currentUser.isSeller ? buyerId : sellerId,
  //       });
  //       navigate(`/message/${res.data.id}`);
  //     }
  //   }
  // };

  // Sample data for demonstration (replace with actual data fetching)
  const orders = [
    {
      id: 1,
      title: "Sample Order",
      price: 100,
      buyer: "Buyer Name",
      seller: "Seller Name"
    }
  ];

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <img className="image" src="" alt="" />
                </td>
                <td>{order.title}</td>
                <td>${order.price}</td>
                <td>{currentUser.isSeller ? order.buyer : order.seller}</td>
                <td>
                  {/* Replace src attribute with actual path to message icon */}
                  <img
                    className="message"
                    src="./img/message.png"
                    alt="Message"
                    onClick={() => {
                      // handleContact(order);
                      console.log("Contact clicked for order:", order);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

/*
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.css";
//import { useQuery } from "@tanstack/react-query";
//import newRequest from "../../utils/newRequest";
const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  };
//const Orders = () => {
 // const currentUser = JSON.parse(localStorage.getItem("currentUser"));

 // const navigate = useNavigate();
 // const { isLoading, error, data } = useQuery({
  //  queryKey: ["orders"],
  //  queryFn: () =>
  //    newRequest.get(`/orders`).then((res) => {
    //    return res.data;
   //   }),
 // });

  //const handleContact = async (order) => {
   // const sellerId = order.sellerId;
   // const buyerId = order.buyerId;
  //  const id = sellerId + buyerId;

  //  try {
    //  const res = await newRequest.get(`/conversations/single/${id}`);
    //  navigate(`/message/${res.data.id}`);
  //  } catch (err) {
   //   if (err.response.status === 404) {
   //     const res = await newRequest.post(`/conversations/`, {
      //    to: currentUser.seller ? buyerId : sellerId,
     //   });
     //   navigate(`/message/${res.data.id}`);
    //  }
   // }
 // };
  return (
    <div className="orders">
      
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller ? "Buyer" : "seller"}</th>
              <th>Contact</th>
            </tr>
           
              <tr >
                <td>
                  <img className="image" src="" alt="" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>
                  <img
                    className="message"
                    src="./img/message.png"
                    alt=""
                   
                  />
                </td>
              </tr>
        
          </table>
        </div>
    
    </div>
  );


export default Orders;

//*/
