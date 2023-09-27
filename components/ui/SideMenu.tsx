import React from "react";
import { Button } from "./button";
import {
  HeartIcon,
  PhotoIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const SideMenu = () => {
  return (
    <div className="pb-12 w-1/5">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              className="w-full justify-start flex gap-2"
            >
              <PhotoIcon className="w-5 h-5" />
              Gallery
            </Button>
            <Button variant="ghost" className="w-full justify-start flex gap-2">
              <Squares2X2Icon className="w-5 h-5" />
              Albums
            </Button>
            <Button variant="ghost" className="w-full justify-start flex gap-2">
              <HeartIcon className="w-5 h-5" />
              Favorites
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
