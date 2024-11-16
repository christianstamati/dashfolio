import React from "react";
import { getCachedGlobal } from "@/payload/lib/get-globals";

export default async function Home() {
  const menu = await getCachedGlobal("menu")();
  return (
    <div className="p-4">
      <pre>{JSON.stringify(menu, null, 2)}</pre>
    </div>
  );
}
