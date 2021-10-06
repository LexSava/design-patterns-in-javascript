//Dependency inversion

class Feach {
  request(url) {
    // return fetch(url).then((r) => r.json());
    return Promise.resolve("data from fetch");
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = "data from local storage";
    return dataFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Feach();
  }

  clientGet() {
    return this.fetch.request("vk.com");
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet() {
    return this.localStorage.get();
  }
}
class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

const db = new Database(new LocalStorageClient());

// console.log(db.getData());

console.log(db.getData("random"));
