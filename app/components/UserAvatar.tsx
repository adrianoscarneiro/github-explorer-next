import Image from "next/image";
import Link from "next/link";
export default function UserAvatar({
  username,
  avatar_url,
}: {
  username: string;
  avatar_url: string;
}) {
  return (
    <div className="flex sm:flex-col sm:place-items-center gap-1 text-center ">
      <Image
        src={avatar_url ?? null}
        alt={`This is ${username}'s avatar`}
        width={50}
        height={50}
        className="rounded-full"
      />
      <Link href={`./${username}`}>
        <p className="truncate">{username}</p>
      </Link>
    </div>
  );
}
