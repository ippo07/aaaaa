import React, { useState } from 'react'

export default function Form(props){
  const[text,setText]=useState("text here")
  
  const Upper=()=>{
     let newText=text.toUpperCase();
     setText(newText)
     props.showAlert("Text converted to Uppercase","Success")
  }
  const Lower=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Text converted to Locase","Success")
  }
  const Clear=()=>{
    let newText='';
    setText(newText)
    props.showAlert("Text removed","Success")
  }
  const Up=(event)=>{
    setText(event.target.value)
   
  }
  const CopyText=()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
     text.select();
     navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied to Clipboard","Success")
  }
  const RemoveExtraSpaces=()=>{
    let newText=text.split(/[ ]+/)
     setText(newText.join(" "))
     props.showAlert("Removed Extra spaces","Success")
  }
  const Capital = () => {
    if (text.length > 0) {
      const words = text.split(" "); // Split text into words
      const capitalizedWords = words.map(word => {
        if (word.length > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word; // Preserve empty words
        }
      });
      const newText = capitalizedWords.join(" ");
      setText(newText);
      props.showAlert("Converted the first letters to Capitlas","Success")
    }
  }
  const wordLength = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === "") {
      return 0; // Return 0 words for empty text
    } else {
      const words = trimmedText.split(/\s+/);
      return words.length;  
    }
  };
  return(
    <>
    <div className="container" style={{color:props.smode==='light'?'black':'white'}}>
    <h1 >{props.header}</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1"  style={{backgroundColor:props.smode==='dark'?'#252545':'white',color:props.smode==='light'?'black':'white'}} rows="6" value={text} onChange={Up}></textarea>
    <button className="btn btn-primary my-3 mx-1" onClick={Upper}>Convert TO Uppercase</button>
    <button className="btn btn-primary my-3 mx-1" onClick={Lower}>Convert TO Lowercasecase</button>
    <button className="btn btn-primary my-3 mx-1" onClick={Clear}>Clear</button>
    <button className="btn btn-primary my-3 mx-1" onClick={CopyText}>CopyText</button>
    <button className="btn btn-primary my-3 mx-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary my-3 mx-1" onClick={Capital}>Convert to Capitals</button>    
    </div>
    <div className="container" style={{color:props.smode==='light'?'black':'white'}}>
      <h1>{wordLength(text)} words and {text.length}letters </h1>
      <h2>Preview</h2>
      <p>{text.length>0?text:"write something to preview"}</p>
    </div> 
    </>
 )
}