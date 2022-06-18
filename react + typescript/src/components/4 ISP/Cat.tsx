// interface segregation principle

// "Многие клиентские интерфейсы лучше, чем один интерфейс общего назначения".

// Держите свои интерфейсы небольшими и связными. Не стоит повторно использовать интерфейс вашего преобразователя
// данных только потому, что это проще. Интерфейс компонента должен иметь только те свойства, которые для него важны.

interface CatFactData {
    facts: string[];
    color: string;
    link: string;
}

const CatFact = ({ facts }: CatFactData) => {
    return (
        <ul>
            {facts.map((fact) => (
                <li>{fact}</li>
            ))}
        </ul>
    );
};

export default () => {
    const catFactData: CatFactData = {
        facts: [
            "Cats make about 100 different sounds. Dogs make only about 10.",
            "I don't know anything about cats.",
            "Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming."
        ],
        color: "red",
        link: "https://github.com/"
    };

    return (
        <div>
            <CatFact {...catFactData} />
        </div>
    );
};

// Обратите внимание, что интерфейс CatFactData имеет как цвет, так и ссылку в приведенном выше примере, который
// не используется компонентом CatFact. Его отсутствие не означает, что этот компонент не будет зависеть от него,
// интерфейс не должен иметь неиспользуемых свойств.