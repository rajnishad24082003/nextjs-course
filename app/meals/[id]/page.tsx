export default async function AnythingYouWant({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <h1>search meal via id : </h1>
      <p>{id}</p>
      <br />
      <h1>app/meals/id</h1>
      <br />
    </>
  );
}
