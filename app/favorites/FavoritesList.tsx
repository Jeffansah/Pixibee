"use client";

import { useEffect, useState } from "react";
import CloudImage from "../gallery/CloudImage";
import { SearchResult } from "../gallery/page";
import ImageGrid from "@/components/ui/ImageGrid";

const FavoritesList = ({
  initialResources,
}: {
  initialResources: SearchResult[];
}) => {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(imageResult: SearchResult) => (
        <CloudImage
          key={imageResult.public_id}
          imageResult={imageResult}
          alt={imageResult.filename}
          width="400"
          height="300"
          onUnheart={(unheartedResource) => {
            setResources((currentResources) =>
              currentResources.filter(
                (resource) => resource.public_id !== unheartedResource.public_id
              )
            );
          }}
        />
      )}
    />
  );
};

export default FavoritesList;
