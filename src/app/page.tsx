
import Main from "./main";

type SearchParams = {
  searchParams: {
    path?: string;
  };
};

async function getData(path: string) {
  const res = await fetch(`/api?path=${path}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ searchParams }: SearchParams) {
  const path = searchParams.path || "";
  const items = await getData(path);
  return <Main initialItems={items} />;
}
