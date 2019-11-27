export default function api(endpoint) {
  return fetch(
    `https://jsonplaceholder.typicode.com/${endpoint}`
  ).then(response => response.json());
}
