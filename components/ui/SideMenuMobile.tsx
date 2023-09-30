"use client";

import { Button } from "./button";
import {
  ChevronDownIcon,
  HeartIcon,
  PhotoIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import cloudinary from "cloudinary";

import { AlbumType } from "@/app/albums/page";
import SideMenuTabs from "./SideMenuTabs";
import { getFolders } from "@/app/server-actions/getFoldersAction";

const SideMenuMobile = ({
  open,
  folders,
}: {
  open: boolean;
  folders: AlbumType[];
}) => {
  return (
    <div
      className={`bg-black rounded-sm max-h-max absolute top-0 w-64 md:w-[20rem] right-0 z-50 lg:hidden ${
        !open && "hidden"
      }`}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">{<SideMenuTabs folders={folders} />}</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuMobile;
