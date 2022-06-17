import RequestFactory from "./RequestFactory";

export default (): Promise<string> => {
    return new Promise((resolve, reject) => {
        RequestFactory("https://cat-fact.herokuapp.com/facts")
            .then((res) => resolve((res as CatFactsResponse)[0].text))
            .catch((error) => reject(error));
    });
};

type CatFactsResponse = Array<{
    text: string;
}>;