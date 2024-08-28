export const HeaderItems = ({ title }) => {
  return (
    <div className="whitespace-nowrap flex flex-col justify-center items-center px-3 py-2 ml-3 rounded bg-white text-primaryDark">
      <p>{title}</p>
    </div>
  );
};
