import {InputBox} from './InputBox'

export const FancyInputBox = () => {
    return (
        <div>
            <InputBox stylesForH1={{color: "red"}} h1Message={"Enter your name: "}/>
        </div>
    )
};