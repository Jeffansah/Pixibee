import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bars3Icon,
  FolderPlusIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import AddToAlbum from "./AddToAlbum";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";
import DeletePicture from "./DeletePicture";

const ImageMenu = ({ image }: { image: SearchResult }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-0 w-6 h-6">
            <Bars3Icon className="text-white w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 cursor-pointer">
          <DropdownMenuItem asChild>
            <AddToAlbum image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link
              className="flex gap-2 whitespace-nowrap hover:bg-black"
              href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
            >
              <PencilSquareIcon className="w-4 h-4" />
              <p className="text-[13px]">Edit Photo</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <DeletePicture image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ImageMenu;
