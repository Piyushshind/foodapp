const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://foodees:foodees9270@cluster0.zpraavm.mongodb.net/?retryWrites=true&w=majority"




main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(mongoURI)
    console.log('mongo');
}

module.exports = main; 


















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