
'use client';

import { Folder, File } from "lucide-react";
import { generateGradient, getInitials } from "../utils";

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

export default function FileItem({ item, onFolderClick }: { item: Item, onFolderClick: (folderName: string) => void }) {
  return (
    <div
      className="grid grid-cols-4 p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
      onClick={() => item.type === "folder" && onFolderClick(item.name)}
    >
      <div className="flex items-center">
        {item.type === "folder" ? <Folder className="mr-2" /> : <File className="mr-2" />}
        {item.name}
      </div>
      <div className="flex items-center">
        {item.owner.avatar ? (
          <img src={item.owner.avatar} alt={item.owner.name} className="w-6 h-6 rounded-full mr-2" />
        ) : (
          <div
            className="w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs font-bold text-white"
            style={{ background: generateGradient(item.owner.name) }}
          >
            {getInitials(item.owner.name)}
          </div>
        )}
        {item.owner.name}
      </div>
      <div>{item.lastModified}</div>
      <div>{item.size || "-"}</div>
    </div>
  );
}
