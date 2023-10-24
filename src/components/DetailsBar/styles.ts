import styled from "styled-components";
import { colors, fontSize, spacing } from "../../styles";

export const Container = styled.div`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.grayDark};
  position: sticky;
  top: 0;
  display: flex;
  gap: ${spacing.half};
  padding: ${spacing.half};
  flex-direction: column;
`;

export const Dropdown = styled.select`
  padding: ${spacing.quarter} ${spacing.half};
  border-radius: ${spacing.half};
`;

export const DropdownLabel = styled.span`
  font-size: ${fontSize.sm};
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.quarter};
`;

export const Button = styled.button`
  padding: ${spacing.quarter} ${spacing.single};
  border-radius: ${spacing.half};
`;

export const DropdownContainer = styled.div`
  display: flex;
  gap: ${spacing.single};
`;

export const ProviderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.single};
`;
