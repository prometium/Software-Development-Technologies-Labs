export default function receiveData(endpoint, quantity, cb) {
  fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
    .then(response => response.json())
    .then(data => cb(data.slice(0, quantity)))
    .catch(() => {
      /*die*/
    })
    .finally(() => {
      /*die*/
    });
}
