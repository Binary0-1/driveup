import Main from "~/components/main";


type SearchParams = {
  searchParams: {
    path?: string;
  };
};

async function getData(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api?path=${encodeURIComponent(path)}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}


export default async function Page({ searchParams }: SearchParams) {
  const path = searchParams.path || "";
  const items = await getData(path);
  return <Main initialItems={items} />;
}
