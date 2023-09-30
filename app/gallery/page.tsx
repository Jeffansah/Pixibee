import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";
import CloudImage from "./CloudImage";
import ForceRefresh from "@/utils/ForceRefresh";
import ImageGrid from "@/components/ui/ImageGrid";
import SearchForm from "@/components/ui/SearchForm";

export type SearchResult = {
  public_id: string;
  filename: string;
  tags: string[];
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

const page = async ({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) => {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold max-lg:text-3xl">Gallery</h1>
          <UploadButton results={results.resources} />
        </div>

        <SearchForm initialSearch={search} />
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
        {results.resources.length < 1 && (
          <p className="font-normal text-base">
            No photos by {search} tag in your gallery
          </p>
        )}
      </div>
    </section>
  );
};

export default page;
