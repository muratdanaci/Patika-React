// function topla(a, b) {
// 	return a + b;
// }

const hello = (name) => {
  // console.log("Hello " + name);
  console.log(`Hello ${name}`);
};

export const topla = (a, b) => a + b; // ES6 module
export const cikar = (a, b) => a - b;
export const text = "Text";
export const user = {
  name: "Murat",
  surname: "Danaci",
};
export const users = [
  {
    name: "Murat",
    surname: "Danaci",
  },
  {
    name: "Beste",
    surname: "Demirkesen",
  },
];
export default hello;

// export { topla, cikar, text, user, users };
