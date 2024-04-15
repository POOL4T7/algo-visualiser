import { Box, Button, Container, Flex, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";

const Sudoku = () => {
  const [matrix, setMatrix] = useState(() => {
    return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => ""));
  });

  const changeCellValue = (value, i, j) => {
    if (value <= "0" && value >= "9") {
      alert("Invalid Input");
      return;
    }
    const newMatrix = matrix.map((row) => [...row]);
    newMatrix[i][j] = value.toString();
    setMatrix(newMatrix);
    console.log("matrix", i, j);
  };
  return (
    <Container padding={0} maxW={"456px"}>
      <Heading margin={"10px"}>Sudoku</Heading>
      <Box
        className="main-box"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
        justifyContent={"cenetr"}
      >
        {matrix.map((mat, i) => {
          return (
            <Flex key={i} className="1 first_inner_box" wrap={"wrap"}>
              {mat.map((_, j) => {
                return (
                  <Flex
                    key={Math.random() * 100}
                    className="inner_box"
                    align={"center"}
                    justify={"center"}
                  >
                    <Input
                      type="number"
                      min={1}
                      max={9}
                      value={matrix[i][j]}
                      onChange={(e) => changeCellValue(e.target.value, i, j)}
                    />
                  </Flex>
                );
              })}
            </Flex>
          );
        })}
      </Box>
      <Flex justify={"center"}>
        <Button variant={"solid"} margin={10}>
          Solve
        </Button>
      </Flex>
    </Container>
  );
};

export default Sudoku;
