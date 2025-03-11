import icon from "./assets/icon.svg";
import CardStatusUI from "../ui/CardStatusUI";
import avatar from "../../assets/avatar_global.png";

const MatchTrackerItem = ({ match }) => {
  const { awayTeam, homeTeam, awayScore, homeScore, status, time, title } =
    match;

  console.log("match", match);

  return (
    <div className="bg-default-bg rounded-sm py-4 px-9 mt-3 first:mt-0">
      <div className="grid grid-cols-[auto_100px_auto]">
        <div className="flex items-center gap-3.5">
          <img src={icon} alt="logo" />
          <p className="text-base">{awayTeam.name}</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <div className="text-xl">
            {awayScore} : {homeScore}
          </div>
          <CardStatusUI status={status} />
        </div>
        <div className="flex justify-end items-center gap-3.5">
          <p className="text-base">{homeTeam.name}</p>
          <img src={icon} alt="logo" />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] mt-8 gap-8">
        <div>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-2 items-center">
            {awayTeam.players.map((player, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-sm bg-cell-bg py-2 px-6"
              >
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
            ))}
          </div>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-2 items-center bg-cell-bg py-2 px-6 rounded-sm mt-2">
            <div className="flex items-center justify-center gap-2 relative after:absolute after:right-0 after:block after:w-[1px] after:h-[16px] after:bg-[#141A21]">
              <span className="text-sm font-medium text-cell-secondary">
                Points:
              </span>
              {awayTeam.points}
            </div>
            <div className="flex items-center justify-center gap-2 relative after:absolute after:right-0 after:block after:w-[1px] after:h-[16px] after:bg-[#141A21]">
              <span className="text-sm font-medium text-cell-secondary">
                Место:
              </span>
              {awayTeam.place}
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-medium text-cell-secondary">
                Всего убийств:
              </span>
              {awayTeam.total_kills}
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-2 items-center">
            {homeTeam.players.map((player, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-sm bg-cell-bg py-2 px-6"
              >
                <div className="flex items-center gap-2">
                  <img src={avatar} alt={player.username} />
                  <p>{player.username}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#FAFAFA66]">
                    Убийств:
                  </span>
                  {player.kills}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-2 items-center bg-cell-bg py-2 px-6 rounded-sm mt-2">
            <div className="flex items-center justify-center gap-2 relative after:absolute after:right-0 after:block after:w-[1px] after:h-[16px] after:bg-[#141A21]">
              <span className="text-sm font-medium text-cell-secondary">
                Points:
              </span>
              {homeTeam.points}
            </div>
            <div className="flex items-center justify-center gap-2 relative after:absolute after:right-0 after:block after:w-[1px] after:h-[16px] after:bg-[#141A21]">
              <span className="text-sm font-medium text-cell-secondary">
                Место:
              </span>
              {homeTeam.place}
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-medium text-cell-secondary">
                Всего убийств:
              </span>
              {homeTeam.total_kills}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchTrackerItem;
