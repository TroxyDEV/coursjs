const func01 = (foo) => {
  console.log(foo + "Je suis la fonction numéro 01");
};

const func02 = (cc, foo, callback) => {
  console.log(
    cc + "Je suis la function secondaire qui a comme argument un callback"
  );
  callback(foo);
};
//CC     //Foo //Callback
func02("John", "Lol", func01);

// "John" est égale a CC comme argument et je le définit comme premiere argument a la ligne 12
// et l'appelle dans mon console.log en concatenant
