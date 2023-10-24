import { reservationsByDate } from "../../utils/clientUtils";
import { getBeginningOfDay, getDateString } from "../../utils/date";
import { schedulesByDate } from "../../utils/providerUtils";
import { ScheduleByDay } from "../ScheduleByDay";
import { Container, Date, ScheduleContainer } from "./styles";
import { SchedulesProps } from "./types";

export const Schedules: React.FC<SchedulesProps> = (props) => {
  const {
    currentSelectedReservation,
    schedules,
    allReservations = [],
    clientReservations = [],
    onClickTimeSlot = () => {},
  } = props;
  const schedulesByDay = schedulesByDate(schedules);
  const allReservationsByDay = reservationsByDate(allReservations);
  const clientReservationsByDay = reservationsByDate(clientReservations);

  return (
    <Container>
      {Object.keys(schedulesByDay).map((date) => (
        <ScheduleContainer key={date}>
          <Date>{getDateString(parseInt(date, 10))}</Date>
          <ScheduleByDay
            currentDate={parseInt(date, 10)}
            currentSelectedReservation={currentSelectedReservation}
            schedule={schedulesByDay[date]}
            allReservations={allReservationsByDay[date] ?? []}
            clientReservations={clientReservationsByDay[date] ?? []}
            onClickTimeSlot={(time, reservation) =>
              onClickTimeSlot(
                getBeginningOfDay(parseInt(date, 10)) + time,
                reservation
              )
            }
          />
        </ScheduleContainer>
      ))}
    </Container>
  );
};
