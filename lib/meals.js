import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //this will add a delay of 2 seconds
  return db.prepare("select * from meals").all();
}

//.all() to fetch
//.run() to put data
//.get() for single row
