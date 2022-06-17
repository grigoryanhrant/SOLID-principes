// Dependency inversion principle

// class Fetch {
//     request(url) {
//         // return fetch(url).then(r => r.json())
//         return Promise.resolve('data from fetch')
//     }
// }
//
// class LocalStorage { // [N]
//     get() {
//         const dataFromLocalStorage = 'data from local storage'
//         return dataFromLocalStorage
//     }
// }
//
// class Database {
//     constructor() {
//         // this.fetch = new Fetch()
//         this.localStorage = new LocalStorage() // [N]
//     }
//
//     getData() {
//         // return this.fetch.request('https://jsonplaceholder.typicode.com/todos/1')
//         return this.localStorage.get('ls key') // [N]
//     }
// }
//
// const db = new Database()
//
// console.log(db.getData())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class LocalStorage { // [N]
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('https://jsonplaceholder.typicode.com/todos/1')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }
}

class Database {
    constructor(client) {
        this.client = client
    }

    getData() {
        return this.client.clientGet()
    }
}

const db = new Database(new FetchClient())

console.log(db.getData(`random`))