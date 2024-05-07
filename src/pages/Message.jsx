import React from "react";
import { Link } from "react-router-dom";
import "./Message.css";

const Message = () => {
 // const { id } = useParams(); // Extracting id parameter from route
  // Assuming currentUser is retrieved from localStorage or context
  //const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // This part is commented out because the hooks are not being used currently
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["messages"],
  //   queryFn: () =>
  //     newRequest.get(`/messages/${id}`).then((res) => {
  //       return res.data;
  //     }),
  // });

  // This part is commented out because the hooks are not being used currently
  // const mutation = useMutation({
  //   mutationFn: (message) => {
  //     return newRequest.post(`/messages`, message);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["messages"]);
  //   },
  // });

  //const handleSubmit = (e) => {
   // e.preventDefault();
    // Perform mutation to send message, e.g., using mutation.mutate()
    // Reset textarea value after sending
  ///  e.target[0].value = "";
 // };

  return (
    <div className="message">
      <div className="container">
        {/* Breadcrumbs with a link back to Messages */}
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> john {/* Displaying user's name */}
        </span>
        {/* Message container */}
        <div className="messages">
          {/* Sample message item */}
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              sapiente facilis quam alias veritatis fugit vitae quod, sit
              deleniti necessitatibus odio quis eligendi minima. Voluptate
              assumenda placeat alias debitis provident.
            </p>
          </div>
        </div>
        <hr />
        {/* Form to write and send a new message */}
        <form className="write">
          <textarea
            type="text"
            placeholder="Write a message"
            id="messageInput"
            cols="30"
            rows="10"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;

/*
//import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
//import newRequest from "../../utils/newRequest";
import "./Message.css";

//const Message = () => {
 // const { id } = useParams();
 // const currentUser = JSON.parse(localStorage.getItem("currentUser"));

 // const queryClient = useQueryClient();

 // const { isLoading, error, data } = useQuery({
    ///queryKey: ["messages"],
   // queryFn: () =>
   //   newRequest.get(`/messages/${id}`).then((res) => {
     //   return res.data;
    //  }),
 // });

 // const mutation = useMutation({
   // mutationFn: (message) => {
   //   return newRequest.post(`/messages`, message);
  //  },
    //onSuccess: () => {
   //   queryClient.invalidateQueries(["messages"]);
  //  },
 // });

  //const handleSubmit = (e) => {
   // e.preventDefault();
   // mutation.mutate({
    //  conversationId: id,
    //  desc: e.target[0].value,
   // });
   // e.target[0].value = "";
 // };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> John Doe 
        </span>
       
          <div className="messages">
            
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam sapiente facilis quam alias veritatis fugit vitae quod, sit deleniti necessitatibus odio quis eligendi minima. Voluptate assumenda placeat alias debitis provident.</p>
              </div>
          
          </div>
        
        <hr />
        <form className="write" >
          <textarea type="text" placeholder="write a message" id="" cols="30" rows="10/>
          <button type="submit"> Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
//*/
