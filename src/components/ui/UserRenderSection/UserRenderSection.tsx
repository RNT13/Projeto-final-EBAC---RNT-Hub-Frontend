import { Box } from "@/styles/globalStyles";
import UserIdCard from "../UserIdCard/UserIdCard";

interface UserRenderSection {
  title: string;
  data: User[];
}

export function UserRenderSection({ title, data }: UserRenderSection) {

  return (
    <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center"    >
      <h2>{title}</h2>

      {data.length === 0 && <p>Ninguém ainda 😢</p>}

      {data.map(user => (
        <UserIdCard key={user.id} users={user} />
      ))}
    </Box>
  );
}
