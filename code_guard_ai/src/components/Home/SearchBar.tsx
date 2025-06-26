import { Box, HStack, Input, InputGroup, InputElement } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SeartchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box
      width="100%"
      as="form"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup justifyContent="center">
        <HStack width="70%">
          <Input
            border="solid"
            borderRadius={20}
            ref={ref}
            placeholder="   Search"
          ></Input>
        </HStack>
      </InputGroup>
    </Box>
  );
};

export default SeartchInput;
