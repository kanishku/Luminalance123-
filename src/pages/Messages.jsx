//import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//import React from "react";
import { Link } from "react-router-dom";
//import newRequest from "../../utils/newRequest";
import "./Messages.css";
//import moment from "moment";

const Messages = () => {
  //const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  //const queryClient = useQueryClient();

  //const { isLoading, error, data } = useQuery({
   // queryKey: ["conversations"],
   // queryFn: () =>
     // newRequest.get(`/conversations`).then((res) => {
     //   return res.data;
     // }),
 // });

  //const mutation = useMutation({
   // mutationFn: (id) => {
   //   return newRequest.put(`/conversations/${id}`);
   // },
   /// onSuccess: () => {
   //   queryClient.invalidateQueries(["conversations"]);
   // },
 // });

  //const handleRead = (id) => {
 //   mutation.mutate(id);
 // };
 const currentUser = {
  id: 1,
  username: "John Doe",
  isSeller: true
};
const message=`lorem hsdkjshguysdhguysdhgcusdhkjlsdnjkn jsdnkjnd sj sj dsaj doi`
  return (
    <div className="messages">
      
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            
             <tr className="active">
                <td>john</td>
                <td>
                  <Link to="/message/123" className="link">
                    {Message.substring(0, 100)}...
                  </Link>
                </td>
                <tr />
                <td>i day ago</td>
                <td>
                  
                    <button >
                      Mark as Read
                    </button>
                  
                </td>
                <tr />
              </tr>
              <tr className="active">
                <td>john</td>
                <td>
                 
                {message.substring(0,100)}.....
                </td>
                <td>i day ago</td>
                <td>
                  
                    <button >
                      Mark as Read
                    </button>
                  
                </td>
                <tr />
              </tr>
              
           
          </table>
        </div>
    
    </div>
  );
};

export default Messages;
