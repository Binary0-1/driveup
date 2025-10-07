import Link from "next/link";
import type { Item } from "./types";

export default function FileItem({ item }: { item: Item }) {
  if (item.type === "folder") {
    const href = `/?path=${item.name}`;
    return (
      <div className="grid grid-cols-4 p-4 border-b cursor-pointer">
        <Link href={href} prefetch={true}>
          {item.name}
        </Link>
        <div>{item.owner.name}</div>
        <div>{item.lastModified}</div>
        <div>{item.size || "-"}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 p-4 border-b">
      <div>{item.name}</div>
      <div>{item.owner.name}</div>
      <div>{item.lastModified}</div>
      <div>{item.size || "-"}</div>
    </div>
  );
}
