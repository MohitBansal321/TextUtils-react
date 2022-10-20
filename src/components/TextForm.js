import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Lowercase to Uppercase","success");
    }
    const handlelowClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Uppercase to Lowercase","success");
    }
    const handleAlphaClick=()=>{
      const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
      let newtext=text.replace(regex,' ');
      console.log(newtext);
      newtext=newtext.split(/[ ]+/);
      console.log(newtext)
      setText(newtext.join(" "));
      props.showAlert("Change to AlphaNumeric only","success");
    }
    const handleClearClick=()=>{
      setText("");
      props.showAlert("Clear Text","success");
    }
    const handleCapilizeClick=()=>{
      let newText=text;
      const arrayStr=newText.split(" ");
      const allFirstToUC =arrayStr.map(word => word[0].toUpperCase() + word.substring(1));
      const newStr=allFirstToUC.join(' ');
      setText(newStr);
      props.showAlert("Capaitilze first letter","success");
    }
    const handleCopyClick=()=>{
      navigator.clipboard.writeText(String(text));
      props.showAlert("Copy to Clipboard","success");
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState(" ")
    let wordLen=(0.008 * text.split(" ").length).toFixed(3);
    const countWord=()=>{
      if(text.length>0){
        return text.trim().split(/[ ]+/).length;
      }
      else{
        return 0;
      }
    }
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>  
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8" placeholder="Enter Your Text Here"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleAlphaClick}>Alpabatical</button>
        <button className="btn btn-primary mx-2" onClick={handleCapilizeClick}>Capilize Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-2" style={{color:props.mode==="dark"?"white":"black"}}>
      <h2>Your Text Summary</h2>
      <p>{countWord()} words,{text.length} characters</p>
      <p>{wordLen} Mintues read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here."}</p>
    </div>
    </>
  )
}
