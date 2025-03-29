"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { FC, PropsWithChildren } from "react";
import { useMedia } from "react-use";

const FixedHeightScrollArea: FC<PropsWithChildren> = ({ children }) => {
  const isMobileView = useMedia("(max-width: 768px)");

  return (
    <ScrollArea
      className="overflow-y-auto"
      style={{
        height: `calc(100vh - ${isMobileView ? 112 : 64}px)`,
      }}
    >
      {children}
    </ScrollArea>
  );
};

export default FixedHeightScrollArea;
