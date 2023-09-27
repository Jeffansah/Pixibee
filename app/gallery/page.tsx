import UploadButton from "./uploadButton";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import CloudImage from "./CloudImage";

type SearchResult = {
  public_id: string;
  filename: string;
};

const page = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {results &&
            results.resources.map((item) => (
              <CloudImage
                key={item.public_id}
                src={item.public_id}
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
