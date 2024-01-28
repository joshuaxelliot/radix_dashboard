import React from "react";
import { Card, Text, Table, Avatar, Box } from "@radix-ui/themes";

export default function DashTable() {
  return (
    <Card className="p-4 bg-white rounded-lg mb-5">
      <Box mb="2">
        <Text className="text-lg font-bold" mb="5">
          Recent Sales
        </Text>
      </Box>
      <Table.Root className="w-full">
        <Table.Body>
          <Table.Row className="border-b">
            <Table.RowHeaderCell className="p-2">
              <Avatar src="https://ui.shadcn.com/avatars/01.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell className="p-2">
              <Text className="font-bold">Olivia Martin</Text>
              <br />
              <Text className="text-xs">olivia.martin@email.com</Text>
            </Table.Cell>
            <Table.Cell className="p-2">
              <Text className="font-bold text-xl">+$1,999.00</Text>
            </Table.Cell>
          </Table.Row>

          <Table.Row className="border-b">
            <Table.RowHeaderCell className="p-2">
              <Avatar src="https://ui.shadcn.com/avatars/02.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell className="p-2">
              <Text className="font-bold">Jackson Lee</Text>
              <br />
              <Text className="text-xs">jackson.lee@email.com</Text>
            </Table.Cell>
            <Table.Cell className="p-2">
              <Text className="font-bold text-xl">+$39.00</Text>
            </Table.Cell>
          </Table.Row>

          <Table.Row className="border-b">
            <Table.RowHeaderCell className="p-2">
              <Avatar src="https://ui.shadcn.com/avatars/03.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell className="p-2">
              <Text className="font-bold">Isabella Nguyen</Text>
              <br />
              <Text className="text-xs">isabella.nguyen@email.com</Text>
            </Table.Cell>
            <Table.Cell className="p-2">
              <Text className="font-bold text-xl">+$299.00</Text>
            </Table.Cell>
          </Table.Row>

          <Table.Row className="border-b">
            <Table.RowHeaderCell className="p-2">
              <Avatar src="https://ui.shadcn.com/avatars/04.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell className="p-2">
              <Text className="font-bold">William Kim</Text>
              <br />
              <Text className="text-xs">will@email.com</Text>
            </Table.Cell>
            <Table.Cell className="p-2">
              <Text className="font-bold text-xl">+$99.00</Text>
            </Table.Cell>
          </Table.Row>

          <Table.Row className="border-b">
            <Table.RowHeaderCell className="p-2">
              <Avatar src="https://ui.shadcn.com/avatars/05.png" fallback="A" />
            </Table.RowHeaderCell>
            <Table.Cell className="p-2">
              <Text className="font-bold">Sofia Davis </Text>
              <br />
              <Text className="text-xs">sofia.davis@email.com</Text>
            </Table.Cell>
            <Table.Cell className="p-2">
              <Text className="font-bold text-xl">+$39.00</Text>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Card>
  );
}