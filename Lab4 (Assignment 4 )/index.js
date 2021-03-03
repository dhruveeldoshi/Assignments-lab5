const movies = require("./data/movies");
const connection = require("./config/mongoConnection");

//TODO: getAll (Need to convert ObjectId to String)

async function main() {
  // 1. Create a Movie of your choice.

  const billAndTed = await movies.create(
    "bill And Ted",
    "Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.",
    "PG-13",
    "1hr 31min",
    "Comedy",
    ["Keanu Reeves", "Alex Winter"],
    { director: "Dean Parisot", yearReleased: 2020 }
  );

  // 2. Log the newly created movie. (Just that movie, not all movies).
  console.log(billAndTed);

  // 3. Create another movie of your choice.
  const inception = await movies.create(
    "Inception",
    "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable.",
    "PG-18",
    "2hr 31min",
    "Sci-Fic",
    ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Tom Hardy"],
    { director: "Christopher Nolan", yearReleased: 2010 }
  );

  // 4. Query all movies, and log them all
  console.log(await movies.getAll());

  // 5 Create a 3rd movie of your choice.;
  const kgf = await movies.create(
    "K.G.F.",
    "In the 1970s, a fierce rebel rises against brutal oppression and becomes the symbol of hope to legions of downtrodden people.",
    "Not-Rated",
    "2hr 36min",
    "Action, Drama",
    ["Yash", "Srinidhi Shetty", "Ramachandra Raju"],
    { director: "Prashanth Neel", yearReleased: 2018 }
  );

  //6. Log newly created 3rd Movies.(Just that movie, not all movies).
  console.log(kgf);

  //7. Rename the first movie's title.
  const updateFirstMovie = await movies.rename(
    billAndTed._id,
    "Renamed: Bill and ted"
  );
  console.log(updateFirstMovie);

  //9. Remove the second movie you created.
  const removeSecondMovie = await movies.remove(inception._id);

  //10. Query all movies, and log them all
  console.log(await movies.getAll());

  // 11. Try to create a movie with bad input parameters to make sure it throws errors.
  try {
    const wrongInputMovie = await movies.create(
      "K.G.F.",
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable.",
      "PG-18",
      "2hr 31min",
      "Sci-Fic",
      ["Leonardo DiCaprio", 7, "Tom Hardy"],
      { director: 199, yearReleased: 2029 }
    );
    console.log(wrongInputMovie);
  } catch (error) {
    console.log(error);
  }

  //12. Try to remove a movie that does not exist to make sure it throws errors.

  try {
    const removeMovie = await movies.remove("603966fa9243bf4500fd56fe");
    console.log(removeMovie);
  } catch (e) {
    console.log(e);
  }

  //13.Try to rename a movie that does not exist to make sure it throws errors.
  try {
    const updateTitleError = await movies.rename(
      inception._id,
      "Shootout at .."
    );
    console.log(updateTitleError);
  } catch (e) {
    console.log(e);
  }

  //14. Try to rename a movie passing in invalid data for the parameter to make sure it throws errors.
  try {
    const renameWronParam = await movies.rename(kgf._id, 124);
    console.log(renameWronParam);
  } catch (e) {
    console.log(e);
  }

  //15. Try getting a movie by ID that does not exist to make sure it throws errors.
  try {
    const getWrongMovie = await movies.get(inception._id);
    console.log(getWrongMovie);
  } catch (error) {
    console.log(error);
  }

  const db = await connection();
  await db.serverConfig.close();
}

main().catch((error) => console.log(error));
