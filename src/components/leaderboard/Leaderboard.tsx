

import React from 'react';
import image1 from '../../assets/avatar/uifaces-popular-image(25).jpg'
import image2 from '../../assets/avatar/uifaces-popular-image(27).jpg'
import image3 from '../../assets/avatar/uifaces-popular-image(28).jpg'
import image4 from '../../assets/avatar/uifaces-popular-image(30).jpg'

type Player = {
  id: number;
  name: string;
  score: number;
  photoUrl: string;
};

const players: Player[] = [
  { id: 1, name: 'Alice', score: 95, photoUrl: `${image1}` },
  { id: 2, name: 'Bob', score: 87, photoUrl: `${image2}` },
  { id: 3, name: 'Charlie', score: 78, photoUrl: `${image3}` },
  { id: 4, name: 'Diana', score: 92, photoUrl: `${image4}` },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="bg-gray-100 flex items-center justify-between px-6 py-4">
      <h2 className="text-xl font-bold text-gray-700">Leaderboard</h2>
      <button className="text-gray-500 hover:text-gray-700">
        <i className="fas fa-sync-alt"></i> 
      </button>
    </div>

    
    <div>
      {players.map((player, index) => (
        <div key={player.id} className={`flex items-center px-6 py-4 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-500'}`}>
          {/* Left circular image */}
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden mr-4">
            <img src={player.photoUrl} alt={player.name} className="w-full h-full object-cover" />
          </div>

          {/* Name and Score */}
          <div className="flex-1 text-white">
            <span className="block font-semibold">{player.name.toUpperCase()}</span>
          </div>
          <div className="text-white font-semibold text-lg">
            {player.score.toLocaleString()} <span className="text-sm">POINTS</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Leaderboard;
