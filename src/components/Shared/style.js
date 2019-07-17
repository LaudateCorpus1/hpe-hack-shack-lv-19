/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */

import styled from 'styled-components';
import { Image } from 'grommet';

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  @media (orientation: landscape) {
    width: 450px;
  }
`;

export const StyledCard = styled(Image)`
  width: 100%;
  height: auto;
  @media (orientation: landscape) {
    height: 105vh;
    width: auto;
  }
`
