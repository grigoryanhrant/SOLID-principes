import RequestAxios from "./RequestAxios";
import RequestFake from "./RequestFake";

export default (url: string) => {
    const enableFakeData =
        new URL(window.location.href).searchParams.get("enableFakeData") === "1";

    return enableFakeData ? RequestFake(url) : RequestAxios(url);
};