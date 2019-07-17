/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import styled from 'styled-components';
import { Box } from 'grommet';

export const LeaderboardLayout = styled(Box)`
  height: 100vh;
  .outer {
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .it-monster-container {
    @media (orientation: landscape) {
      position: absolute;
      right: 0;
      top: calc(100vh - 250px);
    }
  }
  .middle {
    display: table-cell;
    vertical-align: middle;
  }
  .inner {
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
  }
  .highscore-title {
    font-family: "ArcadeClassic";
    font-size: 100px;
    text-shadow: 4px 4px #E08328;
    @media (orientation: landscape) {
      font-size: 60px;
    }
  }
  .title-container {
    margin-bottom: 105px;
    @media (orientation: landscape) {
      margin-top: 23px;
      margin-bottom: 23px;
    }
  }
  .highscore-text {
    font-family: "ArcadeClassic";
    font-size: 50px;
    @media (orientation: landscape) {
      font-size: 35px;
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
`;

export default LeaderboardLayout;
