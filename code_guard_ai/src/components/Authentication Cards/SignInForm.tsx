import {
  Box,
  Stack,
  Input,
  Button,
  Heading,
  Link,
  Field,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInData } from "./schemas";
import { PasswordInput } from "../ui/password-input";
import type { UserFromFields } from "../../services/FirebaseManager";
import GoogleButton from "./GoogleButton";
interface Props {
  onSwitch: () => void;
  onSignIn: (user: UserFromFields) => void;
  onGoogleAuth: () => void;
}

function SignInForm({ onSwitch, onSignIn, onGoogleAuth }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({ resolver: zodResolver(signInSchema) });

  const submit = (data: SignInData) => {
    console.log("sign-in", data);
    if (true) {
      let username = "Example";
      onSignIn({ displayName: username, email: data.email, password: data.password });
    }
  };

  return (
    <Box
      border="solid"
      borderRadius={10}
      rounded="2xl"
      shadow="lg"
      p={8}
      as="form"
      onSubmit={handleSubmit(submit)}
    >
      <Stack gap="4">
        <Heading size="2xl" textAlign="center">
          Sign In
        </Heading>
        <Field.Root invalid={Boolean(errors.email)} required>
          <Field.Label>
            Email
            <Field.RequiredIndicator />
          </Field.Label>
          <Input variant="subtle" type="email" {...register("email")} />
          {errors.email && (
            <Field.ErrorText>{errors.email.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={Boolean(errors.password)} required>
          <Field.Label>
            Password
            <Field.RequiredIndicator />
          </Field.Label>
          <PasswordInput variant="subtle" {...register("password")} />
          {errors.password && (
            <Field.ErrorText>{errors.password.message}</Field.ErrorText>
          )}
        </Field.Root>
        <GoogleButton onClicked={onGoogleAuth} />

        <Button
          alignSelf="center"
          type="submit"
          fontSize="18px"
        >
          Sign in
        </Button>
        <Link color="blue.400" alignSelf="center" onClick={onSwitch}>
          Don't have an account? Sign Up
        </Link>
      </Stack>
    </Box>
  );
}

export default SignInForm;
