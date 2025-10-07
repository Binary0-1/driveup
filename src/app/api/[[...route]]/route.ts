import { NextRequest, NextResponse } from "next/server";

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
  items?: Item[];
};

const data: Item[] = [
  {
    id: "1",
    name: "Project Alpha",
    type: "folder",
    owner: { name: "You", avatar: "https://github.com/shadcn.png" },
    lastModified: "2024-07-30",
    items: [
      {
        id: "1-1",
        name: "Source Code",
        type: "folder",
        owner: { name: "You", avatar: "https://github.com/shadcn.png" },
        lastModified: "2024-07-30",
        items: [
          {
            id: "1-1-1",
            name: "index.js",
            type: "file",
            owner: { name: "You", avatar: "https://github.com/shadcn.png" },
            lastModified: "2024-07-30",
            size: "1.2 KB",
          },
        ],
      },
      {
        id: "1-2",
        name: "README.md",
        type: "file",
        owner: { name: "You", avatar: "https://github.com/shadcn.png" },
        lastModified: "2024-07-30",
        size: "2.5 KB",
      },
    ],
  },
  {
    id: "2",
    name: "Meeting Notes",
    type: "file",
    owner: { name: "John Doe" },
    lastModified: "2024-07-29",
    size: "5.6 MB",
  },
  {
    id: "3",
    name: "Design Assets",
    type: "folder",
    owner: { name: "Jane Smith", avatar: "https://github.com/jane.png" },
    lastModified: "2024-07-28",
    items: [],
  },
  {
    id: "4",
    name: "Financials Q2",
    type: "file",
    owner: { name: "You", avatar: "https://github.com/shadcn.png" },
    lastModified: "2024-07-27",
    size: "12.1 MB",
  },
];

function findFolder(path: string[], items: Item[]): Item[] | null {
  if (path.length === 0) {
    return items;
  }

  const [folderName, ...rest] = path;
  const folder = items.find((item) => item.name === folderName && item.type === "folder");

  if (folder && folder.items) {
    return findFolder(rest, folder.items);
  }

  return null;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");

  if (path) {
    const pathParts = path.split("/").filter(Boolean);
    const items = findFolder(pathParts, data);
    if (items) {
      return NextResponse.json(items);
    } else {
      return NextResponse.json({ error: "Folder not found" }, { status: 404 });
    }
  } else {
    return NextResponse.json(data);
  }
}