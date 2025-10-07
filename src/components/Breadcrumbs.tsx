
'use client';

import { useRouter, useSearchParams } from "next/navigation";

export default function Breadcrumbs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("path") || "";
  const breadcrumbs = path.split("/").filter(Boolean);

  return (
    <div className="mb-4">
      <span onClick={() => router.push("/")} className="cursor-pointer">My Drive</span>
      {breadcrumbs.map((breadcrumb, index) => {
        const currentPath = breadcrumbs.slice(0, index + 1).join("/");
        return (
          <span key={index} onClick={() => router.push(`/?path=${currentPath}`)} className="cursor-pointer">
            / {breadcrumb}
          </span>
        );
      })}
    </div>
  );
}
