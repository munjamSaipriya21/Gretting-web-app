// import React from "react";

// function App(){
//     let currDate = new Date()
//     currDate = currDate.getHours()
//     // currDate = currDate.getMinutes()
//     let greeting ="";
//     const  cssStyle={};
//     if(currDate>=1 && currDate<12){
//         greeting="Good Morning "
//         cssStyle.color=" greenyellow";
//     }
//     else if(currDate>=12 && currDate<16){
//         greeting="Good Afterrnoon"
//         cssStyle.color=" orange";
//     }
//     else if(currDate>=16 && currDate<20){
//         greeting ="Good eveing"
//         cssStyle.color="skyblue";
//     }
//     else{
//         greeting = "Good Night"
//         cssStyle.color="black";
//     }
//     return(
//         <>
//             <div>
//                 <h1 > 
//                     Hello sir,<span style={ cssStyle}>{greeting}</span>  
//                 </h1>
//             </div>
//         </>   
//     )
// }
// export default App;