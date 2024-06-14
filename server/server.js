// Import two packages: express and cors
const express = require("express");
const cors = require("cors");

// Create a new Express app
const app = express();

app.use(cors()); // Use the `cors` middleware to enable CORS.


app.use(express.json()); // Use the `express.json()` middleware to parse JSON request bodies.

// Run the Express app on port 8000.
app.listen(8000, () => console.log("Running on port 8000"));

// create the express route
app.post("/api/messages", (req, res) => {
  console.log(req.body);
});
  

// faux database, not persistent
const chats = [];

app.post("/api/messages", (req, res) => {
console.log(req.body);
});
 // creates a new chat
const { message, pin } = req.body;

 // Create a new chat object with the hashed pin and the message.
const newChat = {
    pin: hashedPin,
    messages: [message],
}
 // Store the new chat in our chats array.
chats.push(newChat);

 // Output debugging message.
console.log("Created a new chat session: ", newChat);

 // Respond with the messages for the chat session.
res.status(200).send({ messages: newChat.messages });
 // Output debugging message.
console.log("Sent the messages: ", newChat.messages);
;

// stores whether the pin exists in the db and a variable to store the chat
app.post("/api/messages", (req, res) => {
    console.log(req.body);
  
    const { message, pin } = req.body;
  
    // Search for messages with the same pin.
    let pinExists = false;
    let currentChat;
    for (let i = 0; i < chats.length; i++) {
    // TODO
    }

    // Loop over each chat session in the `chats` array.
    for (let i = 0; i < chats.length; i++) {
    // Get the current chat for this iteration by indexing into `chats`.
        currentChat = chats[i];
      
        // Check if the current chat's `pin` matches the `pin` from the request.
        for (let i = 0; i < chats.length; i++) {
            currentChat = chats[i];
        }
        
            // If we find a match, then the pin already exists in the database and
            // we can stop looping.
            for (let i = 0; i < chats.length; i++) {
              currentChat = chats[i];
              pinExists = currentChat.pin === pin;
            }    
            for (let i = 0; i < chats.length; i++) {
              currentChat = chats[i];
              pinExists = currentChat.pin === pin;
            
              if (pinExists) {
                // Output for debugging.
                console.log("Found an existing chat session: ", currentChat);
            
                break; // Exit the loop.
              }
// If we can't find a chat with the same pin, create a new chat object.
if (!pinExists) {
  // Create a new chat object with the hashed pin and the message.
  const newChat = {
    pin: hashedPin,
    messages: [message],
  };
  // Store the new chat in our chats array.
  chats.push(newChat);

  // Output debugging message.
  console.log("Created a new chat session: ", newChat);
} else {
 // If we can't find a chat with the same pin, create a new chat object.
if (!pinExists) {
  // Create a new chat object with the hashed pin and the message.
  const newChat = {
    pin: hashedPin,
    messages: [message],
  };
  // Store the new chat in our chats array.
  chats.push(newChat);

  // Output debugging message.
  console.log("Created a new chat session: ", newChat);

  // Set the current chat to the new chat object.
  currentChat = newChat;
} else {
  // TODO
} 
// If we can't find a chat with the same pin, create a new chat object.
if (!pinExists) {
  // (...snippet)
} else {
  // The chat already exists. Add the message to the existing chat.
  currentChat.messages.push(message);
}
// Respond with the messages for the chat session.
res.status(200).send({ messages: currentChat.messages });
// Output debugging message.
console.log("Sent the messages: ", currentChat.messages);
            }

            }
        }
    }
);