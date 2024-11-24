"use client";

export default function TestFlex() {
  return (
    <div className="flex h-screen">
      <div className="w-[72px] flex-shrink-0 bg-red-500">A</div>
      <div className="h-full w-full bg-green-300">B</div>
    </div>
  );
}
