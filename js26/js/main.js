// Fetch API requires a discussion of callbacks, promises, thenables, and async/await

//Callbacks

// function firstFunction(parameters, callback) {
//     // do stuff
//     callback();
// }
/*
// AKA "callback hell"
firstFunction(para, function() {
    secondFunction(para, function() {
        thirdFunction(para, function() {

        })
    })
})
*/

// Promises

// 3 states: Pending, Fulflilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//     const error = true;
//     if (!error) {
//         resolve("Yes! resolved the promise")
//     } else {
//         reject("No! rejected the promise.")
//     }
// })

// console.log(myPromise)

// myPromise.then(value => {
//     return value + 1
// })
// .then(newValue => {
//     console.log(newValue)
// })
// .catch(err => {
//     console.error(err)
// })


// pending
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then(response => {
// 		return response.json()
// 	})
// 	.then(data => {
// 		data.forEach(user => {
// 			console.log(user);
// 		})
// 	})







// Async / Await

// const myUsers = {
// 	userList: []
// }

// const myCoolFunction = async () => {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	const jsonUserData = await response.json();
// 	return jsonUserData;
// }

// const anotherFunc = async () => {
// 	const data = await myCoolFunction();
// 	myUsers.userList = data;
// 	console.log(myUsers.userList);
// }

// anotherFunc()







// Workflow function

// const getAllUserEmails = async () => {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	const jsonUserData = await response.json();

// 	const userEmailArray = jsonUserData.map(user => {
// 		return user.email;
// 	})

// 	console.log(userEmailArray)
// }

// getAllUserEmails()








// 2nd parameter of Fetch is an object

// const getDadJoke = async () => {

// 	const response = await fetch("https://icanhazdadjoke.com/", {
// 		method: "GET",
// 		headers: {
// 			Accept: "application/json"  // different websites accept different data formats, check the websites DOCUMENTATION to see what the correct formatting is
// 		}
// 	});
// 	const jsonJokeData = await response.json();

// 	console.log(jsonJokeData.joke);
// }

// getDadJoke()




const requestJoke = async (firstName, lastName) => {

	const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`)
	const jsonRespose = await response.json();

	console.log(jsonRespose.value);
}

requestJoke("Bruce", "Lee");