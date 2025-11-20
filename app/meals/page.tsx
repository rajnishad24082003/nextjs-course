import { getMeals } from "@/lib/meals";

interface Meal {
  id: string;
  slug: string;
}

export default async function AnythingYouWant() {
  const meals: Meal[] = await getMeals();

  return (
    <>
      <h1>meals page /app/meals</h1>
      <br />
      {meals.map((meal: Meal) => {
        return (
          <div key={meal.id}>
            <p>{meal.slug}</p>
            <br />
          </div>
        );
      })}
    </>
  );
}
