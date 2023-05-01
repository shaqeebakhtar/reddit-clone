import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const OAuthButtons = () => {
  const [signInWithGoogle, user, loading, authError] =
    useSignInWithGoogle(auth);

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/images/googlelogo.png"
          alt="google logo"
          height="20px"
          mr={4}
        />
        Continue with Google
      </Button>
      {authError && (
        <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
          {authError?.message}
        </Text>
      )}
    </Flex>
  );
};

export default OAuthButtons;
