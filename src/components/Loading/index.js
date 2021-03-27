import React from "react";

import Loader from "react-loader-spinner";

import colors from "~/styles/colors";

// import { Container } from './styles';

function Loading() {
  return (
    <Loader type="ThreeDots" color={colors.tertiary} height={150} width={100} />
  );
}

export default Loading;
