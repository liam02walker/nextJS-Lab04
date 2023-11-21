import Link from "next/link";

type petsSearchQuery = {
  sortBy: string;
};

type petsType = {
  name: string;
  id: number;
};

let pets: petsType[] = [
  {
    name: "Shadow",
    id: 0,
  },
  {
    name: "Bob",
    id: 1,
  },
  {
    name: "Ted",
    id: 2,
  },
  {
    name: "Franky",
    id: 3,
  },
];

function comparePets(a: petsType, b: petsType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function page({ searchParams }: { searchParams: petsSearchQuery }) {
  let sortedPets = [...pets];

  if (searchParams.sortBy === "asc") {
    sortedPets.sort(comparePets);
  } else if (searchParams.sortBy === "desc") {
    sortedPets.sort(comparePets).reverse();
  }
  return (
    <div>
      <h1>ANIMALS WHOO</h1>
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/animals">Remove Sort</Link>
      <br />
      <Link href="/animals?sortBy=asc">Sort by ascending</Link>
      <br />
      <Link href="/animals?sortBy=desc">Sort by descending</Link>
      <br />
      <br />
      <br />
      <br />
      {sortedPets.map((pet) => {
        return (
          <div key={pet.id}>
            <Link href={`/animals/${pet.name.toLowerCase()}`}>{pet.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
