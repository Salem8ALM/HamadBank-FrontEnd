import { getAllUsers } from "@/api/actions/auth";
import UserList from "@/components/UserList";
//User page
async function User() {
  const users = await getAllUsers();

  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default User;
