"use client";

import { SearchResult } from "@/app/gallery/page";
import { addImageToAlbum } from "@/app/server-actions/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FolderPlusIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

const AddToAlbum = ({
  image,
  onClose,
}: {
  image: SearchResult;
  onClose: () => void;
}) => {
  const [album, setAlbum] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex justify-center gap-2 whitespace-nowrap"
        >
          <FolderPlusIcon className="w-4 h-4" />
          <p className="text-[13px]">Add to Album</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Enter an album you want to move this image into.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              onChange={(e) => {
                setAlbum(e.target.value);
              }}
              id="album"
              value={album}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              setOpen(false);
              onClose();
              await addImageToAlbum(album, image);
            }}
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddToAlbum;
