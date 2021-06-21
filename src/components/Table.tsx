import React, { useState, useEffect, useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Input,
  Checkbox,
} from "@chakra-ui/react";

import QueryParamContext from "../Contexts/QueryParamContext";

type Props = {
  tableCaption: string;
};

const InputTable = ({ tableCaption }: Props) => {
  const { query, setQuery } = useContext(QueryParamContext);

  function handleQueryChange(e: React.SyntheticEvent) {
    e.preventDefault();
    setQuery("?");
    setQuery(query + "&" + (e.target as HTMLTextAreaElement).value + "=");
  }

  return (
    <Table varian="simple">
      <TableCaption>{tableCaption}</TableCaption>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Key</Th>
          <Th>Value</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Checkbox defaultChecked></Checkbox>
          </Td>
          <Td>
            <Input onChange={handleQueryChange} />
          </Td>
          <Td>
            <Input />
          </Td>
          <Td>
            <Input />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default InputTable;
