import { useState } from "react";
import useSWR, { mutate } from "swr";
import MatchTrackerHeader from "./MatchTrackerHeader";
import MatchTrackerList from "./MatchTrackerList";

const fetcher = (...args) =>
  fetch(...args).then((res) => res.json().then((data) => data.data));

const MatchTracker = () => {
  const URL = "https://app.ftoyd.com/fronttemp-service/fronttemp";
  const { data: swrData, isLoading, error } = useSWR(URL, fetcher);
  const [data, setData] = useState(swrData);

  const refreshData = async () => {
    try {
      const newData = await fetcher(URL);
      setData(newData);
      mutate(URL, newData);
    } catch (err) {
      console.log("Ошибка при обновлении данных:", err);
    }
  };

  if (swrData && !data) {
    setData(swrData);
  }

  return (
    <div className="w-full mx-auto py-13 px-[42px]">
      <MatchTrackerHeader error={error} refreshData={refreshData} />
      {!data ? (
        <div>Loading...</div>
      ) : (
        <MatchTrackerList data={data} isLoading={isLoading} />
      )}
    </div>
  );
};

export default MatchTracker;
