class Api {
  constructor(objConfig) {
    this._url = objConfig.url;
  }

  _verifyResolve(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getNewsId() {
    return fetch(`${this._url}/newstories.json`)
    .then(this._verifyResolve);
  }
  getItem(id) {
    return fetch(`${this._url}/item/${id}.json`)
    .then(this._verifyResolve);
  }
}

const apiConfig = {
  url: "https://hacker-news.firebaseio.com/v0",
};

export const api = new Api(apiConfig);
