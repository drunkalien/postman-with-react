import React, {
  useEffect,
  useContext,
  useLayoutEffect,
  SyntheticEvent,
  useCallback,
  useMemo,
} from "react";
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
  Button,
} from "@chakra-ui/react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

import QueryParamContext from "../Contexts/QueryParamContext";
import qs from "qs";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useState } from "react";

type Props = {
  tableCaption: string;
};

type QsObject = {
  key?: string;
  value?: string;
};

type FormData = {
  params: QsObject[];
};

const InputTable = ({ tableCaption }: Props) => {
  const { setQuery } = useContext(QueryParamContext);
  const [qsObject, setQsObject] = useState<QsObject>({});
  const [qstring, setQstring] = useState<string>("");
  const [rerender, causeRerender] = useState(0);
  const { control, getValues } = useForm<FormData>({
    defaultValues: { params: [{ key: "", value: "" }] },
  });
  const { append, remove, fields } = useFieldArray<any>({
    control,
    name: "params",
    shouldUnregister: true,
  });

  function createQsObject(e: SyntheticEvent) {
    e.preventDefault();
    const params = getValues().params;
    setQsObject({});
    params.forEach((p) => {
      setQsObject((prev) => {
        return { ...prev, [`${p.key}`]: p.value };
      });
    });
    causeRerender(rerender + 1);
    console.log(qsObject);
  }

  useEffect(() => setQuery(qsObject), [rerender]);

  console.log(qstring);

  return (
    <form>
      <Table varian="simple">
        <TableCaption>{tableCaption}</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Key</Th>
            <Th>Value</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {fields.map((field, index) => {
            return (
              <Tr key={field.id}>
                <Td>
                  <Checkbox defaultChecked></Checkbox>
                </Td>
                <Td>
                  <Controller
                    control={control}
                    name={`params.${index}.key`}
                    defaultValue={""}
                    render={({ field: f }) => <Input variant="filled" {...f} />}
                  />
                </Td>
                <Td>
                  <Controller
                    control={control}
                    name={`params.${index}.value`}
                    defaultValue={""}
                    render={({ field: f }) => <Input variant="filled" {...f} />}
                  />
                </Td>
                <Td>
                  <Button
                    marginRight={2}
                    type="button"
                    onClick={() => remove(index)}
                  >
                    {<DeleteIcon />}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => append({ key: "", value: "" })}
                    marginLeft={2}
                  >
                    <AddIcon fontSize="medium" />
                  </Button>
                </Td>
              </Tr>
            );
          })}
          <Tr>
            <Td></Td>
            <Td>
              <Button
                colorScheme="teal"
                type="submit"
                onClick={(e) => createQsObject(e)}
              >
                Set params to URL
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </form>
  );
};

export default InputTable;
