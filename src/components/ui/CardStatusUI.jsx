import { useMemo } from "react";

const CardStatusUI = ({ status }) => {
  const statusColor = useMemo(() => {
    switch (status) {
      case "Ongoing":
        return "bg-status-green";
      case "Finished":
        return "bg-status-finished";
      case "Scheduled":
        return "bg-status-preparing";
      default:
        return "bg-status-green";
    }
  }, [status]);

  const StatusText = useMemo(() => {
    switch (status) {
      case "Ongoing":
        return "Live";
      case "Finished":
        return "Finished";
      case "Scheduled":
        return "Match preparing";
      default:
        return "Ongoing";
    }
  });

  return (
    <div
      className={`${statusColor} py-1.5 px-2 min-w-[92px] text-center rounded-sm text-xs font-600 whitespace-nowrap`}
    >
      {StatusText}
    </div>
  );
};

export default CardStatusUI;
