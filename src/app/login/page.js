import { login } from "@/api/actions/auth";
import React from "react";
import Input from "@/components/Input";
function LoginPage() {
  return (
    <div className="">
      <form action={login} className="flex flex-col w-52 gap-4 m-auto pt-56">
        <Input
          className="p-2 rounded-md"
          type="text"
          placeholder="Username"
          name="username"
          required
        />
        <Input
          className="p-2 rounded-md"
          type="text"
          placeholder="Password"
          name="password"
          required
        />
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
