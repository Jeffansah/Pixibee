import CloudImage from "@/app/gallery/CloudImage";
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const ImageGrid = ({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageResult: SearchResult) => ReactNode;
}) => {
  const MAX_COLUMNS = 4;

  const getColumns = (index: number) =>
    images.filter((image, idx) => idx % MAX_COLUMNS === index);

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (col, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {col.map(getImage)}
          </div>
        )
      )}
    </div>
  );
};

export default ImageGrid;
