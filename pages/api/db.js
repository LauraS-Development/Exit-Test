import mongodb from "../../utils/mongodb";
import exits from "../../data/exits";
import Exit from "../../models/exit";

export default async function handler(req, res) {
  await mongodb.dbConnect();
  await Exit.deleteMany();
  await Exit.insertMany(exits.exits)
  const exits12 = await Exit.find({});
  await mongodb.dbDisconnect();
  //res.status(200).json({msg: 'Daten gespeichert'})
  res.send(exits12)
}
