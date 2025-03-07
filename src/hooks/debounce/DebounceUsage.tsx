"use client";
import { useState } from "react";
import { useDebounce } from "./useDebounce";
import TextField from "@/components/text-fields/TextField";

function DebounceUsage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  return (
    <div className="flex flex-col gap-4 bg-black p-4 dark:bg-white">
      <TextField
        label="Search"
        id="search"
        name="search"
        inputMode="text"
        type="text"
        placeholder=""
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <p className="text-white dark:text-black">{debouncedSearch}</p>
    </div>
  );
}

export default DebounceUsage;
