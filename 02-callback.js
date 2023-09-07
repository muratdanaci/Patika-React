// setTimeout(() => {
//   console.log("Merhaba");
// }, 5000); // 5 sn sonra merhaba yazisi bastirir

// setInterval(() => {
// 	console.log("Merhaba ben her saniye çalışacağım.");
// }, 1000); // her 1 saniyede mesaji bastirir.

const sayHi = (cb) => {
  cb();
};

sayHi(() => {
  console.log("Hello");
});

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
		console.log("Users Yuklendi!", users);

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((post1) => {
				console.log("Post 1 Yuklendi!", post1);

				fetch("https://jsonplaceholder.typicode.com/posts/2")
				.then((data) => data.json())
				.then((post2) => {
					console.log("Post 2 Yuklendi!", post2);
					
					fetch("https://jsonplaceholder.typicode.com/posts/3")
					.then((data) => data.json())
					.then((post3) => {
						console.log("Post 3 Yuklendi!", post3);
						
						fetch("https://jsonplaceholder.typicode.com/posts/4")
						.then((data) => data.json())
						.then((post4) => {
							console.log("Post 4 Yuklendi!", post4);
							fetch("https://jsonplaceholder.typicode.com/posts/5")
							.then((data) => data.json())
							.then((post5) => console.log("Post 5 Yuklendi!", post5));
						});
					});
				});
			});
		});
