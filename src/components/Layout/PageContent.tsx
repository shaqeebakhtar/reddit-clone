import { Flex } from "@chakra-ui/react";

type PageContentProps = {
  children: React.ReactNode[];
};

const PageContent = ({ children }: PageContentProps) => {
  return (
    <Flex justify="center" padding="16px 0">
      <Flex justify="center" width="95%" maxWidth="860px">
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children[0]}
        </Flex>

        <Flex
          direction="column"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
        >
          {children[1]}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContent;
