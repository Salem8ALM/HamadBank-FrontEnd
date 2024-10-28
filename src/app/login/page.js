"use client";

import { login } from "@/api/actions/auth";
import React, { startTransition } from "react";
import Input from "@/components/Input";

import { loginWithValidation } from "@/api/actions/auth";
import { useState, useActionState } from "react";

function LoginPage() {
  const [state, action] = useActionState(loginWithValidation, undefined);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    console.log(username, password);

    startTransition(async () => {
      const validationResult = await action(formData);
    });

    console.log(formData);

    await login(username, password);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-52 gap-4 m-auto pt-56"
      >
        <Input
          className="p-2 rounded-md"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {state?.errors?.name && <p>{state.errors.name}</p>}
        <Input
          className="p-2 rounded-md"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
