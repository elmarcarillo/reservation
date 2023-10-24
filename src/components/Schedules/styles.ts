import styled from "styled-components";
import { fontSize, spacing } from "../../styles";

export const Container = styled.div`
  display: flex;
  gap: ${spacing.single};
  flex: 1;
  overflow: scroll;
  padding: ${spacing.half};
`;

export const ScheduleContainer = styled.div`
  display: flex;
  gap: ${spacing.single};
  flex-direction: column;
`;

export const Date = styled.div`
  font-size: ${fontSize.xs};
  font-weight: bold;
`;
