import React from "react";

const Event_Handle = () => {
  // function handleOnClick() {//Always start the EventHandler_function & EventHandler name with "handle" for better pratice
  //     alert("You Clicked On Button");
  //   }
  
  
//   const show=(a)=>{
//     alert(a);
//    }

const display=(x,y)=>{
   alert(x+" "+y.type+"  Event");

}

   
  return (
    <>
      {/* <button onClick={handleOnClick}>Click Here</button> */}

     

      {/* <button
        onClick={() => {
          alert("You Clicked On Button");
        }}
      > Click Here</button> */}

     
     
     {/* Passing argument to event handler using arrow function */}
     
 {/* <button onClick={()=>{show("Event Handling")}}>Hey!..Whats going on</button> */}




    {/* Passing an event to the event handler */}
    <button onClick={(e)=>{display("I am Using",e)}}> Which Event are you Using?</button>
    




    </>
  );
};

export default Event_Handle;
