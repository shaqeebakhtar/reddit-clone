import { authModalState } from "@/src/atoms/authModalAtom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";
import useDirectory from "@/src/hooks/useDirectory";

const Directory = () => {
  const { directoryState, toggleMenu } = useDirectory();

  return (
    <Menu isOpen={directoryState.isOpen}>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 2, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        onClick={toggleMenu}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            {directoryState.selectedMenuItem.imageUrl ? (
              <Image
                src={directoryState.selectedMenuItem.imageUrl}
                borderRadius="full"
                boxSize="24px"
                mr={2}
                alt={directoryState.selectedMenuItem.displayText}
              />
            ) : (
              <Icon
                as={directoryState.selectedMenuItem.icon}
                fontSize={24}
                mr={{ base: 1, md: 2 }}
                color={directoryState.selectedMenuItem.iconColor}
              />
            )}
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize={12}>
                {directoryState.selectedMenuItem.displayText}
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};

export default Directory;
