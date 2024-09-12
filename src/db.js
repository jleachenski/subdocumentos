import mongoose from "mongoose";

const mongoDB =
  "mongodb+srv://<db_username>:<db_password>@cluster0.osw4i.mongodb.net/";
const database = "armario";

const main = async () => {
  mongoose.connect(mongoDB + database);
};

main()
  .then(() => console.log(`Conectado ao db ${database} com sucesso!`))
  .catch((err) => console.log(err));

export default mongoose; // module.exports = mongoose
