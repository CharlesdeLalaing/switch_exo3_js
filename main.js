// - # Exo 3 Switch
//     - ### Déclarez une variable dont la valeur sera donnée par l'utilisateur.

//     - ### Faites un switch, si la variable donnée est divisible par 2, faite une alert qui renvoit "Le nombre est un multiple de 2" sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur n'a pas rentré un nombre "Ceci n'est pas un nombre"

let multiple = prompt("veuillez choisir un chiffre svp.");

switch (multiple % 2) {
    case 0:
    alert('Le nombre est un multiple de 2');
    break;
    case 1:
    alert("Le nombre n'est pas un multiple de 2");
    break;
    default:
    alert("Ceci n'est pas un nombre");
}
