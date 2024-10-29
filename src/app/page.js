import HomePage from "@/components/HomePage";
import { getUser } from "@/lib/token";

export default async function Home() {
  const user = await getUser();

  return <>{!user && <HomePage />}</>;
}
