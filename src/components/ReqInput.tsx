import React, { useEffect, useState } from "react";
import {
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const ReqInput = () => {
  const methods: Method[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];
  const [currentMethod, setCurrentMethod] = useState<Method>("GET");
  const [URL, setURL] = useState<string>("");

  const onSubmit = (e: Event | any) => {
    e.preventDefault();
    console.log(currentMethod);
    console.log(URL);
    const method: any = currentMethod.toLowerCase();
    axios({ method, url: URL }).then((res) => console.log(res.data));
  };

  return (
    <form onSubmit={onSubmit}>
      <HStack>
        <InputGroup minWidth={300} maxWidth={800}>
          <InputLeftAddon paddingX={0}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {currentMethod}
              </MenuButton>
              <MenuList>
                {methods.map((method) => (
                  <MenuItem
                    key={method}
                    onClick={() => setCurrentMethod(method)}
                  >
                    {method}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </InputLeftAddon>
          <Input
            value={URL}
            onChange={(e) => setURL(e.target.value)}
            type="text"
            placeholder="URL"
          />
        </InputGroup>
        <Button type="submit" colorScheme="teal" width={100}>
          Send
        </Button>
      </HStack>
    </form>
  );
};

export default ReqInput;
