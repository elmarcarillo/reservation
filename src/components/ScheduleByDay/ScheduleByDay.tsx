import {
  MAX_SLOTS_PER_DAY,
  RESERVATION_CUTOFF,
  RESERVATION_LENGTH_IN_MINUTES,
} from "../../consts";
import { BLANK_SCHEDULE } from "../../data/mockProviders";
import {
  addMinute,
  getBeginningOfDay,
  getTimeString,
  dateIsWithinRange,
  getTimeOmittingDate,
} from "../../utils/date";
import { NOW, TODAY } from "../DetailsBar/consts";
import { Container, Content, TimeSlot } from "./styles";
import { ScheduleByDayProps } from "./types";
export const ScheduleByDay: React.FC<ScheduleByDayProps> = (props) => {
  const {
    allReservations = [],
    className,
    clientReservations = [],
    currentSelectedReservation,
    currentDate = TODAY,
    onClickTimeSlot = () => {},
    schedule = [BLANK_SCHEDULE],
    reservationCutoff = RESERVATION_CUTOFF,
  } = props;

  const date = getBeginningOfDay();
  const slots = Array.from({ length: MAX_SLOTS_PER_DAY }).map((_, i) => {
    const dateToShow = addMinute(date, i * RESERVATION_LENGTH_IN_MINUTES);

    const isWithinCutoff =
      currentDate + getTimeOmittingDate(dateToShow) >= NOW + reservationCutoff;

    const isAvailable = schedule.some(({ startTime, endTime }) =>
      dateIsWithinRange(
        dateToShow,
        dateToShow + RESERVATION_LENGTH_IN_MINUTES,
        startTime,
        endTime
      )
    );
    const reservation = clientReservations.find(
      (res) =>
        getTimeOmittingDate(res.startTime) === getTimeOmittingDate(dateToShow)
    );
    const otherReservation = allReservations.find(
      (res) =>
        getTimeOmittingDate(res.startTime) === getTimeOmittingDate(dateToShow)
    );

    return (
      <TimeSlot
        key={i}
        $isAvailable={
          reservation
            ? true
            : isAvailable && !otherReservation && isWithinCutoff
        }
        onClick={() => {
          if (isAvailable) {
            onClickTimeSlot(getTimeOmittingDate(dateToShow), reservation);
          }
        }}
      >
        <Content
          $confirmed={!!reservation?.confirmedAt}
          $hasReservation={!!reservation}
          $hasOtherReservation={!!otherReservation}
          $isSelected={currentSelectedReservation?.id === reservation?.id}
        >
          <div>{getTimeString(dateToShow)}</div>
          {!!reservation && <div>Provider {reservation.providerId}</div>}
        </Content>
      </TimeSlot>
    );
  });

  return <Container className={className}>{slots}</Container>;
};
