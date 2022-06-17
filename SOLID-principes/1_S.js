// Single Responsibility Principle

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

    // toHTML() {
    //     return `
    //         <div class="news">
    //             <h1>${this.title}</h1>
    //             <p>${this.text}</p>
    //         </div>
    //     `
    // }
    //
    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     }, null, 2)
    // }
}

// let news = new News("Великобритания", "Погода")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    HTML() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    JSON() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    XML() {
        return `
            <news>
                <title>${this.news.title}</title>
                <title>${this.news.text}</title>
            </news>
        `
    }
}

const printer = new NewsPrinter(
    new News('Великобритания', 'Погода')
)

console.log(printer.HTML())
console.log(printer.XML())
console.log(printer.JSON())