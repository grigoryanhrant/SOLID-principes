import React from 'react';
import {TodosPage} from "./Components/Todos/TodosPage";
import {FancyInputBox} from "./Components/InputBox/FancyInputBox";

const App = () => {
    return (
        <div>
            <TodosPage />
            <FancyInputBox />
        </div>
    );
};

export default App;