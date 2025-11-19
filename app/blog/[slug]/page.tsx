export default async function AnythingYouWant({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <h1>blog posts....</h1>
      <p>{slug}</p>
    </>
  );
}
