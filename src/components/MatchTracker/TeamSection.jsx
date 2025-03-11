import PlayerCard from "./PlayesrCard";
import TeamStats from "./TeamStats";
const TeamSection = ({ team }) => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(3,1fr)] gap-2 items-center">
        {team.players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
      <TeamStats team={team} />
    </div>
  );
};

export default TeamSection;
