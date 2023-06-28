import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to uppercase", "Success");
    }
    const handleLoClick=()=>{
        console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to lowercase", "Success");
    }
    const handlermvespaceClick=()=>{
        console.log("button was clicked"+ text);
        let newText = text.replaceAll(' ','');
        setText(newText)
        props.showAlert(" space is removed", "Success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to Clipboard", "Success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
   
    const[text,setText]=useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>            
        <h1><b>{props.heading}</b></h1>
        <div className="mb-3">
   
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-4' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handlermvespaceClick}>remove space</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>copy text</button>    
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>extra spaces removed</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
