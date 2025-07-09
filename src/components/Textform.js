import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState('')
    const handleUpClick=()=>{
        // console.log(text)
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase !","success")
    }
    const handleLoClick=()=>{
      // console.log(text)
      let newText=text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to LowerCase !","success")
  }

  const handleOnClear=()=>{
    // console.log(text)
    let newText=('')
    setText(newText)
    props.showAlert("Clear All !","success")
 }

     // credit : A
 const handleOnCopy=()=>{
    // console.log(text)
    var text  = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard !","success")
 }
   
    // credit : coding wala
 const handleExtraSpace=()=>{
    // console.log(text)
    let newText  = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Remove Extra Spaces !","success")
 }
 
    const handleOnChange=(event)=>{
        // console.log('Handle on change')
        setText(event.target.value)
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
       <div className="mb-3">
           <h2>{props.heading}</h2>
           <textarea className="form-control" placeholder='enter text here' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox"rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleOnClear} >Clear Word</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleOnCopy} >Copy Word</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace} >Remove Extra Space</button>
    </div>

    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className='mb-4'>your word summary </h1>
      <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} {text.split(' ').filter((element)=>{return element.length!==0}).length>1?'words':'word'} and {text.length} character</p>
      <p>{(text.split(' ').length-1)*0.007} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to Preview !'}</p>
    </div>
    </>
  )

}
