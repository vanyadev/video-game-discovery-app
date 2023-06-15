import { Box, Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type DefinitionItemProps = {
  term: string;
  children: ReactNode | ReactNode[];
};

export const DefinitionItem: FC<DefinitionItemProps> = ({ term, children }) => {
  return (
    <Box my={5}>
      <Heading as="dt" fontSize="medium" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};
