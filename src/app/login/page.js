"use client";

import React, { startTransition } from "react";
import Input from "@/components/Input";

import { validateLoginForm } from "@/api/actions/auth";
import { useActionState } from "react";
import Image from "next/image";

import loginImage from "@/assets/loginImg.jpg";

function LoginPage() {
  const [state, action, isPending] = useActionState(
    validateLoginForm,
    undefined
  );

  return (
    <div className="">
      <form action={action} className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex md:flex-cols-reverse md:h-[40rem] md:w-screen md:flex-rows">
            <div className="w-screen md:w-2/5 bg-grey-200 p-10 md:p-28 md:pr-98 md:pl-90 bg-white">
              <h1 className="text-2xl">Login to your</h1>
              <h1 className="text-2xl">
                <strong>Online Banking account</strong>
              </h1>
              <p className="text-xs pt-4">Username</p>
              <Input
                className="p-2 rounded-md"
                type="text"
                placeholder="Username"
                name="username"
                required
              />
              {state?.errors?.name && <p>{state.errors.name}</p>}
              <p className="text-xs pt-4">Password</p>
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
              {state?.error && (
                <div>
                  <p>{state.error}</p>
                </div>
              )}
              <div className="pt-4">
                <button
                  className="bg-red-600 hover:bg-red-800 transition duration-200 text-white w-[100%] m-auto rounded-md p-2"
                  type="submit"
                >
                  {isPending ? "Logging in..." : "Login"}
                </button>
              </div>

              <div className="p-2">
                <p>
                  New user?{" "}
                  <a href="./register">
                    <span className="text-red-400 hover:text-red-800 transition duration-200">
                      Register now
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="md:w-3/5 bg-red-200 relative h-full overflow-hidden group">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

              <Image
                src={loginImage}
                layout="fill" // Enables the image to fill the parent div
                objectFit="cover" // Ensures the image covers the div while keeping its aspect ratio
                alt="Image for Innovate today for the future"
                className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
