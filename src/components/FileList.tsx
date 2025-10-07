
'use client';

import FileItem from "./FileItem";

type Owner = {
  name: string;
  avatar?: string;
};

type Item = {
  id: string;
  name: string;
  type: "folder" | "file";
  owner: Owner;
  lastModified: string;
  size?: string;
};

export default function FileList({ items }: { items: Item[] }) {
  return (
    <div className="border rounded-lg">
      <div className="grid grid-cols-4 font-semibold p-4 border-b">
        <div>Name</div>
        <div>Owner</div>
        <div>Last Modified</div>
        <div>File Size</div>
      </div>
      {items.map((item) => (
        <FileItem key={item.id} item={item} />
      ))}
    </div>
  );
}
