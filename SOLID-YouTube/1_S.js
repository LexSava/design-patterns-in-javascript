//Single responsibility

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  htnl() {
    return `
        <div class="news"> 
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
        </div>
        `;
  }

  json() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified,
      },
      null,
      2
    );
  }

  xml() {
    return `
      <news>
      <tilte>${this.news.title}</title>
      <text>${this.news.text}</text>
      </news>`;
  }
}

const printer = new NewsPrinter(new News("Конституция", "Дата референдума."));

console.log(printer.htnl());
console.log(printer.json());
console.log(printer.xml());
