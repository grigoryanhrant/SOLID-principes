import React from 'react';

// liskov substitution principle:
// Объекты в программе должны заменяться экземплярами их подтипов без изменения правильности этой программы.
// Основной вывод из этого принципа использование TypeScript . Вы можете легко поменять местами компоненты,
// если они используют один и тот же контракт. В следующем примере оба компонента ожидают один и тот же интерфейс.

interface CatFact {
    facts: string[];
    color: string;
}

const CatFactA = ({facts, color}: CatFact) => {
    return (
        <>
            {facts.map((fact, index) => (
                <p style={{color}}>
                    Fact {index}: {fact}
                </p>
            ))}
        </>
    );
};

const CatFactB = ({facts, color}: CatFact) => {
    return (
        <ul style={{color}}>
            {facts.map((fact) => (
                <li>{fact}</li>
            ))}
        </ul>
    );
};

export default () => {
    const catFactData: CatFact = {
        facts: [
            "Cats make about 100 different sounds. Dogs make only about 10.",
            "I don't know anything about cats.",
            "Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming."
        ],
        color: "red"
    };
    const abTest = Math.floor(Math.random() * 2) + 1;
    return (
        <div>
            {abTest === 1 ? (
                <CatFactA {...catFactData} />
            ) : (
                <CatFactB {...catFactData} />
            )}
        </div>
    );
};