"use client";

import { login } from "@/api/actions/auth";
import React from "react";
import Input from "@/components/Input";

import { loginWithValidation } from "@/api/actions/auth";
import { useFormState, useFormStatus } from "react-dom";

function LoginPage() {
  const [state, action] = useFormState(loginWithValidation, undefined);

  return (
    <div className="">
      <form action={action} className="flex flex-col w-52 gap-4 m-auto pt-56">
        <Input
          className="p-2 rounded-md"
          type="text"
          placeholder="Username"
          name="username"
          required
        />
        {state?.errors?.name && <p>{state.errors.name}</p>}
        <Input
          className="p-2 rounded-md"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="bg-[--foreground] text-[--background] w-[50%] m-auto rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
