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
  const MAX_COLUMNS_LG = 4;
  const MAX_COLUMNS_MD = 3;
  const MAX_COLUMNS_XS = 2;

  const getColumnsLg = (index: number) =>
    images.filter((image, idx) => idx % MAX_COLUMNS_LG === index);

  const getColumnsXs = (index: number) =>
    images.filter((image, idx) => idx % MAX_COLUMNS_XS === index);

  const getColumnsMd = (index: number) =>
    images.filter((image, idx) => idx % MAX_COLUMNS_MD === index);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-lg:hidden">
        {[
          getColumnsLg(0),
          getColumnsLg(1),
          getColumnsLg(2),
          getColumnsLg(3),
        ].map((col, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {col.map(getImage)}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {[getColumnsXs(0), getColumnsXs(1)].map((col, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {col.map(getImage)}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 max-md:hidden lg:hidden">
        {[getColumnsMd(0), getColumnsMd(1), getColumnsMd(2)].map((col, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {col.map(getImage)}
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGrid;
