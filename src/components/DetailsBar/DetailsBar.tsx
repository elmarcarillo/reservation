import { MAX_SLOTS_PER_DAY, RESERVATION_LENGTH_IN_MINUTES } from "../../consts";
import {
  addDay,
  addMinute,
  getDateString,
  getBeginningOfDay,
  getTimeString,
  getNow,
  getTimeOmittingDate,
} from "../../utils/date";
import { Container, Dropdown } from "./styles";
import { DetailsBarProps } from "./types";

const TODAY = getBeginningOfDay();
const NOW = getNow();
const NUMBER_OF_DAYS_TO_SHOW = 7;

export const DetailsBar: React.FC<DetailsBarProps> = (props) => {
  const { date = NOW, onChangeDate = () => {} } = props;
  const selectedDate = getBeginningOfDay(date);
  const selectedTime = getTimeOmittingDate(date);

  const dayOptions = Array.from({ length: NUMBER_OF_DAYS_TO_SHOW }).map(
    (_, index) => {
      const currentDate = addDay(TODAY, index);
      return (
        <option key={`${index}${currentDate}`} value={currentDate}>
          {getDateString(currentDate)}
          {index === 0 ? " (Today)" : ""}
        </option>
      );
    }
  );

  const timeOptions = Array.from({ length: MAX_SLOTS_PER_DAY }).map(
    (_, index) => {
      const currentTime = addMinute(
        TODAY,
        index * RESERVATION_LENGTH_IN_MINUTES
      );
      return (
        <option
          key={`${index}${currentTime}`}
          value={getTimeOmittingDate(currentTime)}
          disabled={false}
        >
          {getTimeString(currentTime)}
        </option>
      );
    }
  );

  return (
    <Container>
      <Dropdown
        value={selectedDate}
        onChange={(e) => onChangeDate(parseInt(e.target.value))}
      >
        {dayOptions}
      </Dropdown>
      <Dropdown
        value={selectedTime}
        onChange={(e) => {
          onChangeDate(
            selectedDate + getTimeOmittingDate(parseInt(e.target.value))
          );
        }}
      >
        {timeOptions}
      </Dropdown>
    </Container>
  );
};
