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
import { usePathname, useRouter } from "next/navigation";

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

  const router = useRouter();
  const pathname = usePathname();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="w-full rounded-sm">
        <Button
          variant="ghost"
          className="flex gap-2 whitespace-nowrap py-[6px] px-[8px] h-[32px] justify-start"
        >
          <FolderPlusIcon className="w-4 h-4" />
          <p className="text-[13px]">Add to Album</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-md:max-w-[95vw] max-md:rounded-sm">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription className="max-md:whitespace-nowrap">
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
              router.replace(pathname);
              router.refresh();
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
