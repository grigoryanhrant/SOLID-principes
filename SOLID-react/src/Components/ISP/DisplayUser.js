const user = {
    personalInfo: {
        name: "Monica",
        age: 23
    },

    physicalFeatures: {
        hairColor: "blonde",
        heightInC: 175
    }
};

const DisplayUser = props => {
    return (
        <div>
            <h1>Hello, {props.user.name}</h1>
        </div>
    )
}