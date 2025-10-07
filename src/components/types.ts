
type Owner = {
  name: string;
  avatar?: string;
};

export type Item = {
  id: string;
  name: string;
  type: "folder" | "file";
  owner: Owner;
  lastModified: string;
  size?: string;
};
