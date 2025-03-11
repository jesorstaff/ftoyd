import update from "../../assets/update.svg";

const ButtonUI = ({ label, onClick, disabled = false }) => {
  return (
    <button
      className="flex items-center gap-2 bg-default-red active:bg-pressed-red disabled:bg-disabled-red rounded-sm w-fit px-10 py-4 cursor-pointer"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      <img src={update} alt={label} />
    </button>
  );
};

export default ButtonUI;
