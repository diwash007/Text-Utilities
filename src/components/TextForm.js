import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUp = () => {
        setText(text.toUpperCase());
    }
    const handleLow = () => {
        setText(text.toLowerCase());
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleClear = () => {
        setText("");
    }

    const handleBold = () => {
        if(!(text.indexOf("<b>") > -1 || text.indexOf("<B>") > -1))
            setText(text.bold());
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied Successfully!", "success");
    }

    // const toggleStyle = () => {
    //     if(myStyle.color === "black"){
    //         setStyle({
    //             'color': 'white',
    //             'background': 'black'
    //         });
    //         setBtnText("Light mode");
    //     }
    //     else {
    //         setStyle({
    //             'color': 'black',
    //             'background': 'white'
    //         });
    //         setBtnText("Dark mode");
    //     }
    // }

    const getWords = (text) => {
        let words = text.replace(/\s{2,}/g,' ').split(/\s|\n/);
        for(let i = 0; i < words.length; i++) {
            if(words[i] === '') words.splice(i, 1);
        }
        return words.length
    }

    // const [myStyle, setStyle] = useState({
    //     'color': 'black',
    //     'background': 'white'
    // })
    // const [btnText, setBtnText] = useState("Dark mode")

    const [text, setText] = useState('');
    return (
        <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <form>
            <div className="form-group mt-5">
            <h2>{props.heading}</h2>
            <textarea
                className={`form-control text-${props.mode==='light'?'dark':'light'} bg-${props.mode}`}
                onChange={handleChange}
                value={text}
                id="txt"
                rows="8">
                </textarea>
            </div>
            </form>
            <em>Result:</em>
            <div className="container border p-2 mb-3">
                <p className="display"  dangerouslySetInnerHTML={{__html: text}}></p>
            </div>
            <button className="btn btn-dark" onClick={handleBold}>Bold</button>
            <button className="btn btn-primary ml-3" onClick={handleUp}>Uppercase</button>
            <button className="btn btn-primary ml-3" onClick={handleLow}>Lowercase</button>
            <button className="btn btn-danger ml-3" onClick={handleClear}>Clear</button>
            <button className="btn btn-secondary ml-3" onClick={handleCopy}>Copy</button>
        </div>
        <div className={`container mt-5 text-${props.mode==='light'?'dark':'light'}`}>
            <h3>Your text summary:</h3>
            <p> { getWords(text) } words <br/>
                { text.length } characters <br/>
                { getWords(text) * 0.008 } minutes read
            </p>
        </div>
        </>
    )
}
