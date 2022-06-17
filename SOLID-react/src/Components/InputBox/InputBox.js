import {useState} from "react";

export const InputBox = ({stylesForH1, h1Message}) => {

    const [input, setInput] = useState("");

    return (<>
            <h1 style={stylesForH1}>{h1Message}</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
        </>)
};