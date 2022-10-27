import mongoose from "mongoose"

mongoose.connect("mongodb+srv://danilopacker:951357@dpcluster.zg411fk.mongodb.net/?");

let db = mongoose.connection;

export default db