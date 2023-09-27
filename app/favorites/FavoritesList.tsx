"use client";

import { useEffect, useState } from "react";
import CloudImage from "../gallery/CloudImage";
import { SearchResult } from "../gallery/page";

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
    <div className="grid grid-cols-4 gap-4">
      {resources &&
        resources.map((item) => (
          <CloudImage
            key={item.public_id}
            imageResult={item}
            alt={item.filename}
            width="400"
            height="300"
            onUnheart={(unheartedResource) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        ))}
    </div>
  );
};

export default FavoritesList;
