//jshint esversion:6


const express=require("express");
//const bodyParser=require("body-parser");



const app=express();
port=8000;
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout)
const db =require("./config/mongoose");
//app.use(bodyParser.urlencoded({extended:true}));

app.use(express.urlencoded()) 
app.use('/',require('./routes'))
app.use(express.static('./assets')) // for getting static
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)
app.set('view engine','ejs');
app.set('views','./views')

//express part


//mongodb connect
//mongoose.connect("mongodb+srv://admin:Test123@cluster0.4hteh4t.mongodb.net/todolistDB",{useNewUrlParser: true});

//schema create


//onst Item = mongoose.model("Item", itemsSchema);



app.listen(port,function(err){
  if(err){
      console.log(`error in running the ${port}`)
      return;
  }
  console.log(`Server is running @ ${port}`)
});

// const item1 = new Item({
//   name: "Welcome to your todolist!"
// });

// const item2 = new Item({
//   name: "Hit the + button to add a new item."
// });

// const item3 = new Item({
//   name: "<-- Hit this to delete an item."
// });

// const defaultItems = [item1, item2, item3];

// const listSchema = {
//   name: String,
//   items: [itemsSchema]
// };

// const List = mongoose.model("List", listSchema);


// app.get("/", function(req, res) {

//   Item.find({}, function(err, foundItems){

//     if (foundItems.length === 0) {
//       Item.insertMany(defaultItems, function(err){
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Successfully savevd default items to DB.");
//         }
//       });
//       res.redirect("/");
//     } else {
//       res.render("list", {listTitle: "Today", newListItems: foundItems});
//     }
//   });

// });

// app.get("/:customListName", function(req, res){
//   const customListName = req.params.customListName;

//   List.findOne({name: customListName}, function(err, foundList){
//     if (!err){
//       if (!foundList){
//         //Create a new list
//         const list = new List({
//           name: customListName,
//           items: defaultItems
//         });
//         list.save();
//         res.redirect("/" + customListName);
//       } else {
//         //Show an existing list

//         res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
//       }
//     }
//   });



// });

// app.post("/", function(req, res){

//   const itemName = req.body.newItem;
//   const listName = req.body.list;

//   const item = new Item({
//     name: itemName
//   });

//   if (listName === "Today"){
//     item.save();
//     res.redirect("/");
//   } else {
//     List.findOne({name: listName}, function(err, foundList){
//       foundList.items.push(item);
//       foundList.save();
//       res.redirect("/" + listName);
//     });
//   }
// });

// app.post("/delete", function(req, res){
//   const checkedItemId = req.body.checkbox;
//   const listName = req.body.listName;

//   if (listName === "Today") {
//     Item.findByIdAndRemove(checkedItemId, function(err){
//       if (!err) {
//         console.log("Successfully deleted checked item.");
//         res.redirect("/");
//       }
//     });
//   } else {
//     List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
//       if (!err){
//         res.redirect("/" + listName);
//       }
//     });
//   }


// });

// app.get("/about", function(req, res){
//   res.render("about");
// });

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }

// app.listen(port, function() {
//   console.log("Server has started ");
// });
