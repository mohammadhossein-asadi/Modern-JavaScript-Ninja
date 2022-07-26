// # Variables
// let age = 25;
// let year = 2022;

// // log things to console
// console.log("Age ", age, "Year ", year);

// age = 30;
// console.log("Age ", age);

// const points = 100;
// console.log("Points ", points);

// var score = 75;
// console.log("Score ", score);

// # Strings

// console.log("hello world");

// let email = "mohammadhosseinasadi.p@gmail.com";
// console.log("Email: ", email);

// // string concatination

// let firstName = "Mohammadhossein";
// let lastName = "Asadi";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// // getting characters

// console.log(fullName[2]);

// // string length

// console.log(fullName.length);

// // string methods

// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase()
// console.log(result,fullName);

// let index = email.indexOf("@")
// let char = email.charAt(22)

// console.log("Index: ",index,"CharAt: ",char);

// # common string methods

// let email = "mohammadhosseinasadinn.p@gmail.com"

// // let result = email.lastIndexOf("m")

// // let result = email.slice(2,5)

// // let result = email.substring(4,10)

// // let result = email.replace("m","w")

// let result = email.replace("n","w")

// console.log(result);

// # Numbers

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operator +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius ** 2;

// order of operation - B I D M A S

// let result = 5 * (10-3)**2

// console.log(result);

// let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / "hello");
// console.log(5 * "hello");

// let result = "the blog has " + likes + " likes";
// console.log(result);

// # Template strings

// const title = "Best reads of 2022";
// const author = "Mario";
// const likes = 30;

// concatenation way
// let result = "The clog called " + title + " by " + author + " has " + likes + " likes"

// console.log(result);
// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // creating html templates
// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes}</span>
// `
// console.log(html);

// # Arrays

// let ninjas = ["seyed", "Hello", "Yohooo"];

// ninjas[1] = "ken"
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ["shaun", "crystal", 20, 30];
// console.log(random);

// console.log(ninjas.length);

// Array methods

// let result = ninjas.join(", ")
// let result = ninjas.indexOf("Yohooo")
// let result = ninjas.concat(["ken", "crystal"]);
// let result = ninjas.push("ken");
// result = ninjas.pop();

// console.log(ninjas);

// # Null & Undefined

// let age = null;

// console.log(age, age + 3, `the age is ${age}`);

// # Booleans& Comparisons

// booleans & comparisons
// console.log(true, false, "true", "false");

// methods can return booleans
// let email = "mohammadhosseinasadi@gmail.com";
// let names = ["mario", "luigi", "toad"];

// let result = email.includes("!")
// let result = names.includes("bowser")

// console.log(result);

// comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = "shaun";

// console.log(name == "shaun");
// console.log(name == "Shaun");
// console.log(name > "crystal");
// console.log(name > "Shaun");
// console.log(name > "Crystal");

// # Loose vs Strict Comparison

// let age = 25;

// Loose comparison (diffrent types can still be equal)

// console.log(age == 25);
// console.log(age == "25");
// console.log(age != 25);
// console.log(age != "25");

// strict comparison (diffrent types cannot be equal)

// console.log(age === 25);
// console.log(age === "25");
// console.log(age !== 25);
// console.log(age !== "25");