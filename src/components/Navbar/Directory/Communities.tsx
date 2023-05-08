import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import CreateCommunityModal from "../../Modal/CreateCommunityModal/CreateCommunityModal";
import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { communityState } from "@/src/atoms/communitiesAtom";
import MenuListItem from "./MenuListItem";
import { FaReddit } from "react-icons/fa";
import { Sniglet } from "next/font/google";

const Communities = () => {
  const [open, setOpen] = useState(false);
  const snippets = useRecoilValue(communityState).snippets;

  console.log(snippets);

  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <Box mt={3} mb={3}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
          Moderating
        </Text>
        {snippets
          .filter((snippet) => snippet.isModerator)
          .map((snippet) => {
            return (
              <MenuListItem
                key={snippet.communityId}
                icon={FaReddit}
                displayText={`r/${snippet.communityId}`}
                link={`/r/${snippet.communityId}`}
                iconColor="brand.100"
                imageUrl={snippet.imageUrl}
              />
            );
          })}
      </Box>
      <Box mt={3} mb={3}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
          My Communities
        </Text>
        <MenuItem
          width="100%"
          fontSize="10pt"
          _hover={{ bg: "gray.100" }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Flex align="center">
            <Icon as={GrAdd} fontSize={20} mr={2} />
            Create Community
          </Flex>
        </MenuItem>
        {snippets.map((snippet) => {
          return (
            <MenuListItem
              key={snippet.communityId}
              icon={FaReddit}
              displayText={`r/${snippet.communityId}`}
              link={`/r/${snippet.communityId}`}
              iconColor="blue.500"
              imageUrl={snippet.imageUrl}
            />
          );
        })}
      </Box>
    </>
  );
};

export default Communities;
