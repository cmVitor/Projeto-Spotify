import { MongoClient } from "mongodb"

const URI =
"mongodb+srv://vitor:vitor123@cluster0.yibmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

