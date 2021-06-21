import React from "react";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
const ConfigTabs = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Params</Tab>
        <Tab>Headers</Tab>
        <Tab>Body</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Params</TabPanel>
        <TabPanel>Headers</TabPanel>
        <TabPanel>Body</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ConfigTabs;
