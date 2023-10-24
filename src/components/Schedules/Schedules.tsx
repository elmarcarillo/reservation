import { reservationsByDate } from "../../utils/clientUtils";
import { getDateString } from "../../utils/date";
import { schedulesByDate } from "../../utils/providerUtils";
import { ScheduleByDay } from "../ScheduleByDay";
import { Container, ScheduleContainer } from "./styles";
import { SchedulesProps } from "./types";

export const Schedules: React.FC<SchedulesProps> = (props) => {
  const { schedules, reservations = [] } = props;
  const schedulesByDay = schedulesByDate(schedules);
  const reservationsByDay = reservationsByDate(reservations);

  return (
    <Container>
      {Object.keys(schedulesByDay).map((date) => (
        <ScheduleContainer key={date}>
          {getDateString(parseInt(date, 10))}
          <ScheduleByDay
            schedule={schedulesByDay[date]}
            reservations={reservationsByDay[date] ?? []}
          />
        </ScheduleContainer>
      ))}
    </Container>
  );
};
