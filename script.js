const noteText = document.querySelector('input[type="text"]');
const noteDate = document.querySelector('input[type="date"]');

let dateInput;
let noteInput;

noteText.addEventListener('input', ()=>{
    noteInput = noteText.value;
    console.log(noteInput);
})
noteDate.addEventListener('input', ()=>{
    dateInput = noteDate.value
    console.log(dateInput)
})

const { MongoClient } = require('mongodb');
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



const documentToInsert = {
    task: noteInput,
    dueDate: new Date(dateInput),
  };

async function insertDocument(){

    try {
        await client.connect();
        
        const database = client.db("to-do-database");

        const collection = database.collection("to-do-list");

        const result = await collection.insertOne(documentToInsert);

        console.log(`Inserted document with _id: ${result.insertedId}`)
    } catch{
        console.error(error)
    } finally {
        await client.close();
      }
    }


