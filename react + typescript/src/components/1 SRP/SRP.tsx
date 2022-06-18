import {useEffect, useState} from "react";
import axios from "axios";

// single responsibility principle
// В приведенном  примере один и тот же компонент хранит состояние, извлекает данные и отображает результат.
// Это намного больше обязанностей, чем должно быть, и этот компонент будет очень хрупким в будущем после
// многочисленных изменений.

export default function App() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        axios.get("https://cat-fact-herokuapp.com/facts").then((res) => {
            setFact(res.data[0].text);
        });
    }, []);

    return (
        <div className="App">
            <h1>Cat Facts</h1>
            <p>{fact}</p>
        </div>
    );
}