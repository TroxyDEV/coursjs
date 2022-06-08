nodeReplace = document.createElement("li"); // Je crée un nouvel élément d'une liste
nodeReplace.innerHTML = "blablabla"; // je lui ajoute du text HTML

var mylist = document.querySelector("ul"); // Je sélection ma liste complete et je la stock dans une variable

console.log(nodeReplace); // Test console

secondli = document.querySelector("li:nth-child(4)"); // Je sélectionne l'élément de la liste précis

var myinserednode = mylist.insertBefore(nodeReplace, secondli); // Je sélection ma liste complete j'utilise la methode insertbefore(node,nodeReference)

haschildnodeornot = mylist.hasChildNodes(); // Renvoie true si la balise sélectionné possede des nodes enfants

console.log(haschildnodeornot);
