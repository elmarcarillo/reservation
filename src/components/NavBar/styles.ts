import styled from "styled-components";
import { colors, spacing } from "../../styles";

export const Container = styled.div`
  background: ${colors.white};
  border-top: 1px solid ${colors.grayDark};
  height: ${spacing.triple};
  position: sticky;
  bottom: 0;
  display: flex;
  gap: ${spacing.single};
  padding: ${spacing.half};
  align-items: center;
`;

export const DropdownContainer = styled.div``;

export const Dropdown = styled.select`
  padding: ${spacing.quarter} ${spacing.single};
  border-radius: ${spacing.half};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  & > :first-child {
    border-top-left-radius: ${spacing.half};
    border-bottom-left-radius: ${spacing.half};
  }
  & > :last-child {
    border-top-right-radius: ${spacing.half};
    border-bottom-right-radius: ${spacing.half};
  }
`;

export const ToggleButton = styled.button<{ $isSelected?: boolean }>`
  border: none;
  outline: none;
  height: 100%;
  flex: 1;
  ${({ $isSelected }) => `
    background: ${$isSelected ? colors.gray : colors.grayLight};
  `};
`;
