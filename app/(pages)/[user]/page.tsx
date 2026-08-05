import UserCard from "@/app/components/UserCard";
import { getGithubUser } from "@/app/hooks/useGithub";

export default async function UserPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;

  const {
    name,
    bio,
    followers,
    following,
    avatar_url,
    location,
    public_repos,
    blog,
  } = await getGithubUser(user);

  return (
    <section className="flex flex-col place-items-center sm:my-4 py-6 px-4">
      <UserCard
        userDetails={{
          name,
          bio,
          followers,
          following,
          avatar_url,
          location,
          public_repos,
          blog,
        }}
        username={user}
      />
    </section>
  );
}
