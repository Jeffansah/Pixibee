import cloudinary from "cloudinary";
import AlbumCard from "./AlbumCard";
import ForceRefresh from "@/utils/ForceRefresh";

export type AlbumType = {
  name: string;
  path: string;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Page = async () => {
  const result = (await cloudinary.v2.api.root_folders()) as {
    folders: AlbumType[];
  };

  const { folders } = result;

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
