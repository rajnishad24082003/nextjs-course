import { getMeals } from "@/lib/meals";

export default async function AnythingYouWant() {
  const meals = await getMeals();

  return (
    <>
      <h1>meals page /app/meals</h1>
      <br />
      {meals.map((meal: object) => {
        console.log(meal);
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
