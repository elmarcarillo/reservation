import styled from "styled-components";
import { fontSize, spacing } from "../../../styles";

export const Container = styled.div``;

export const TimeSlot = styled.div<{ $isAvailable?: boolean }>`
  min-height: ${spacing.double};
  font-size: ${fontSize.sm};
  border-bottom: 1px solid #aaa;
  padding: ${spacing.half};

  ${({ $isAvailable = false }) => {
    if (!$isAvailable) {
      return `
        background: #eee;
        color: #aaa;
      `;
    }
    return ``;
  }};
`;
