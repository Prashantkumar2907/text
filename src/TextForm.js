import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, settext] = useState("Enter your Text here")

    const handleupper = () => {
        const newText = text.toUpperCase()
        settext(newText)
        props.showalert("Converted to UpperCase","success")
    }

    const handleonchange = (e) => {
        settext(e.target.value)
    }

    const handlelower = () => {
        const newText = text.toLowerCase()
        settext(newText)
        props.showalert("Converted to LowerCase","success")
    }
    const handlespace = () => {
        let newText = text.split(/[ ]+/)
        settext(newText.join(" "))
        props.showalert("Removed all extra spaces","success")
    }

    const handleonclear = () => {
        settext('')
        props.showalert("TextArea cleared","success")
    }

    const handleoncopy = (props) => {
        const textval = document.getElementById("exampleFormControlTextarea1")
        textval.select()
        navigator.clipboard.writeText(text);
    }

    return (
        <div>
            <div className="container " style={{color:props.darkmode==='dark'?'white':'black'}}>
                <div className="mb-3 my-5 mx-5">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" style={{color:props.darkmode==='dark'?'white':'black',backgroundColor:props.darkmode==='dark'?'black':'white'}} id="exampleFormControlTextarea1" onChange={handleonchange} value={text} rows="8"></textarea>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleupper}>UpperCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handlelower}>LoweCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handlespace}>ClearExtraSpace</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleonclear}>Reset</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleoncopy}>Copy</button>
                </div>
            </div>
            <div className="container" style={{color:props.darkmode==='dark'?'white':'black'}}>
                <h3>Your Text Summary:</h3>
                <p>{text.length} Characters and {text.split(" ").length} Words</p>
                <div className="container">
                    Preview:-
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
