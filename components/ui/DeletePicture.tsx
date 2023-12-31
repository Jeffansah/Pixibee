"use client";

import { SearchResult } from "@/app/gallery/page";
import { deletePicture } from "@/app/server-actions/deleteAction";
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

import { TrashIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";

const DeletePicture = ({
  image,
  onClose,
}: {
  image: SearchResult;
  onClose: () => void;
}) => {
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
          <TrashIcon className="w-4 h-4 max-lg:w-5 max-lg:h-5" />
          <p className="text-[13px] max-lg:text-base">Delete Photo</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-md:max-w-[95vw] max-md:rounded-sm">
        <DialogHeader>
          <DialogTitle>Delete Photo</DialogTitle>
          <DialogDescription className="whitespace-nowrap">
            Are you sure you want to delete this photo?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex gap-4 max-md:justify-center">
            <Button
              variant="secondary"
              onClick={async () => {
                setOpen(false);
                onClose();
                await deletePicture(image.public_id);
                router.replace(pathname);
                router.refresh();
              }}
            >
              Yes
            </Button>
            <Button
              variant={"default"}
              onClick={() => {
                setOpen(false);
                onClose();
              }}
            >
              No
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePicture;
