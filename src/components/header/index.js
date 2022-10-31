import React, { useEffect, useState } from "react";

function Header() {
   const [counter, setCounter] = useState(0);

   useEffect(() => {
      console.log("header maunt oldu");
   }, []);

   console.log(">>header render ediliyor");

   function onNegativeClick(event) {
      setCounter(counter - 1);
      console.log(counter);
   }

   function onPositiveClick(event) {
      setCounter(counter + 1);
      console.log(counter);
   }
   return (
      <div>
         <button className="btn btn-primary" onClick={onNegativeClick}>
            azalt
         </button>
         {counter}
         <button className="btn btn-primary" onClick={onPositiveClick}>
            arttır
         </button>
      </div>
   );
}

export default Header;
