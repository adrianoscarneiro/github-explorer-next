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
        className="w-1/3 h-10 border-s-2 outline-none rounded-e-2xl"
      />
    </form>
  );
}

export default SearchBar;
