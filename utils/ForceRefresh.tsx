"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ForceRefresh = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.replace(pathname);
    router.refresh();
  }, []);

  return <></>;
};

export default ForceRefresh;
