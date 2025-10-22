import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [result, setResult] = useState(null);
  const [userEmoji, setUserEmoji] = useState('');
  const [computerEmoji, setComputerEmoji] = useState('');

  const handlePlay = async (choice) => {
    try {
      const res = await axios.post("http://localhost:5000/play", { choice });
      setResult(res.data.result);
      setUserEmoji(res.data.user_emoji);
      setComputerEmoji(res.data.computer_emoji);
    } catch (err) {
      alert("Invalid choice or server error");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎮 Rock Paper Scissors</h1>
      <div>
        <button onClick={() => handlePlay("rock")}>🤘🏾 Rock</button>
        <button onClick={() => handlePlay("paper")}>📄 Paper</button>
        <button onClick={() => handlePlay("scissor")}>✂ Scissor</button>
      </div>
      {result && (
        <div style={{ marginTop: '20px' }}>
          <h2>Result: {result.toUpperCase()}</h2>
          <p>You chose: {userEmoji}</p>
          <p>Computer chose: {computerEmoji}</p>
        </div>
      )}
    </div>
  );
}

export default App;
