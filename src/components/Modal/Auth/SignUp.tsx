import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const SignUp = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, authError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (error) setError("");
    if (signupForm.password !== signupForm.confirmPassword) {
      setError("Password and confirm password didn't match!");
      return;
    }
    createUserWithEmailAndPassword(signupForm.email, signupForm.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        type="email"
        name="email"
        placeholder="Email"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        onChange={(e) => handleChange(e)}
      />
      <Input
        required
        type="password"
        name="password"
        placeholder="Password"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        onChange={(e) => handleChange(e)}
      />
      <Input
        required
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        onChange={(e) => handleChange(e)}
      />
      {error && (
        <Text textAlign="center" color="red" fontSize="12">
          {error}
        </Text>
      )}
      <Button
        type="submit"
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight="700"
          textDecoration="underline"
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};

export default SignUp;
