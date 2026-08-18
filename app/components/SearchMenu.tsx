"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function SearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const value: string = inputRef.current?.value.trim();
    router.push(`./${value}`);
  }

  return (
    <form className="min-w-100 outline-2 rounded-2xl" onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchTxt"
        placeholder="Enter the username..."
        className="w-2/3 h-10 px-4 outline-none bg-none"
        autoComplete="off"
        ref={inputRef}
      />
      <input
        type="submit"
        value="Search"
        className="w-1/3 h-10 border-s-2 rounded-e-2xl bg-zinc-900
  border border-white/10
  shadow-sm
  hover:bg-zinc-800
  hover:border-white/20
  hover:shadow-[0_8px_24px_rgba(255,255,255,0.10)]
  transition-all"
      />
    </form>
  );
}

export default SearchBar;
