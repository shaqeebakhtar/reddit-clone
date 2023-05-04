import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/src/firebase/clientApp";
import { useEffect } from "react";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const OAuthButtons = () => {
  const [signInWithGoogle, userCred, loading, authError] =
    useSignInWithGoogle(auth);

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);

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
