import React from 'react'


export default function Click({count,onClick}) {
    
  return (
    <div className="container">
      <button className="btn btn-primary my-2" onClick={onClick}>Clicked {count} times</button>  
      
   </div>
  )

}
