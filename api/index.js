import fetch from 'node-fetch';

// url/api 처럼 사용
export default async function handler(request, response) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return response.status(200).json({ data });
}
