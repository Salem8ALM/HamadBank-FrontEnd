"use client";
import { register, signupWithValidation } from "@/api/actions/auth";
import Input from "@/components/Input";
import React, { useState } from "react";

import { useFormState, useFormStatus } from "react-dom";

// register page
function Register() {
  const [state, action] = useFormState(signupWithValidation, undefined);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    if (image) {
      formData.append("image", image);
    }

    await register(formData);
  };

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
        <input
          className=""
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button
          className="bg-[--foreground] text-[--background] w-[50%] m-auto rounded-md"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
