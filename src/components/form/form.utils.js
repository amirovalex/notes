export const getDateNow = () => {
  const date = new Date();
  const dateDay = date.getDate();
  const dateMonth = date.toLocaleString("default", { month: "short" });
  let dateHour = date.getHours();
  let dateMinutes = date.getMinutes();
  const ampm = dateHour >= 12 ? "PM" : "AM";
  const ending = (() => {
    switch (dateDay.toString().slice(-1)) {
      case "1":
        return "st";
        break;
      case "2":
        return "nd";
        break;
      case "3":
        return "rd";
        break;
      default:
        return "th";
    }
  })();
  dateHour = dateHour % 12;
  dateHour = dateHour ? dateHour : 12; // the hour '0' should be '12'
  dateMinutes = dateMinutes < 10 ? "0" + dateMinutes : dateMinutes;
  return `${dateMonth} ${dateDay}${ending} ${dateHour}:${dateMinutes}${ampm}`;
};

export const getCloseButton = (color, id, onClickCb) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : "red"}
      width="15"
      height="15"
      viewBox="0 0 24 24"
      id={id}
      onClick={() => onClickCb()}
    >
      <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
    </svg>
  );
};
