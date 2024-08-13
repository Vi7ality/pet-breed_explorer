export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <main>
      <h1>Breed page {params.id}</h1>
    </main>
  );
}
