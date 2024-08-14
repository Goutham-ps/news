// Components/LiveScores.js

import React from 'react';
import './LiveScores.css'; // Make sure to create and style this CSS file
import realMadridLogo from '../Assets/RealMadrid.png';
import barcelonaLogo from '../Assets/FCBarcelona.png';
import manUtdLogo from '../Assets/ManCity.png';
import liverpoolLogo from '../Assets/Liverpool.png';
import juventusLogo from '../Assets/Juventus.png';
import acMilanLogo from '../Assets/ACMilan.png';

const LiveScores = () => {
  const liveScores = [
    {
      match: 'Real Madrid vs Barcelona',
      score: '0-5',
      logos: [realMadridLogo, barcelonaLogo],
      isLive: true,
    },
    {
      match: 'Manchester City vs Liverpool',
      score: '1-3',
      logos: [manUtdLogo, liverpoolLogo],
      isLive: true,
    },
    {
      match: 'Juventus vs AC Milan',
      score: '0-0',
      logos: [juventusLogo, acMilanLogo],
      isLive: true,
    },
    // Add more matches as needed
  ];

  return (
    <div className="live-scores">
      <h2>Live Scores</h2>
      <div className="scores-container">
        {liveScores.map((game, index) => (
          <div key={index} className="score-card">
            {game.isLive && <span className="live-mark">LIVE</span>}
            <div className="logos">
              <img src={game.logos[0]} alt="Team 1 Logo" className="team-logo" />
              <img src={game.logos[1]} alt="Team 2 Logo" className="team-logo" />
            </div>
            <span className="match">{game.match}</span>
            <span className="score">{game.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveScores;
