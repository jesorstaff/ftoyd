const TeamStats = ({ team }) => {
  return (
    <div className="grid grid-cols-[repeat(3,1fr)] gap-2 items-center bg-cell-bg py-2 px-6 rounded-sm mt-2">
      <TeamStatsItem title="Points" value={`+${team.points}`} />
      <TeamStatsItem title="Место" value={team.place} />
      <TeamStatsItem title="Всего убийств" value={team.total_kills} />
    </div>
  );
};

const TeamStatsItem = ({ title, value }) => {
  return (
    <div className="flex items-center justify-center gap-2 relative after:absolute after:right-0 after:block after:w-[1px] after:h-[16px] after:bg-[#141A21] last:after:hidden">
      <span className="text-sm font-medium text-cell-secondary">{title} :</span>
      {value}
    </div>
  );
};
export default TeamStats;
