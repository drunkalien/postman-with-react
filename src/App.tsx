import React from "react";
import ConfigTabs from "./components/ConfigTabs";
import ReqInput from "./components/ReqInput";
import { Stack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Stack spacing={4} margin={4}>
        <ReqInput />
        <ConfigTabs />
      </Stack>
    </div>
  );
}

export default App;
