import MatchTrackerItem from "./MatchTrackerItem";

const MatchTrackerList = ({ data, isLoading }) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.matches.map((match, index) => (
        <MatchTrackerItem key={index} match={match} />
      ))}
    </div>
  );
};

export default MatchTrackerList;
