const mongoCollections = require("../config/mongoCollections");
const movies = mongoCollections.movies;
let { ObjectId } = require("mongodb");

// Error Handling
const errorHandlingId = (newId) => {
  if (!newId) throw "Id is not provided, please provide proper Id.";
  if (typeof newId === "string" && newId.trim().length == 0)
    throw "The provide id is either not in proper format or it's an empty input";
  // if (newId.match(/[0-9a-fA-F]{24}/g))
  if (ObjectId.isValid(newId) !== true)
    throw "The provided id is not in proper format";
  // throw "The provided id is not in proper format";s
};

module.exports = {
  async create(title, plot, rating, runtime, genre, cast, info) {
    // function starts

    // Error Handling Starts
    if (!title || !plot || !rating || !runtime || !genre || !cast || !info)
      throw " All fields need to have valdi values.";
    if (
      typeof title !== "string" ||
      title.trim().length < 1 ||
      typeof plot !== "string" ||
      plot.trim().length < 1 ||
      typeof rating !== "string" ||
      rating.trim().length < 1 ||
      typeof runtime !== "string" ||
      runtime.trim().length < 1 ||
      typeof genre !== "string" ||
      genre.trim().length < 1
    )
      throw " The given input is not a string or the input length is zero";

    if (
      Array.isArray(cast) != true ||
      cast.length < 1 ||
      cast.forEach((el) => {
        if (typeof el !== "string" || el.trim().length === 0)
          throw `The provided cast : ${el} is not a string`;
      })
    )
      throw "Cast should ne either Array which contains atleast 1 string element init.";

    if (typeof info !== "object")
      throw "The info parameter should be an object.";
    director = info.director;
    yearReleased = info.yearReleased;

    if (typeof director !== "string" || !director || director.trim().length < 1)
      throw "Director must be a string and it should not be empty.";
    if (
      typeof yearReleased !== "number" ||
      yearReleased.toString().match(/[0-9]/g).length !== 4 ||
      !yearReleased
    )
      throw "The year field must be a 4 digit number and it should not be empty.";
    if (yearReleased < 1930 || yearReleased > new Date().getFullYear() + 5)
      throw "The released year should be in range.";
    // Actual Function Starts.
    const movieCollection = await movies();
    let newMovie = {
      title: title,
      plot: plot,
      rating: rating,
      runtime: runtime,
      genre: genre,
      cast: cast,
      info: {
        director: director,
        yearReleased: yearReleased,
      },
    };

    const insertedMovie = await movieCollection.insertOne(newMovie);
    if (insertedMovie.insertedCount === 0) throw "Could not add Movie.";
    const newId = await insertedMovie.insertedId;
    const addedMovie = await this.get(newId.toString());
    return addedMovie;
  }, //  create function ends,
  ////////////////////

  async getAll() {
    // getAll function starts

    // TODO: Need to check if the database is empty or not. if empty then return  empty array[]
    const movieCollection = await movies();
    const movieList = await movieCollection.find({}).toArray();
    if (movieList.length === 0 || movieList.length == undefined) {
      return [];
    } else {
      for (i in movieList) {
        movieList[i]._id = movieList[i]._id.toString();
      }
      // await movieList._id.toString();
      return movieList;
    } // return movieList;
  }, //getAll function ends.

  ////////////////////////////////
  async get(id) {
    // get function starts.
    errorHandlingId(id);
    newId = ObjectId(id);
    //TODO: objectId conversion left.
    const movieCollection = await movies();
    const movieList = await movieCollection.findOne({ _id: newId });
    if (movieList === null) throw "Could not find Movie";
    movieList["_id"] = movieList["_id"].toString();
    return movieList;
  }, //get function ends.

  ///////////////////////////////////
  async remove(id) {
    //TODO:
    // remove function starts.
    /*error handling*/
    errorHandlingId(id);
    let newId = ObjectId(id);

    const movieCollection = await movies();
    const movieName = await movieCollection.findOne({ _id: newId });
    if (!movieName) throw `Could not find Movie with the id: ${newId}`;

    //TODO: Console.log to see which movie is getting removied 1.get() method
    const movieDeletion = await movieCollection.removeOne({ _id: newId });
    if (movieDeletion.deletedCount === 0)
      throw `Could not delete movie with the id: ${newId}`;
    // return ` Movie has been successfully deleted`;
    return `${movieName["title"]} has been successfully deleted`;
  }, // remove function ends.
  ///////////////////////////////////

  async rename(id, newTitle) {
    // rename function starts.
    errorHandlingId(id);
    if (!newTitle) throw "newTitle is not provide";
    if (typeof newTitle !== "string" || newTitle.trim().length === 0)
      throw "Provided input for newTitle is either not a string or it is empty.";

    //TODO: before updating check if it exist in the database.
    newId = ObjectId(id);
    const movieCollection = await movies();
    const updateTitle = {
      title: newTitle,
    };
    const updatedMovie = await movieCollection.updateOne(
      { _id: newId },
      { $set: updateTitle }
    );
    if (updatedMovie.modifiedCount === 0) {
      throw "Could not change the title of the movie successfully.";
    }

    return await this.get(newId);
    // const movieFind = await movieCollection.find({ title: newTitle });
  }, // rename function ends here.
};
