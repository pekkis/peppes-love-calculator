/** @jsx jsx */
import { FC } from "react";
import { jsx, Box, Flex, Text } from "theme-ui";

type Result = {
  percentage: number;
  calculating: boolean;
  calculated: boolean;
};

type Props = {
  result: Result;
};

const Results: FC<Props> = (props) => {
  const { result } = props;
  return (
    <Flex
      sx={{
        my: 3,
        placeContent: "center",
        height: "2em",
        fontSize: 3
      }}
    >
      <Box
        sx={{
          alignSelf: "center"
        }}
      >
        {result.calculated && (
          <Text>
            Match found:{" "}
            <span sx={{ fontWeight: "bold" }}>{result.percentage}%</span>
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default Results;
