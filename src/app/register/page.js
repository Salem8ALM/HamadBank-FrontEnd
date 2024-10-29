"use client";
import { validateRegisterForm } from "@/api/actions/auth";
import Input from "@/components/Input";
import React, { useState, startTransition } from "react";

import { useActionState, useFormStatus } from "react";

// register page
function Register() {
  const [state, action, isPending] = useActionState(
    validateRegisterForm,
    undefined
  );

  return (
    <div className="">
      <form
        // onSubmit={handleSubmit}
        action={action}
        className="flex flex-col w-52 gap-4 m-auto pt-56"
      >
        <Input
          className="p-2 rounded-md"
          type="text"
          placeholder="Username"
          name="username"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          required
        />
        {state?.errors?.name && <p>{state.errors.name}</p>}
        <Input
          className="p-2 rounded-md"
          type="password"
          placeholder="Password"
          name="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
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
        <input
          className=""
          name="image"
          type="file"
          // onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button
          className={`${
            isPending ? "bg-gray-600" : "bg-[--foreground]"
          } text-[--background] w-[50%] m-auto rounded-md `}
          type="submit"
          disabled={isPending}
        >
          Register
        </button>
        {isPending && <p>Please wait...</p>}
      </form>
    </div>
  );
}

export default Register;
