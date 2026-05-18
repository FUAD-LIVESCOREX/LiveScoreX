import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY_HERE&offset=0')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setMatches(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>LiveScoreX - Live Match Updates</h1>
      </header>
      <main>
        {loading ? (
          <p className="loading">Loading Live Scores...</p>
        ) : (
          <div className="match-container">
            {matches.length > 0 ? (
              matches.map((match) => (
                <div key={match.id} className="match-card">
                  <h3>{match.name}</h3>
                  <p className="status">Status: {match.status}</p>
                  <p className="score">Venue: {match.venue}</p>
                </div>
              ))
            ) : (
              <p>No Live Matches At The Moment.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
