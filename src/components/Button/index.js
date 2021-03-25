import React from "react";

import Loader from "react-loader-spinner";

import colors from "~/styles/colors";

import { Container } from "./styles";

function Button({ children, loading = false, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <Loader
          type="ThreeDots"
          color={colors.tertiary}
          height={10}
          width={100}
        />
      ) : (
        children
      )}
    </Container>
  );
}

export default Button;
