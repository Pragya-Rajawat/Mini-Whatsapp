const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats =[

{
    from:"neha",
    to:"preeti",
    msg: "send me notes for exams",
    created_at: new Date(),
},
{
    from:"Rohit",
    to:"Mohit",
    msg: "Teach me mongodb",
    created_at: new Date(),
},
{
    from:"riya",
    to:"siya",
    msg: "I am leaning web development",
    created_at: new Date(),
},
{
    from:"muskan",
    to:"ananya",
    msg: "I am making project using mern stack",
    created_at: new Date(),
},
{
    from:"amit",
    to:"rahul",
    msg: "I am leaning android development",
    created_at: new Date(),
},
];

Chat.insertMany(allChats);

