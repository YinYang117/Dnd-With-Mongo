debugger
const { MongoClient, ServerApiVersion } = require('mongodb');
// console.log(ServerApiVersion); // === { v1: '1' }
const uri = "mongodb+srv://LinuxSys--0:LinuxSys--0@dungeonsanddragons.1mnmar9.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,  // 1
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (e) {
    console.log(`An Error Occured: \n ${e}`)
    // console.dir(obj) will allow you to see an interactive list of all properties in the obj
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir); // Is this .catch now redundant after adding it inside the run func?
