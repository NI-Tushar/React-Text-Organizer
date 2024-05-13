import React, {useState} from 'react';
import '../css/textform.css';

export default function TextForm(props) {

    const toUppercase = ()=>{
        // console.log('Upper case clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const toLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = ()=>{
        let newText = '';
        setText(newText);
    }


    const textChange=(event)=>{
        console.log('text change');
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');

  return (
    <div>
      <div className="text_box">
        <div className="text_main_box">
        <h2>{props.title}</h2>
        <h3>Enter Your Text</h3>
            <textarea value={text} onChange={textChange} rows="8" cols="50"/>
            <div className="buttons">
                <button onClick={toUppercase}>UpperCase</button>
                <button onClick={toLowercase}>LowerCase</button>
                <button onClick={clearText}>Clear Text</button>
            </div>
        </div>
        {/* ____________________ */}
        <div className="text_main_box">
          <h3>Your Text Summary:</h3>
          <p><span>Total Words: </span>{text.split(" ").length}</p>
          <p><span>Total Charecters: </span>{text.length}</p>
          <p><span>Read: </span>{0.008*text.split(" ").length} Minutes Read</p>
          <h4>Preview:</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}



