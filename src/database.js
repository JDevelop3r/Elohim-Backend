import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://josedipi:2208@cluster0.noscz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    }
  )

  .then((db) => {
    console.log("Db is connected");
  })
  .catch((error) => console.log(error));
