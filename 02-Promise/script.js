import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
// 		console.log("Users Yuklendi!", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post1) => {
// 				console.log("Post 1 Yuklendi!", post1);

// 				fetch("https://jsonplaceholder.typicode.com/posts/2")
// 				.then((data) => data.json())
// 				.then((post2) => {
// 					console.log("Post 2 Yuklendi!", post2);

// 					fetch("https://jsonplaceholder.typicode.com/posts/3")
// 					.then((data) => data.json())
// 					.then((post3) => {
// 						console.log("Post 3 Yuklendi!", post3);

// 						fetch("https://jsonplaceholder.typicode.com/posts/4")
// 						.then((data) => data.json())
// 						.then((post4) => {
// 							console.log("Post 4 Yuklendi!", post4);
// 							fetch("https://jsonplaceholder.typicode.com/posts/5")
// 							.then((data) => data.json())
// 							.then((post5) => console.log("Post 5 Yuklendi!", post5));
// 						});
// 					});
// 				});
// 			});
// 		});

// async function getData() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();
// 	const post2 = await ((await fetch("https://jsonplaceholder.typicode.com/posts/2")).json());

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// }
// getData();

// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// })();

// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number == 1) {
//       resolve({ text: "Selam" });
//     }
//     reject("Bir Problem Oluştu!");
//   });
// };

// getComments(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
    // reject("Bir Sorun Olustu!");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    // resolve(data);
    reject("Bir Sorun Daha Olustu!");
  });
};

// (async () => {
//   try {
//     const users = await getUsers();
//     const post = await getPost(2);

//     console.log(users);
//     console.log(post);
//   } catch (e) {
//     console.log(e);
//   }
// })();

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
