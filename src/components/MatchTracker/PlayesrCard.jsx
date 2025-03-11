import avatar from "../../assets/avatar_global.png";

const PlayerCard = ({ player }) => {
  return (
    <div className="flex items-center justify-between rounded-sm bg-cell-bg py-2 px-6">
      <div className="flex items-center gap-2">
        <img src={avatar} alt={player.username} />
        <p>{player.username}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-cell-secondary">
          Убийств:
        </span>
        {player.kills}
      </div>
    </div>
  );
};

export default PlayerCard;
