var names = ["Arqam", "Hamza", "Shoaib", "Salman"];
for (i = 0; i < names.length; i++)
  console.log(
    `As-Salam-o-Alikum ${names[i]} I would like to invite you to dinner`
  );

console.log("\n-------------------\n");

var refused = "Salman";
console.log(refused + " Can't Come to dinner");
names[3] = "ALi";

for (i = 0; i < names.length; i++) {
  console.log(
    `As-Salam-o-Alikum ${names[i]} I would like to invite you to dinner`
  );
}
console.log("\n-------------------\n");

names.unshift("Hassan");
names.splice(2, 0, "Habib");

for (i = 0; i < names.length; i++) {
  console.log(
    `As-Salam-o-Alikum ${names[i]} I would like to invite you to dinner`
  );
}
