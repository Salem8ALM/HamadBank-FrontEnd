import { getProfile } from "@/api/actions/auth";
import HomePage from "@/components/HomePage";
import LoggedHomePage from "@/components/LoggedHomePage";
import { getUser } from "@/lib/token";

export default async function Home() {
  const user1 = await getUser();

  return (
    <>
      {!user1 && <HomePage />}
      {user1 && <LoggedHomePage />}
    </>
  );
}
