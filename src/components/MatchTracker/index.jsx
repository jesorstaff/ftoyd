import MatchTrackerHeader from "./MatchTrackerHeader";
import MatchTrackerList from "./MatchTrackerList";
import useSWR, { mutate } from "swr";

const fetcher = (...args) =>
  fetch(...args).then((res) => res.json().then((data) => data.data));

const MatchTracker = () => {
  const URL = "https://app.ftoyd.com/fronttemp-service/fronttemp/";

  const { data, isLoading, error } = useSWR(URL, fetcher);

  const refreshData = () => {
    console.log("refreshData");
    mutate(URL);
  };

  return (
    <div className="w-full mx-auto py-13 px-[42px]">
      <MatchTrackerHeader
        error={error}
        isLoading={isLoading}
        refreshData={refreshData}
      />
      <MatchTrackerList data={data} isLoading={isLoading} />
    </div>
  );
};

export default MatchTracker;
