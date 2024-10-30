import { getProfile } from "@/api/actions/auth";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import LoggedHomePage from "@/components/loggedHomePage";
import { getUser } from "@/lib/token";

export default async function Home() {
  const user1 = await getUser();

  let user;
  if (user1) user = await getProfile();

  return (
    <>
      {!user1 && <HomePage />}
      {user1 && <LoggedHomePage />}
    </>
  );
}
