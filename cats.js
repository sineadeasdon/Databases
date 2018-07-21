var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String,
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat ({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("An error occured");
//     } else {
//         console.log("Saved to DB");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Mekko",
    age: 5,
    temperament: "Feisty"
}, function(err, cat){
    if(err){
        console.log(err);
    } else{
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("Error detected");
        console.log(err);
    } else {
        console.log("List of cats in DB");
        console.log(cats);
    }
});