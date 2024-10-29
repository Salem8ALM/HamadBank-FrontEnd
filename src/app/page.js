import { getProfile } from "@/api/actions/auth";
import HomePage from "@/components/HomePage";
import LoggedHomePage from "@/components/loggedHomePage";
import { getUser } from "@/lib/token";

export default async function Home() {
  const user = await getUser();

  // const user = await getProfile();

  return (
    <>
      {!user && <HomePage />}
      {user && <LoggedHomePage user={user} />}
    </>
  );
}
