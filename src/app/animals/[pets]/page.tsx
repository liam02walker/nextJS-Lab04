export default function page({ params }: { params: { pets: string } }) {
  return (
    <div>
      <h1>Pet: {params.pets}</h1>
    </div>
  );
}
