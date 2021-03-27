import React from "react";

import { IoMdClose, IoMdCheckmark } from "react-icons/io";

import { Container, Text } from "./styles";

function Answer({ data }) {
  return (
    <Container>
      <Text>
        {data.user_answer === data.correct_answer ? (
          <IoMdCheckmark style={{ marginRight: 10 }} />
        ) : (
          <IoMdClose style={{ marginRight: 10 }} />
        )}

        {data.question}
      </Text>
    </Container>
  );
}

export default Answer;
