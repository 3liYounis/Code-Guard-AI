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
import { signUpSchema, type SignUpData } from "./schemas";
import { PasswordInput } from "../ui/password-input";
import type { UserFromFields } from "../../services/FirebaseManager";
import GoogleButton from "./GoogleButton";

interface Props {
  onSwitch: () => void;
  onSignUp: (user: UserFromFields) => void;
  onGoogleAuth: () => void;
}

function SignUpForm({ onSwitch, onSignUp, onGoogleAuth }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ resolver: zodResolver(signUpSchema) });

  const submit = (data: SignUpData) => {
    if (true) {
      onSignUp({ displayName: data.username, email: data.email, password: data.password });
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
      <Stack gap="5">
        <Heading size="2xl" textAlign="center" fontFamily="cursive">
          Sign Up
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
        <Field.Root invalid={Boolean(errors.username)} required>
          <Field.Label>
            Username
            <Field.RequiredIndicator />
          </Field.Label>
          <Input variant="subtle" {...register("username")} />
          {errors.username && (
            <Field.ErrorText>{errors.username.message}</Field.ErrorText>
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
        <Field.Root invalid={Boolean(errors.confirmPassword)} required>
          <Field.Label>
            Confirm password
            <Field.RequiredIndicator />
          </Field.Label>
          <PasswordInput variant="subtle" {...register("confirmPassword")} />
          {errors.confirmPassword && (
            <Field.ErrorText>{errors.confirmPassword.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Button
          alignSelf="center"
          type="submit"
          fontSize="18px"
          fontFamily="cursive"
        >
          Create account
        </Button>
        <GoogleButton onClicked={onGoogleAuth} />

        <Link color="blue.400" alignSelf="center" onClick={onSwitch}>
          Already registered? Sign In
        </Link>
      </Stack>
    </Box >
  );
}
export default SignUpForm;
