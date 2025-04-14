"use client"

import { Button } from "@/components/ui/button";
import indexer from "@/lib/indexer";

export default function Home() {
  return (
    <Button
      onClick={() => indexer}
    >Hello</Button>
  );
}
