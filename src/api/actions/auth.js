"use server";

import { redirect } from "next/navigation";
import { baseUrl, getHeaders } from "./config";
import { deleteToken, setToken } from "@/lib/token";

import { UserSchema } from "@/lib/definitions";

export async function login(username, password) {
  const userData = { username, password };
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });
  const { token } = await response.json();

  await setToken(token);
  console.log(token);

  redirect("/");
}

export async function register(formData) {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.token) {
    await setToken(data.token);
    console.log(data.token);
    redirect(`/login`);
  } else {
    console.log("Registration failed:", data);
  }
}

export async function logout() {
  await deleteToken();
  redirect(`/`);
}

//Responsible to get all users and list them in users page
export async function getAllUsers() {
  const response = await fetch(`${baseUrl}/auth/users`, {
    method: "GET",
    headers: await getHeaders(),
  });

  const users = await response.json();
  return users;
}

//Responsible to get userId Note=>> still working on it
export async function getUserById(userId) {
  const response = await fetch(`${baseUrl}/auth/user/${userId}`, {
    method: "GET",
    headers: await getHeaders(),
  });

  if (!response.ok) {
    console.error(`Error fetching user: ${response.statusText}`);
    return null;
  }

  const data = await response.json();
  console.log("Response data from API:", data); // Check the data structure here
  return data.user || data;
}

//Responsible to get profile
export async function getProfile() {
  const response = await fetch(`${baseUrl}/auth/me`, {
    method: "GET",
    headers: await getHeaders(),
  });

  const data = await response.json();

  return data;
}

//Responsible to update the user profile image
export async function updateProfile(image) {
  const formData = new FormData();
  formData.append("image", image);

  const headers = await getHeaders();

  // Remove Content-Type to let fetch set it for FormData
  headers.delete("Content-Type");

  const response = await fetch(`${baseUrl}/auth/profile`, {
    method: "PUT",
    headers,
    body: formData,
  });

  const updatedUser = await response.json();
  return updatedUser;
}

//Responsible to get user(me) transactions
export async function myTransactions() {
  const headers = await getHeaders();
  const response = await fetch(`${baseUrl}/transactions/my`, {
    method: "GET",
    headers: headers,
  });

  return await response.json();
}

export async function signupWithValidation(state, formData) {
  // Validate form fields
  const validatedFields = UserSchema.safeParse({
    name: formData.get("username"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
  register(formData);
}

export async function loginWithValidation(state, formData) {
  // Validate form fields
  const validatedFields = UserSchema.safeParse({
    name: formData.get("username"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
  login(formData);
}

// export async function withdraw(amount) {
//   const response = await fetch(`${baseUrl}/transactions/withdraw`, {
//     method: "PUT",
//     body: amount,
//   });
// }

export async function withdraw(amount) {
  try {
    const response = await fetch(`${baseUrl}/transactions/withdraw`, {
      method: "PUT",
      headers: await getHeaders(),
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      // Handle HTTP errors
      const errorData = await response.json();
      throw new Error(errorData.message || "Withdrawal failed");
    }
    //MAKE IT TO HANDLE IF THEY ARE ZERO BALNCE

    const data = await response.json();
    return data; // This could be success data, like new balance, etc.
  } catch (error) {
    console.error("Error during withdrawal:", error.message);
    throw error; // Rethrow error if you need to handle it in the calling function
  }
}

export async function addDeposit(amount) {
  const response = await fetch(`${baseUrl}/transactions/deposit`, {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify({ amount }),
  });
}
