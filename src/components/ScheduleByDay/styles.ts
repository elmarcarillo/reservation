import styled from "styled-components";
import { colors, fontSize, spacing } from "../../styles";

export const Container = styled.div`
  min-width: 60px;
`;

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
    return `cursor: pointer;`;
  }};
`;

export const Content = styled.div<{
  $confirmed?: boolean;
  $hasReservation?: boolean;
  $hasOtherReservation?: boolean;
  $isSelected: boolean;
}>`
  height: ${spacing.double};
  border-radius: ${spacing.half};

  ${({
    $confirmed = false,
    $hasReservation = false,
    $hasOtherReservation = false,
    $isSelected = false,
  }) => {
    if ($hasReservation) {
      return `
        border: 1px solid ${colors.gray};
        background: ${colors.green};
        cursor: pointer;
        box-shadow: ${$isSelected ? `0 0 4px 2px rgba(0,0,0,0.4)` : `none`};
        font-weight: ${$confirmed ? "bold" : "normal"};
      `;
    } else if ($hasOtherReservation) {
      return `
        border: 1px solid ${colors.grayLight};
        background: ${colors.grayLight};
        cursor: pointer;`;
    }
    return `
      border: 1px solid transparent;
      `;
  }};
`;
