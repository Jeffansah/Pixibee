"use client";

import { useEffect, useState } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const SearchForm = ({ initialSearch }: { initialSearch: string }) => {
  const [tagName, setTagName] = useState(initialSearch ?? "");

  useEffect(() => setTagName(initialSearch), [initialSearch]);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="tag-name" className="text-right">
        Search By Tag
      </Label>
      <div className="flex gap-2 items-center mt-2">
        <Input
          onChange={(e) => setTagName(e.target.value)}
          id="tag-name"
          value={tagName}
          placeholder="Enter a photo description"
          className="w-60"
        />
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default SearchForm;
