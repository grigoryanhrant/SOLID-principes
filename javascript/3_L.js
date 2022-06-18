// Liskov substitution principle

// class Person {
//     access() {
//         console.log('You have access to')
//     }
// }
//
// class Frontend extends Person {
//     canCreateFrontend() {}
// }
//
// class Backend extends Person {
//     canCreateBackend() {}
// }
//
// class PersonFromDifferentCompany extends Person {
//     access() {
//         throw new Error(`You don't have access`)
//     }
// }
//
// function openSecretDoor(person) {
//     person.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Person {}

class Member extends Person {
    access() {
        console.log('You have access to')
    }
}

class Guest extends Person{
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error(`You don't have access`)
    }
}

function openSecretDoor(person) {
    person.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // There should be member