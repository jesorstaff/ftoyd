import MatchTrackerHeader from "./MatchTrackerHeader";
import MatchTrackerList from "./MatchTrackerList";
import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args).then((res) => res.json().then((data) => data.data));

const MatchTracker = () => {
  const { data, isLoading, error } = useSWR(
    "https://app.ftoyd.com/fronttemp-service/fronttemp",
    fetcher
  );

  return (
    <div className="w-full mx-auto py-13 px-[42px]">
      <MatchTrackerHeader error={error} isLoading={isLoading} />
      <MatchTrackerList data={data} isLoading={isLoading} />
    </div>
  );
};

export default MatchTracker;
