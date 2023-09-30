"use client";

import Link from "next/link";
import { Button } from "./button";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HeartIcon,
  PhotoIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { usePathname } from "next/navigation";

const SideMenuTabs = ({
  folders,
}: {
  folders: { name: string; path: string }[];
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        asChild
        variant={`${pathname.includes("/gallery") ? "secondary" : "ghost"}`}
        className="w-full justify-start flex gap-2"
      >
        <Link href={"/gallery"}>
          <PhotoIcon className="w-5 h-5" />
          Gallery
        </Link>
      </Button>
      <Button
        asChild
        variant={`${pathname.includes("/albums") ? "secondary" : "ghost"}`}
        className="w-full justify-start flex gap-2"
      >
        <div className="flex justify-between">
          <Link href={"/albums"} className="flex gap-2">
            <Squares2X2Icon className="w-5 h-5" />
            Albums
          </Link>
          {open ? (
            <ChevronUpIcon
              className="w-3 h-3 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <ChevronDownIcon
              className="w-3 h-3 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
      </Button>
      {folders.map(
        (folder) =>
          open && (
            <div className="flex flex-col mt-1">
              <p
                className={`text-xs pl-12 mb-2  hover:text-white focus:text-white cursor-pointer ${
                  pathname === `/albums/${folder.path}`
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                <Link href={`/albums/${folder.path}`}>{folder.name}</Link>
              </p>
            </div>
          )
      )}
      <Button
        asChild
        variant={`${pathname.includes("/favorites") ? "secondary" : "ghost"}`}
        className="w-full justify-start flex gap-2"
      >
        <Link href={"/favorites"}>
          <HeartIcon className="w-5 h-5" />
          Favorites
        </Link>
      </Button>
    </>
  );
};

export default SideMenuTabs;
