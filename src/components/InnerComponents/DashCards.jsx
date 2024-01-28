import { Flex, Text, Card, Grid } from "@radix-ui/themes";
import {
  GlobeIcon,
  PersonIcon,
  RocketIcon,
  SketchLogoIcon,
} from "@radix-ui/react-icons";

export default function DashCards() {
  return (
    <Grid columns="4" gap="5" width="auto">

      <Card size="3" className="DashCard bg-white p-4 rounded-lg">
        <Flex justify="between">
          <Text className="text-sm">Total Revenue</Text>
          <SketchLogoIcon className="w-6 h-6" />
        </Flex>
        <Flex direction="column" className="mt-2">
          <Text className="font-bold text-2xl">$45,231.89</Text>
          <Text className="text-xs">+20.1% from last month</Text>
        </Flex>
      </Card>
      <Card size="3" className="DashCard bg-white p-4 rounded-lg">
        <Flex justify="between">
          <Text className="text-sm">Subscriptions</Text>
          <PersonIcon className="w-6 h-6" />
        </Flex>
        <Flex direction="column" className="mt-2">
          <Text className="font-bold text-2xl">+2350</Text>
          <Text className="text-xs">+180.1% from last month</Text>
        </Flex>
      </Card>
      <Card size="3" className="DashCard bg-white p-4 rounded-lg">
        <Flex justify="between">
          <Text className="text-sm">Sales</Text>
          <RocketIcon className="w-6 h-6" />
        </Flex>
        <Flex direction="column" className="mt-2">
          <Text className="font-bold text-2xl">+12,234</Text>
          <Text className="text-xs">+19% from last month</Text>
        </Flex>
      </Card>
      <Card size="3" className="DashCard bg-white p-4 rounded-lg">
        <Flex justify="between">
          <Text className="text-sm">Active Now</Text>
          <GlobeIcon className="w-6 h-6" />
        </Flex>
        <Flex direction="column" className="mt-2">
          <Text className="font-bold text-2xl">+573</Text>
          <Text className="text-xs">+201 since last hour</Text>
        </Flex>
      </Card>

    </Grid>
  );
}
