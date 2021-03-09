const newName = "Xuan Xuan Hung";
							// 012345678910
console.log(newName.substring()); // Return "Xuan Xuan Hung"
console.log(newName.substring(2, 4)); // Return "an"
console.log(newName.substring(2)); // Return "an Xuan Hung"
console.log(newName.substring(-1)); // Return "Xuan Xuan Hung"
console.log(newName.substring(-2, 4)); // Return "Xuan" do start = -2 nó sẽ tự chuyển về 0
console.log(newName.substring(-2, -4)); // Return "" 