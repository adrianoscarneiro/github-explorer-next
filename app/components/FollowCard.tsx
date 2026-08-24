/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

export default function FollowCard({
  username,
  avatar_url,
}: {
  username: string;
  avatar_url?: string;
}) {
  return (
    <div className="min-w-20 rounded-2xl bg-foreground border-2 py-2">
      <Link
        href={`./${username}`}
        className="flex flex-col gap-1 place-items-center"
      >
        <img
          src={avatar_url ?? null}
          alt={`This is ${username}'s avatar`}
          width={50}
          height={50}
          className="rounded-full"
          loading="lazy"
          decoding="async"
        />
        <p className="w-20 text-secondary-text self-center truncate">
          {username.toLowerCase()}
        </p>
      </Link>
    </div>
  );
}
