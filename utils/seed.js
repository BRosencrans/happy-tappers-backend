const connection = require("../config/connection");
const { User, Score } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
    connsole.log("connected for seeding");
    const users = [
        {
            username: "tom",
            password: "testtest",
        },
        {
            username: "jerry",
            password: "testtest",
        },
        {
            username: "blossom",
            password: "testtest",
        },
        {
            username: "bubbles",
            password: "testtest",
        },
        {
            username: "buttercup",
            password: "testtest",
        },
        {
            username: "account",
            password: "testtest",
        },
    ];

    // const scores = [
    //     {
    //         user: "buttercup",
    //         score: "5000",
    //     },
    //     {
    //         user: "blossom",
    //         score: "23",
    //     },
    //     {
    //         user: "bubbles",
    //         score: "12",
    //     },
    //     {
    //         user: "tom",
    //         score: "12",
    //     },
    //     {
    //         user: "jerry",
    //         score: "14",
    //     },
    //     {
    //         user: "account",
    //         score: "142",
    //     },
    //     {
    //         user: "bubbles",
    //         score: "16",
    //     },
    //     {
    //         user: "blossom",
    //         score: "15",
    //     },
    //     {
    //         user: "buttercup",
    //         score: "17",
    //     },
    //     {
    //         user: "tom",
    //         score: "0",
    //     },
    //     {
    //         user: "jerry",
    //         score: "100",
    //     },
    //     {
    //         user: "jerry",
    //         score: "200",
    //     },
    //     {
    //         user: "tom",
    //         score: "1",
    //     },
    //     {
    //         user: "tom",
    //         score: "2",
    //     },
    //     {
    //         user: "jerry",
    //         score: "300",
    //     },
    //     {
    //         user: "account",
    //         score: "213246",
    //     },
    // ];

    await User.collection.insertMany(users);
    // await Score.collection.insertMany(scores);

    console.info("Seeding complete! 🌱");
    process.exit(0);
});
