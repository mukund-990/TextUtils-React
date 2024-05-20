import React, { useState } from 'react';
export default function TextForm(props) {
    const handleUpcClick=() =>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLocClick=() =>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClearClick=() =>{
        let newText='';
        setText(newText);
        props.showAlert("Text area cleared!","success");
    }
    const handleOnchange= (event) =>{
        setText(event.target.value);
    }
    const handlecopy= () =>{
        var text=document.getElementById('myBox');
        text.select();
        props.showAlert("Text copied!","success");
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraspaces=() =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
        const  [text, setText] = useState('');
    return (
        <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'? '#13466e':'white',color: props.mode==='dark'? 'white':'#042743'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpcClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLocClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text above to preview it here." }</p>
    </div>
    </>
  )
}
