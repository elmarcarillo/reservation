import styled from "styled-components";
import { colors, spacing } from "../../styles";

export const Container = styled.div`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.grayDark};
  height: ${spacing.triple};
  position: sticky;
  top: 0;
  display: flex;
  gap: ${spacing.single};
  padding: ${spacing.half};
`;

export const Dropdown = styled.select`
  padding: ${spacing.quarter} ${spacing.single};
  border-radius: ${spacing.half};
`;
