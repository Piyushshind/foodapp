const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://foodees:foodees9270@cluster0.zpraavm.mongodb.net/foodees?retryWrites=true&w=majority"
//const mongoURI = "mongodb://kishangaur448:123@ac-iudq7gg-shard-00-00.jkvtuhv.mongodb.net:27017,ac-iudq7gg-shard-00-01.jkvtuhv.mongodb.net:27017,ac-iudq7gg-shard-00-02.jkvtuhv.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-g5nmkw-shard-0&authSource=admin&retryWrites=true&w=majority"
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected Successfully")
            const fetched_data = await mongoose.connection.db.collection("food_item")
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.food_items = data
                        global.foodCategory = catData
                    }
                })
                // if(err) console.log(err)
                // else {
                //   global.food_items = data;
                //console.log(global.food_items)
                //}
            })
        }

    })
}
module.exports = mongoDB;





















































// const mongoose = require('mongoose');

// // const mongoURI = "mongodb+srv://foodees:foodees9270@cluster0.zpraavm.mongodb.net/foodees?retryWrites=true&w=majority"




// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect(mongoURI)
//     const fetchData = await mongoose.connection.db.collection("food_items")   //collection("food_items");

//     console.log('mongo');
// }

// module.exports = main;











































































































// const mongoDB = async () => {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
//         if (err) console.log('the error is ', err);
//         else {
//             console.log('mongo connected');
//         }
//     });
// }


// module.exports = mongoDB;




// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect(mongoURI)
//     console.log('mongo');
// }


/// 'mongodb+srv://foodees:foodees9270@cluster0.zpraavm.mongodb.net/?retryWrites=true&w=majority'