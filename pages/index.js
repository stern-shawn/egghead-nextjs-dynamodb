import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR(
    '/api/item?id=461888c5-7dd6-4a79-abb6-c82c90b7a31d',
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <code>{JSON.stringify(data, null, 2)}</code>;
}
