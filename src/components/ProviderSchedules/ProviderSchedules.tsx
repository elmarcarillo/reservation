import { ScheduleByDay } from "./ScheduleByDay";
import { Container } from "./styles";
import { ProviderScheduleProps } from "./types";
import { providerSchedulesByDate } from "./utils";

export const ProviderSchedules: React.FC<ProviderScheduleProps> = (props) => {
  const { schedules } = props;
  const schedulesByDay = providerSchedulesByDate(schedules);

  return (
    <Container>
      {Object.keys(schedulesByDay).map((date) => (
        <ScheduleByDay key={date} schedule={schedulesByDay[date]} />
      ))}
    </Container>
  );
};
