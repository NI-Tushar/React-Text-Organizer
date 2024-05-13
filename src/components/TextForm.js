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
    const toCapital = ()=>{
        
        const words = text.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        let newText = words.join(" ");
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
                <button onClick={toCapital}>Capitalize</button>
            </div>
        </div>
      </div>
    </div>
  )
}
