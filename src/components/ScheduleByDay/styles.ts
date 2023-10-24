import styled from "styled-components";
import { colors, fontSize, spacing } from "../../styles";

export const Container = styled.div``;

export const TimeSlot = styled.div<{ $isAvailable?: boolean }>`
  font-size: ${fontSize.sm};
  border-bottom: 1px solid ${colors.gray};
  padding: ${spacing.quarter};

  ${({ $isAvailable = false }) => {
    if (!$isAvailable) {
      return `
        background: ${colors.grayLight};
        color: ${colors.gray};
      `;
    }
    return ``;
  }};
`;

export const Content = styled.div<{ $hasReservation?: boolean }>`
  height: ${spacing.double};
  border-radius: ${spacing.half};

  ${({ $hasReservation = false }) => {
    if ($hasReservation) {
      return `
        border: 1px solid ${colors.gray};
        background: ${colors.green};
      `;
    }
    return `
      border: 1px solid transparent;
      `;
  }};
`;
