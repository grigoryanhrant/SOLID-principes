import React from 'react';

// Следует полагаться на абстракции, [а не] на конкреции.
// В приведенном ниже примере мы напрямую ссылаемся на axios вкомпоненте
// страницы, который также являетсяпроизводным от интерфейса axios:

import {useEffect, useState} from "react";
import axios from "axios";

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

// Мы можем избежать прямой зависимости от аксиом, создав компонент Factory. Таким образом,
// наша зависимость будет абстракцией, которая возвращает тот же интерфейс, который определен нашей службой: