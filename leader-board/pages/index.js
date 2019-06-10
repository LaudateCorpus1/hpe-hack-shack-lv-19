/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from 'react';
import { Grommet } from 'grommet';
import theme from '../components/StyledComponents/theme';
import LeaderboardNew from './leaderboardnew';
import Sessions from './sessions';

const Home = () => (
  <Grommet full theme={theme}>
    <Sessions />
  </Grommet>
);

export default Home;
