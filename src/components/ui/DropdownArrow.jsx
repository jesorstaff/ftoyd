const DropdownArrow = ({ isOpen = false }) => {
  return (
    <>
      {isOpen ? (
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18L14 11L21 18"
            stroke="#FAFAFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5716 16.0924L14.0059 16.6581L13.4402 16.0924L8.91353 11.5657C8.78113 11.4333 8.53854 11.4234 8.38461 11.5694C8.24566 11.7122 8.24687 11.938 8.38824 12.0794L13.7432 17.4344C13.8858 17.577 14.1143 17.577 14.2569 17.4344L19.6119 12.0794C19.7544 11.9368 19.7544 11.7083 19.6119 11.5657C19.4693 11.4232 19.2408 11.4232 19.0982 11.5657L14.5716 16.0924Z"
            fill="white"
            stroke="white"
            strokeWidth="1.6"
          />
        </svg>
      )}
    </>
  );
};

export default DropdownArrow;
