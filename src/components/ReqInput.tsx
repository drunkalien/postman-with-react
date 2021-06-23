import React, { useEffect, useState, useContext } from "react";
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
import QueryParamContext from "../Contexts/QueryParamContext";
import { useForm } from "react-hook-form";
import qs from "querystring";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const ReqInput = () => {
  const methods: Method[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];
  const [currentMethod, setCurrentMethod] = useState<Method>("GET");
  // TODO remove ts-ignore
  // @ts-ignore
  const { query } = useContext(QueryParamContext);

  const { register, getValues, setValue, handleSubmit } = useForm();
  const onSubmit = handleSubmit(({ url }) => {
    console.log(currentMethod);
    const method: any = currentMethod.toLowerCase();
    // axios({ method, url, params: query }).then((res) => console.log(res.data));
    axios({ method, url }).then((res) => console.log(res.data));
  });

  useEffect(() => {
    if (
      getValues().url.trim() !== "" &&
      !getValues().url.includes(qs.stringify(query as any))
    ) {
      setValue("url", `${getValues().url + "?" + qs.stringify(query as any)}`);
    }
  }, [query]);

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
          <Input {...register("url")} type="text" placeholder="URL" />
        </InputGroup>
        <Button type="submit" colorScheme="teal" width={100}>
          Send
        </Button>
      </HStack>
    </form>
  );
};

export default ReqInput;
