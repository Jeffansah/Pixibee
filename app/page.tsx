import cloudinary from "cloudinary";
import ImageGrid from "@/components/ui/ImageGrid";
import UploadButton from "./gallery/UploadButton";
import CloudImage from "./gallery/CloudImage";

export type SearchResult = {
  public_id: string;
  filename: string;
  tags: string[];
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Page = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold max-md:text-3xl">Gallery</h1>
          <UploadButton results={results.resources} />
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

export default Page;
