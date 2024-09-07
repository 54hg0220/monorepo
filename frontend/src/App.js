import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://c9hwzt5wva.execute-api.ap-southeast-2.amazonaws.com`);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Testv3s</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name v3"
          required
        />
        <button type="submitv2">Testv3</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
