// Function secondaire

const func2 = function () {
  // Je définit une function sans argument appellé func02 stocker dans une constante
  console.log("Je suis la deuxieme function appeler par mon CallBack :) ! ");
};

// Function principale

let func1 = function (callback) {
  // Je créee une function ayant un argument un callback(qui déclenche une autre function dans la function)
  console.log("Je suis la premiere fonction :) !");
  callback(); // Dans le corp de ma fonction j'indique que le callback doit être déclencher
};

func1(func2); // La variable func01 prend comme argument la func02 qui est le callback
