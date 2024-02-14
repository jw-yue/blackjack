import { FormEvent, useState } from "react";

interface AddPlayers {
  addPlayers: (players: string[]) => void;
}

const AddPlayers = ({ addPlayers }: AddPlayers) => {
  const [players, setPlayers] = useState<string[]>([
    "jon",
    "julie",
    "titan",
    "jane",
  ]);
  const [addPlayer, setAddPlayer] = useState(false);

  const addNewPlayer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAddPlayer(false);

    if ((e.currentTarget[0] as HTMLInputElement).value !== "dealer") {
      setPlayers([...players, (e.currentTarget[0] as HTMLInputElement).value]);
      (e.currentTarget[0] as HTMLInputElement).value = "";
    }
  };

  const onSubmitPlayers = () => {
    if (players.length < 1) {
      return <div>Need at least 1 player to start the game</div>;
    } else if (players.length > 7) {
      return <div>Too many players</div>;
    } else {
      addPlayers(players);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center m-3">
      <div className="text-center mb-4">
        <b>All players</b>
      </div>
      <div className="d-flex flex-column align-items-center">
        {players.map((player) => {
          return <div key={player}>{player}</div>;
        })}
      </div>
      <div className="">
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-block border"
            onClick={() => {
              setAddPlayer(true);
            }}
          >
            Add Player
          </button>
        </div>

        <div className={addPlayer === false ? "d-none" : ""}>
          <form
            className="d-flex flex-column align-items-center"
            onSubmit={addNewPlayer}
          >
            <div className="form-group p-2">
              <label htmlFor="playerName">First name</label>
              <input
                type="text"
                className="form-control"
                id="playerName"
                placeholder="John"
                required
              />
            </div>
            <button type="submit" className="btn btn-block border">
              Submit
            </button>
          </form>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-block border mx-auto col-1 m-5"
        onClick={onSubmitPlayers}
      >
        Start Game
      </button>
    </div>
  );
};

export default AddPlayers;