import { MAX_SLOTS_PER_DAY, RESERVATION_LENGTH_IN_MINUTES } from "../../consts";
import { BLANK_SCHEDULE } from "../../data/mockProviders";
import {
  addMinute,
  getBeginningOfDay,
  getTimeString,
  dateIsWithinRange,
  getTimeOmittingDate,
} from "../../utils/date";
import { Container, Content, TimeSlot } from "./styles";
import { ScheduleByDayProps } from "./types";
export const ScheduleByDay: React.FC<ScheduleByDayProps> = (props) => {
  const {
    className,
    onClickTimeSlot = () => {},
    schedule = [BLANK_SCHEDULE],
    reservations = [],
  } = props;

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
    const reservation = reservations.find(
      (res) =>
        getTimeOmittingDate(res.startTime) === getTimeOmittingDate(dateToShow)
    );

    return (
      <TimeSlot
        key={i}
        $isAvailable={isAvailable}
        onClick={() => {
          if (isAvailable) {
            onClickTimeSlot(getTimeOmittingDate(dateToShow), reservation);
          }
        }}
      >
        <Content $hasReservation={!!reservation}>
          {getTimeString(dateToShow)}
        </Content>
      </TimeSlot>
    );
  });

  return <Container className={className}>{slots}</Container>;
};
