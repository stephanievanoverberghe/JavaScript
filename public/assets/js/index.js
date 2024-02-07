/**
 * Étape pour réaliser la calculatrice
 * 
 * 1 - Gérer les fonctionnalités des boutons
 * Implémenter les clics sur les boutons
 * Afficher les opérations et les nombres dans js--calc et js-result
 * Concaténer les chiffres pour former des nombres
 * 
 * 2 - Gérer les opérations mathématique
 * Tant que j'ai pas appuyé sur un opérator, les numéros deviennent des nombres
 * Quand j'ai appuyé sur l'opérator, je peux entrer un second
 * 
 * 3 - Gérer les fonctionnalités spécifique des boutons
 * Implémenter le bouton poure revenir en arrière
 * Implémenter le bouton de nettoyage
 * 
 * 4 - Gérer les décimales
 * 
 * 5 - Gérer les erreurs
 * 
 */

/**
 * 1 - Initiliser les variables
 * 
 * Afficher le nombre que l'utilisateur saisi dans js--calc
 * Afficher l'opérateur choisi dans js--calc à la suite du nombre
 * Afficher le second nombre que l'utilisateur choisi dans js--calc à la suite
 * 
 */


const addNumbers = document.querySelectorAll('.js--add-value');
const addOperator = document.querySelectorAll('.js--add-operator');
let numberCalc = document.querySelector('.js--calc');
const result = document.querySelector('.js--result');

addNumbers.forEach(button => {
    button.addEventListener('click', event => {
        const displayValue = value => {
            if (numberCalc.textContent === '0' || numberCalc.textContent === "") {
                numberCalc.textContent = value;
            } else {
                numberCalc.textContent += value;
            }
            result.textContent = numberCalc.textContent;
        }
        displayValue(event.target.textContent);
    });
});

addOperator.forEach(button => {
    button.addEventListener('click', event => {
        const displayValue = value => {
            operator = value;
            numberCalc.textContent = operator;
        }
        displayValue(event.target.textContent);
    })
})
