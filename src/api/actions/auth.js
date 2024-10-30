"use server";

import { redirect } from "next/navigation";
import { baseUrl, getHeaders } from "./config";
import { deleteToken, getUser, setToken } from "@/lib/token";

import { LoginUserSchema, RegisterUserSchema } from "@/lib/definitions";
import { revalidatePath } from "next/cache";

export async function revalidateGivenPath(pathname) {
  revalidatePath(pathname);
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

export async function validateLoginForm(state, formData) {
  // Validate form fields
  const validatedFields = LoginUserSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // Login
  try {
    const userData = {
      username: validatedFields.data.username,
      password: validatedFields.data.password,
    };
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: await getHeaders(),
      body: JSON.stringify(userData),
    });
    const { token } = await response.json();

    await setToken(token);
    console.log(token);
  } catch (error) {
    return {
      error: error.message,
    };
  }
  redirect("/");
}

export async function validateRegisterForm(state, formData) {
  // Validate form fields
  const validatedFields = RegisterUserSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    image: formData.get("image"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // Register
  try {
    const response = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.token) {
      await setToken(data.token);
      console.log(data.token);
    } else {
      console.log("Registration failed:", data);
      return {
        error: data.error,
      };
    }
  } catch (error) {
    return {
      error: error.message,
    };
  }
  redirect(`/`);
}
export async function withdraw(amount) {
  try {
    const response = await fetch(`${baseUrl}/transactions/withdraw`, {
      method: "PUT",
      headers: await getHeaders(),
      body: JSON.stringify({ amount }),
    });

    console.log(response);

    if (!response.ok) {
      // Handle HTTP errors
      const errorData = await response.json();
      throw new Error(errorData);
    }
    //MAKE IT TO HANDLE IF THEY ARE ZERO BALNCE

    const data = await response.json();

    revalidatePath("/");

    return data;
  } catch (error) {
    console.error("Error during withdrawal:", error.message);
    throw error;
  }
}

export async function addDeposit(amount) {
  const response = await fetch(`${baseUrl}/transactions/deposit`, {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify({ amount }),
  });

  revalidatePath("/");
}

// Username is the user that the funds will be transerred to, the logged in user will transfer their funds
export async function transferFunds(amount, username) {
  const response = await fetch(`${baseUrl}/transactions/transfer/${username}`, {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify({ amount }),
  });
}
