import React, { useState } from "react";

export default function GamePage() {
	const [numPlayers, setNumPlayers] = useState(0);
	const [players, setPlayers] = useState([]);
	const [winner, setWinner] = useState(null);

	const initializePlayers = () => {
		const newPlayers = [];
		for (let i = 0; i < numPlayers; i++) {
			newPlayers.push({
				id: i,
				score: 0,
				name: `Player ${i + 1}`,
				speed: Math.random() * 5 + 1,
				position: 0,
			});
		}
		setPlayers(newPlayers);
		return newPlayers;
	};

	const startRace = () => {
		const raceInterval = setInterval(() => {
			const updatedPlayers = players.map((player) => ({
				...player,
				position: player.position + player.speed,
			}));
			setPlayers(updatedPlayers);

			const raceFinished = updatedPlayers.some(
				(player) => player.position >= 100
			); // Finish line at position 100

			if (raceFinished) {
				clearInterval(raceInterval);
				const winningPlayer = updatedPlayers.find(
					(player) => player.position >= 100
				);
				setWinner(winningPlayer);
			}
		}, 100); // Adjust interval speed as needed
	};

	return (
		<div className="App">
			<h1>Racing Game</h1>
			<label>
				Number of Players:
				<input
					type="number"
					value={numPlayers}
					onChange={(e) => setNumPlayers(parseInt(e.target.value))}
				/>
			</label>
			<button onClick={initializePlayers}>Initialize Players</button>
			<button onClick={startRace}>Start Race</button>
			{winner && <h2>{winner.name} wins!</h2>}
			<div className="race-track">
				{players.map((player) => (
					<div
						key={player.id}
						className="player"
						style={{
							left: `${player.position}%`,
						}}
					>
						{player.name}
					</div>
				))}
			</div>
		</div>
	);
}
