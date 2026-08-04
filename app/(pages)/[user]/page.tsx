import { getGithubUser } from "@/app/hooks/useGithub";

export default async function UserPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;

  const { name, bio, followers, following, avatar_url } =
    await getGithubUser(user);

  return (
    <main>
      <h1>Name: {name}</h1>
      <h1>Bio: {bio}</h1>
      <h1>Followers: {followers}</h1>
      <h1>Followings: {following}</h1>
      <img src={avatar_url} />
    </main>
  );
}
