import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type GameCardContainerProps = {
  children: ReactNode;
};

export const GameCardContainer: FC<GameCardContainerProps> = ({ children }) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};
