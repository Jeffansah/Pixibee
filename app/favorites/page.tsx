import cloudinary from "cloudinary";
import CloudImage from "../gallery/CloudImage";
import { SearchResult } from "../gallery/page";
import FavoritesList from "./FavoritesList";
import ForceRefresh from "@/utils/ForceRefresh";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Page = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold max-lg:text-3xl">Favorites</h1>
        </div>
        <FavoritesList initialResources={results.resources} />
      </div>
    </section>
  );
};

export default Page;
