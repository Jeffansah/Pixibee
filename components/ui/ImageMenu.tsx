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
import { Bars3Icon, FolderPlusIcon } from "@heroicons/react/24/outline";
import AddToAlbum from "./AddToAlbum";
import { SearchResult } from "@/app/gallery/page";

const ImageMenu = ({ image }: { image: SearchResult }) => {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-0 w-6 h-6">
            <Bars3Icon className="text-white w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 p-0 cursor-pointer">
          <DropdownMenuItem
            className="flex gap-2 whitespace-nowrap justify-center items-center cursor-pointer"
            asChild
          >
            <AddToAlbum image={image} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ImageMenu;
