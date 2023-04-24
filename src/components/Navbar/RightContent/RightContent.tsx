import { Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../Modal/Auth/AuthModal";

type Props = {};

const RightContent = (props: Props) => {
  return (
    <>
      <Flex justify="center" align="center">
        <AuthModal />
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
