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

const SideMenu = async () => {
  const result = (await cloudinary.v2.api.root_folders()) as {
    folders: AlbumType[];
  };

  const { folders } = result;

  return (
    <div className="pb-12 w-1/5">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <SideMenuTabs folders={folders} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
