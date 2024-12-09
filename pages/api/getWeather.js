async function handler(req, res) {
  console.log('is this being called');
  const response = await fetch('http://localhost:8000/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  res.json(data);
}

export default handler;