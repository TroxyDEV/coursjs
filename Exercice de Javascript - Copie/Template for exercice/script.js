const log = document.getElementById("log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

const log = 0;
switch (toto) {
    case -1:
        console.log('moins un');
        break;
    case 0: // toto vaut 0 donc ce cas correspond
        console.log(0);
        // NOTE : le break aurait du être placé ici
    case 1: // pas de break pour 'case 0:' les instructions de ce cas sont
            // exécutées aussi
        console.log(1);
        break; // on a un break a ce niveau donc les instructions
               // des cas suivants ne seront pas exécutées
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}