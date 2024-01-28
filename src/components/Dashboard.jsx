import {
    Flex,
    Button,
    Box,
    Heading,
    Tabs,
    Badge,
    Grid,
  } from "@radix-ui/themes";
  import { Overview } from "./InnerComponents/Overview";
  import DashCards from "./InnerComponents/DashCards";
  import DashTable from "./InnerComponents/DashTable";

  
  export default function Dashboard() {
    return (
      <Box className="font-inter leading-6 font-normal mt-5">
        <Flex
          gap="3"
          justify="between"
          align="center"
          mb="4"
          className="flex-col xs:flex-row md:flex-row"
        >
          <Box>
            <Heading className="text-2xl">Dashboard</Heading>
          </Box>
          <Box className="flex items-center">
            <Button size="2" className="bg-black" ml="2">
              Download
            </Button>
          </Box>
        </Flex>
        <Tabs.Root defaultValue="overview">
          <Tabs.List className="mainmenu">
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          </Tabs.List>
  
          <Box my="7">
            <Tabs.Content value="overview">
              <DashCards />
              <Grid columns="2" gap="5" my="7" >
                <Box width="100%">
                  <Overview />
                </Box>
                <Box width="100%">
                  <DashTable />
                </Box>
              </Grid>
            </Tabs.Content>

          </Box>
        </Tabs.Root>
      </Box>
    );
  }
  

  