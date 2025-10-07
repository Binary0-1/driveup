
'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FileList from "../components/FileList";

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

export default function Main({ initialItems }: { initialItems: Item[] }) {
  const [items, setItems] = useState<Item[]>(initialItems);
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("path") || "";

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const handleFolderClick = (folderName: string) => {
    const newPath = path ? `${path}/${folderName}` : folderName;
    router.push(`/?path=${newPath}`);
  };

  return (
    <div className="p-8">
      <Header />
      <Breadcrumbs />
      <FileList items={items} onFolderClick={handleFolderClick} />
    </div>
  );
}
