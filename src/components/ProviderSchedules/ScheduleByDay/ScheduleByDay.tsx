import {
  MAX_SLOTS_PER_DAY,
  RESERVATION_LENGTH_IN_MINUTES,
} from "../../../consts";
import {
  addMinute,
  getBeginningOfDay,
  getDateString,
  getTimeString,
  dateIsWithinRange,
} from "../../../utils/date";
import { Container, TimeSlot } from "./styles";
import { ScheduleByDayProps } from "./types";

export const ScheduleByDay: React.FC<ScheduleByDayProps> = (props) => {
  const { schedule } = props;

  const date = getBeginningOfDay();
  const slots = Array.from({ length: MAX_SLOTS_PER_DAY }).map((_, i) => {
    const dateToShow = addMinute(date, i * RESERVATION_LENGTH_IN_MINUTES);
    const isAvailable = schedule.some(({ startTime, endTime }) =>
      dateIsWithinRange(
        dateToShow,
        dateToShow + RESERVATION_LENGTH_IN_MINUTES,
        startTime,
        endTime
      )
    );
    return (
      <TimeSlot key={i} $isAvailable={isAvailable}>
        {getTimeString(dateToShow)}
      </TimeSlot>
    );
  });

  return (
    <Container>
      {getDateString(schedule[0].startTime)}
      {slots}
    </Container>
  );
};
