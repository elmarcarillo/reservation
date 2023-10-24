import styled from "styled-components";
import { spacing } from "../../styles";

export const Container = styled.div`
  display: flex;
  gap: ${spacing.half};
`;

export const ScheduleContainer = styled.div`
  display: flex;
  gap: ${spacing.single};
  flex-direction: column;
`;
