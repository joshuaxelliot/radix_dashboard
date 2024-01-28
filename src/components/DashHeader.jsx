import React from "react";
import {
  Flex,
  Text,
  Box,
  Avatar,
  DropdownMenu,
  IconButton,
  Separator,
  TextField,
} from "@radix-ui/themes";
import {
  MagnifyingGlassIcon,
  CaretSortIcon,
  PlusCircledIcon,
  CheckIcon,
  LockOpen1Icon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export default function DashHeader() {
  return (
    <Box className="font-inter leading-6 font-normal mt-2">
      <Flex gap="3" justify="between" align="center">
        <Box width="20%">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Box className="cursor-pointer border-solid border-1 border-gray-300 rounded-5 p-2">
                <Flex gap="3" align="center">
                <PersonIcon className="w-6 h-6" />
                  <Box>
                    <Text as="div" size="2">
                      Joshua Jaup
                    </Text>
                  </Box>
                  <Box>
                    <CaretSortIcon />
                  </Box>
                </Flex>
              </Box>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <Text size="1">Personal Account</Text>
              <DropdownMenu.Item>
                Joshua Jaup <CheckIcon />
              </DropdownMenu.Item>
              <Separator />
              <Text size="1">Teams</Text>
              <DropdownMenu.Item>Acme AB</DropdownMenu.Item>
              <DropdownMenu.Item>Monster AB</DropdownMenu.Item>
              <Separator />
              <DropdownMenu.Item color="blue">
                Create team <PlusCircledIcon />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>

        <Box width="50%" className="hidden xs:block md:block mainmenu">
          <Flex gap="3" justify="start" align="center">
            <a href="#" className="active text-slate-400 hover:text-black">
              Overview
            </a>
            <a href="#" className="mainmenu text-slate-400 hover:text-black">
              Customers
            </a>
            <a href="#" className="mainmenu text-slate-400 hover:text-black">
              Products
            </a>
            <a href="#" className="mainmenu text-slate-400 hover:text-black">
              Settings
            </a>
          </Flex>
        </Box>

        <Box width="20%" className="hidden xs:hidden md:block">
          <TextField.Root>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input
              placeholder="Search the docs…"
              className="placeholder-gray-500"
            />
          </TextField.Root>
        </Box>

        <Box width="10%" className="hidden xs:hidden md:hidden">
          <IconButton className="burgermenu" mr="2">
            <MagnifyingGlassIcon width="18" height="18" />
          </IconButton>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton className="burgermenu">
                <HamburgerMenuIcon width="20" height="20" />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Overview</DropdownMenu.Item>
              <DropdownMenu.Item>Customers</DropdownMenu.Item>
              <DropdownMenu.Item>Products</DropdownMenu.Item>
              <DropdownMenu.Item>Settings</DropdownMenu.Item>
              <Separator />
              <DropdownMenu.Item>
                <Text as="div" size="2" weight="bold">
                  Joshua
                </Text>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Text as="div" size="1">
                  joshua.jaup@chasacademy.se
                </Text>
              </DropdownMenu.Item>
              <Separator />
              <DropdownMenu.Item>Profile</DropdownMenu.Item>
              <DropdownMenu.Item>Billing</DropdownMenu.Item>
              <Separator />
              <DropdownMenu.Item color="red">
                Log out
                <LockOpen1Icon />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>

        <Box width="10%" className="hidden xs:block md:block">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
            <PersonIcon className="w-6 h-6" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <Text size="2" weight="bold">
                Joshua
              </Text>
              <Text size="1">joshua.jaup@chasacademy.se</Text>
              <Separator />
              <DropdownMenu.Item>Profile</DropdownMenu.Item>
              <DropdownMenu.Item>Billing</DropdownMenu.Item>
              <DropdownMenu.Item>Settings</DropdownMenu.Item>
              <Separator />
              <DropdownMenu.Item color="red">
                Log out
                <LockOpen1Icon />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>
      <Separator my="3" size="4" />
    </Box>
  );
}


