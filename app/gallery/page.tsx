import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import CloudImage from "./CloudImage";

export type SearchResult = {
  public_id: string;
  filename: string;
  tags: string[];
};

const page = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(5)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton results={results.resources} />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {results &&
            results.resources.map((item) => (
              <CloudImage
                key={item.public_id}
                imageResult={item}
                alt={item.filename}
                width="400"
                height="300"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default page;
