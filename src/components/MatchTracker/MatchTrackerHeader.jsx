import logo from "./assets/logo.svg";
import warning from "./assets/warning.svg";
import ButtonUI from "../ui/ButtonUI";

const MatchTrackerHeader = ({ error = false, isLoading }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-3">
        {error && (
          <div className="flex items-center gap-[10px] py-[14px] px-6">
            <img src={warning} alt="warning" />
            <p>Ошибка: не удалось загрузить информацию</p>
          </div>
        )}
        <ButtonUI label="Обновить" />
      </div>
    </div>
  );
};

export default MatchTrackerHeader;
