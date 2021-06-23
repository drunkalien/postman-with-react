import React, { useState } from "react";
import ConfigTabs from "./components/ConfigTabs";
import ReqInput from "./components/ReqInput";
import { Stack } from "@chakra-ui/react";

import QueryParamContext from "./Contexts/QueryParamContext";

function App() {
  const [query, setQuery] = useState({});
  return (
    <div className="App">
      <QueryParamContext.Provider value={{ query, setQuery }}>
        <Stack spacing={4} margin={4}>
          <ReqInput />
          <ConfigTabs />
        </Stack>
      </QueryParamContext.Provider>
    </div>
  );
}

export default App;
