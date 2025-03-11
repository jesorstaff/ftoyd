import { useState } from "react";
import icon from "./assets/icon.svg";
import CardStatusUI from "../ui/CardStatusUI";
import TeamSection from "./TeamSection";
import DropdownArrow from "../ui/DropdownArrow";

const MatchTrackerItem = ({ match }) => {
  const { awayTeam, homeTeam, awayScore, homeScore, status } = match;

  const [openTeamSection, setOpenTeamSection] = useState(false);

  const OpenTeamSection = () => {
    setOpenTeamSection(!openTeamSection);
  };

  return (
    <div
      className="bg-default-bg rounded-sm py-4 px-9 mt-3 first:mt-0"
      onClick={OpenTeamSection}
    >
      <div className="grid grid-cols-[auto_128px_auto_fit-content(28px)]">
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
        <div className="flex justify-center items-center ml-3">
          <DropdownArrow isOpen={openTeamSection} />
        </div>
      </div>
      {openTeamSection && (
        <div className="grid grid-cols-[1fr_1fr] mt-8 gap-8">
          <TeamSection team={awayTeam} />
          <TeamSection team={homeTeam} />
        </div>
      )}
    </div>
  );
};

export default MatchTrackerItem;
