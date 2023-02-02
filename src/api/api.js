const api = (_method, url, _body) =>
  fetch(
    "https://jsonplaceholder.typicode.com/users" +
      url,
    {
      method: _method,
      body: JSON.stringify(_body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export default api;
