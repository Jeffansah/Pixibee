import cloudinary from "cloudinary";
import ForceRefresh from "@/utils/ForceRefresh";
import ImageGrid from "@/components/ui/ImageGrid";
import CloudImage from "@/app/gallery/CloudImage";
import { SearchResult } from "@/app/gallery/page";

const page = async ({
  params: { albumName },
}: {
  params: { albumName: string };
}) => {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">{albumName} Album</h1>
        </div>

        <ImageGrid
          images={results.resources}
          getImage={(imageResult: SearchResult) => (
            <CloudImage
              key={imageResult.public_id}
              imageResult={imageResult}
              alt={imageResult.filename}
              width="400"
              height="300"
            />
          )}
        />
      </div>
    </section>
  );
};

export default page;
