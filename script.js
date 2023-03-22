


//--------------1-variables---------------------------// 

//let est un autre façan de crée un variable (sert juste a creation)
let numberOfCats = 2;
let numberOfDogs = 4;
/////////façon ecrit une variable en js 
let // pour créé
numberOfCats2 // le nom de la variable
= // comment initialiser une varible 
2 // valeur de la variable
; // definie la fin de attrubution de valeur à la varible

//-------------------------1.2 constantes----------------------//

//Ce sont simplement des variables qui ne seront pas mutables.
// On donnera une valeur de départ et on ne pourra plus changer 
//la valeur par la suite. 
//Ainsi s’il y a une erreur de logique dans votre code 
//changeant la valeur du variable (constante) qui ne devait 
//pas changer, javascript retournera une erreur.

//Par exemple :

const nombrePostParPage = 20;
nombrePostParPage = 30; // Retournera une erreur dans la 
//console car on ne peut plus changer sa valeur

//----------------2-le-type-de-variables-------------//
// 1er exemple type de varible number (nombre)
let numberOfDogs2 = 4;


//En programmation, les nombres entiers sont aussi 
//appelés entiers ou integers ; les nombres avec des chiffres 
//après la virgule sont aussi appelés nombres en virgule flottante 
//ou floating-point.

// 2er exemple type de varible  string (chaîne de caractères)
let nomDuDog = "Rex";
//autre exemple de chaîne de caractères
let ageDuDog = "3";

// 3er exemple type de varible boolean (valeur logique)
let dogMale = true;
let dogFemale = false;


// 4eme exemple autre type

//echniquement, il y a trois autres types de données
// primitifs dans JavaScript :  
// null  ,   undefined  et   symbol  .

//------------------3-les---objets-------------//

// les objets sont des types complex

let myBook1 = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};

// les objets sont ecrit  

let myBook2 // declaration de objet
= // attribution des valeurs de objet
{ // defini de debut de objets 
    title // nom de la classe 
    : // attribution des valeurs a la classe
    'The Story of Tau' // la valeur de la classe
    , // fin de la classe
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
} // defini de fin de objets 
;// definie la fin la saisie de objet

//affichage les different elements de objet 

let myBook3 = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};
let bookTitle1 = myBook.title;  // "L'Histoire de Tao"
let bookPages1 = myBook.numberOfPages  // 250

//La notation bracket (bracket notation)
//Pour accéder à un sous élément vous pouvez utiliser 
//les brackets avec la valeur du sous élément. Par exemple :

let myBook4 = {
       title: "L'Histoire de Tao",
       author: "Will Alexander",
       numberOfPages: 250,
       isAvailable: true
    };
    let bookTitle2 = myBook["title"];  // "L'Histoire de Tao"
    let bookPages2 = myBook["numberOfPages"];  // 250

  //  L'intérêt ici c’est qu’on va pouvoir mettre entre bracket 
  //une variable qui contient en string le nom de la propriété 
  //que l’on souhaite atteindre. Par exemple :   

  let myBook5 = {
       title: "L'Histoire de Tao",
       author: "Will Alexander",
       numberOfPages: 250,
       isAvailable: true
    };
    let propertyToAccess = "title";
    let bookTitle = myBook[propertyToAccess];  // "L'Histoire de Tao"


//Pour cette classe, nous souhaitons que chaque   
//Book  ait un titre, un auteur et un nombre de pages. 
//Pour cela, vous utilisez ce qu'on appelle un constructor.
//comment ecrit un constructor
class Book {
    constructor(title, author, pages) {
    }
}
//exemple de constructor

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

//Ici, le mot clé   this  fait référence à la nouvelle instance.
// Donc, il utilise la notation dot pour attribuer les valeurs 
//reçues aux clés correspondantes.

//Maintenant que la classe est terminée, vous pouvez créer 
//des instances par le mot clé   new  :

let myBook6 = new Book("L'Histoire de Tao", "Will Alexander", 250)
//Cette ligne crée l'objet suivant :
{
    title: "L'Histoire de Tao";
    author2 :"Will Alexander";
    pages2 : 250
}

//------------------------------4 ARRAY-----------------//
//exemple array
let guests1 = ["Sarah Kate", "Audrey Simon", "Will Alexander"];

// comment ecrit un array

let guests2 //on enregiste dans une varible
= // en attruble une valeur
[ // debut de array
    "Sarah Kate" // valeur de array 
, // declaré un autre element de array
 "Audrey Simon", // autre element de array 
 "Will Alexander"
] // fin de array
;// definie la fin la saisie de array

// comment raplelle une valeur de array

let firstGuest = guests[0]; // "Sarah Kate"
let thirdGuest = guests[2]; // "Will Alexander"
let undefinedGuest = guests[12] // undefined

//     la propriete length

//La propriété   length  d'un tableau 
//indique le nombre d'éléments qu'il contient :

//exemple :
let guests = ["Will Alexander", "Sarah Kate", "Audrey Simon"];
let howManyGuests = guests.length; // 3

//Pour ajouter un élément à la fin d'un tableau, 
//utilisez sa méthode push :

guests.push("Tao Perkington"); 
// ajoute "Tao Perkington" à la fin de notre tableau guests

//Pour ajouter votre élément au début du tableau plutôt qu'à la fin,
// utilisez la méthode   unshift  :

guests.unshift("Tao Perkington"); 
// "Tao Perkington" est ajouté au début du tableau guests

//Pour supprimer le dernier élément d'un tableau, 
//appelez sa méthode  pop  , sans passer aucun argument :

guests.pop(); 
// supprimer le dernier élément du tableau

//---------------------5 où est utiliser le JS----------------//

//JSBin est un excellent outil pour tester des extraits de code 
//en JavaScript : c'est pour cette raison que je l'ai utilisé 
//pour démontrer certains outils ou principes. Voyons comment 
//il exécute le code.

//Dans JSBin, vous pouvez écrire du code ligne par ligne
// dans le volet JavaScript, et utiliser le bouton Run 
//pour l'exécuter. JSBin parcourt alors vos lignes de code 
//et les exécute l'une après l'autre. L'ordre est donc important.

//Par exemple, ce morceau de code :

let numberOfGuests1 = 20;
console.log(numberOfGuests); // 20

//n'est pas identique à :

console.log(numberOfGuests); // undefined
let numberOfGuests2 = 20;

//-------------------------------if else-----------------------//

//L'instruction   if  /  else  est une des plus universelles 
//en programmation. Qu'il s'agisse de réagir à une saisie de 
//l'utilisateur, aux résultats de calculs ou de simplement vérifier 
//si quelqu'un est connecté ou non, vous aurez souvent à utiliser 
//des instructions if/else.

//IF (SI) l'utilisateur est connecté, ouvrir sa page d'accueil)

//ELSE (SINON) revenir à la page de connexion)

//C'est ce qu'on appelle une instruction conditionnelle, parce qu'elle vérifie 
//si certaines conditions sont réunies, et réagit en conséquence. 
//Voyons les types de conditions qui peuvent être utilisés dans 
//ces instructions.

//Utilisez des valeurs boolean
//En JavaScript, si on utilise des   boolean 
// (bouléens, en français) simples pour les instructions 
//  if  /  else  , la syntaxe se présente comme suit :

if (myBoolean) {
    // réaction à la valeur vraie de myBoolean
    } else {
    // réaction à la valeur faux de myBoolean
    }

// Dans le cas ci-dessus, vous obtiendrez 
//l'impression sur la console de   "Utilisateur connecté!" 
// , car le boolean   userLoggedIn  a la valeur true. 
//S'il avait la valeur false, vous obtiendriez à la place
//   "Alerte, intrus!"

//vous pouvez aussi utiliser des expressions de comparaison, 
//qui comparent des valeurs entre elles.

//Les expressions de comparaison vous permettent de 
//comparer deux valeurs par les opérateurs suivants :

{/* <   inférieur à ;

<=   inférieur ou égal à ;

==   égal à ;

>=   supérieur ou égal à ;

>   supérieur à ;

!=   différent de. */}

//exemple:

const numberOfSeats = 30;
const numberOfGuests = 25;
if (numberOfGuests < numberOfSeats) {
// autoriser plus d'invités
} else {
// ne pas autoriser de nouveaux invités
}

//Vous pouvez aussi chaîner les instructions   if  /  else 
//pour réagir à des conditions potentielles multiples :

if (numberOfGuests == numberOfSeats) {
    // tous les sièges sont occupés
    } else if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
    } else {
    // ne pas autoriser de nouveaux invités
    }


    //Découvrez l'égalité :  ==  ou ===
    //En JavaScript, toutes les égalités ne sont pas nées égales :
    
   // Il y a deux façons de vérifier si deux valeurs sont égales 
   //en JavaScript :  ==  et  ===, aussi appelées égalité simple et égalité stricte :
    
    //l'égalité simple vérifie la valeur, mais pas le type. Donc ceci renvoie la valeur true  :
    5 == "5"
    
    //par contre, l'égalité stricte vérifie à la fois la valeur et le type. Donc :
    5 === "5"
    //renvoie   false  , car on compare un   number  à une   string  .
    
    //De même, il y a deux opérateurs d'inégalité,   !=  et   !==  , avec la même distinction.
    
    //Comprenez les conditions multiples
    //Dans certaines situations, vous souhaitez vérifier plusieurs conditions pour un même résultat ; par exemple dans la même instruction if. Pour cela, il existe des opérateurs logiques :
    
    //&&  – ET logique – pour vérifier si deux conditions sont toutes les deux vraies ;
    
    //||    – OU logique – pour vérifier si au moins une condition est vraie ;
    
    //!    – NON logique – pour vérifier si une condition n'est pas vraie. 

let userLoggedIn1 = true;
let UserHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount; // true
userLoggedIn && userHasMegaPremiumAccount; // false

userLoggedIn || userHasPremiumAccount; // true
userLoggedIn || userHasMegaPremiumAccount; // true

!userLoggedIn; // false
!userHasMegaPremiumAccount; // true


//Appréhendez une notion importante : le scope des variables
//En JavaScript, les variables créées par   let  ou   const 
// ne peuvent être vues ou utilisées qu'à l'intérieur du bloc
// de code dans lequel elles sont déclarées.

//Vous rencontrerez certainement le mot clé   var  
// pour la création de variables au cours de votre carrière 
//de développeur. Les variables déclarées ainsi n'ont pas un 
//scope de bloc mais un scope de fonction ; donc elles n'ont 
//pas tout à fait le même comportement que celles que je décris
// dans ce cours. Pour plus d'informations, je vous conseille cet
// article (en anglais) :

//https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/

//Un bloc de code, aussi souvent appelé bloc tout court, est une section
// de code incluse entre accolades  {}.

//Ce phénomène est appelé portée des variables 
//ou block scope (en anglais).  Voici un exemple :

let userLoggedIn2 = true;

if (userLoggedIn) {
   let welcomeMessage = 'Welcome back!';
} else {
   let welcomeMessage = 'Welcome new user!';
}

console.log(welcomeMessage); // renvoie une erreur


//Dans ce code, nous avons deux blocs de code issus de 
//l'instruction if  /   else  . Ils sont mis en évidence 
//dans l'image ci-dessous :

//Scopes surlignés
//Scopes surlignés
//Les deux blocs orange et rose déclarent une variable par
// let welcomeMessage  . Néanmoins, ces variables ne sont
// disponibles qu'à l'intérieur des blocs où elles sont déclarées.
// C'est pourquoi, quand vous essayez d'afficher le contenu de   welcomeMessage 
// sur la console, vous obtenez une erreur : pour le code en dehors des blocs 
//(aussi appelé portée extérieure ou parente), il n'y a pas de variable   welcomeMessage  !

//Donc, comment obtenir le comportement voulu ? Comment passer 
//des valeurs vers l'extérieur depuis l'intérieur d'un bloc de code ?

//Pour cette situation, une méthode pourrait être de déclarer la variable
// dans la portée extérieure, puis de la modifier à 
//l'intérieur des blocs if  /  else  :

let userLoggedIn = true;
let welcomeMessage = ''; // déclarer la variable ici

if (userLoggedIn) {
    welcomeMessage = 'Welcome back!'; // modifier la variable extérieure
} else {
    welcomeMessage = 'Welcome new user!'; // modifier la variable extérieure
}

console.log(welcomeMessage); // imprime 'Welcome back!'
//Ici, du fait que la variable soit déclarée dans le scope parent,
// elle est disponible et accessible partout, et peut être modifiée correctement.
//----------------------------switch--------------------------------//

//Utilisez les instructions switch
//Et si vous souhaitez vérifier la valeur d'une variable 
//par rapport à une liste de valeurs attendues, et réagir 
//en conséquence ? Pour cela, vous pouvez utiliser l'instruction
//   switch  :

//Supposons que vous ayez quelques objets utilisateurs.
// Vous souhaitez vérifier quel type de compte a chacun,
// pour envoyer un message personnalisé :

let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

//Vous pouvez ici utiliser une instruction  
// switch  , qui prend la variable à vérifier et 
//une liste de valeurs, comme différents cas :

switch (firstUser.accountLevel) {
    case 'normal':
          console.log('You have a normal account!');
    
    break;
    case 'premium':
          console.log('You have a premium account!');
    
    break;
    case 'mega-premium':
          console.log('You have a mega premium account!');
    break;
    
    default:
          console.log('Unknown account type!');
    }


  //  Après le code à exécuter dans chaque instruction case 
  // , ajoutez l'instruction break  . Si vous ne le faites pas, 
  //JavaScript continuera l'exécution des cas suivants (en cascade)
  // jusqu'à rencontrer une instruction  break  ou la fin de l'instruction   switch 
  // . Comme vous pouvez le voir dans l'exemple, vous pouvez aussi ajouter un cas  
  // default  qui ne sera exécuté que si la variable que vous vérifiez ne 
  //correspond à aucune des valeurs répertoriées.

  //Le switch peut servir dans différents cas mais surtout rendre plus facile 
  //à lire l'enchaînement de condition  if/else  .
    
   // Par exemple voici comment on aurait écrit l’exemple précédent avec des if/else :

   if (firstUser.accountLevel === 'normal' ) {
          console.log('You have a normal account!');
    } else if (firstUser.accountLevel === 'premium' ) {
          console.log('You have a premium account!');
    } else if (firstUser.accountLevel === 'mega-premium' ) {
          console.log('You have a mega premium account!');
    }  else {
          console.log('Unknown account type!');
    }

   // Comme vous pouvez le voir, les instructions   switch 
   // utilisent aussi des accolades. C'est un autre exemple 
   //de bloc de code, donc les variables éventuellement déclarées 
   //à l'intérieur d'une instruction switch  ne seront pas disponibles
   // pour le code environnant !

//En résumé
//Félicitations pour l'achèvement de ce chapitre ! 
//Nous avons traité beaucoup de choses ici. Vous avez :

//appris le fonctionnement des instructions   if  /  else  ;

//vu les différents types de conditions pouvant être utilisés 
//pour les instructions if/else ;

//appris à regrouper les différentes conditions avec des opérateurs logiques ;

//exploré la portée des variables, et les conséquences
// qu'elle a sur la structure du code ;

//découvert l'instruction switch  pour comparaison à une 
//liste de valeurs attendues.

//----------------------6 les boucles --------------------------//

//Utilisez la boucle for pour savoir "combien de fois ?"
//Supposons que vous ayez à faire embarquer 10 passagers, *
//et que pour l'instant vous n'accordiez pas d'importance à 
//l'ordre de leur embarquement. Utilisez une boucle for  
//pour les embarquer un par un jusqu'à atteindre 10 :

const numberOfPassengers1 = 10;
for (let i = 0; i < numberOfPassengers; i++) {
   console.log("Passager embarqué !");
}

//Pour cette boucle for  , créez une variable d'indice i  
//qui sert de compteur pour le nombre d'exécutions de la boucle.
// C'est pour cette raison qu'elle démarrera à zéro, car on n'a 
//pas encore parcouru la boucle.

//La deuxième commande dans les parenthèses   for  
//est la condition de poursuite de la boucle : dès 
//qu'elle s'évalue comme   false  , on quitte la boucle. 
//Dans ce cas, vous souhaitez l'exécuter autant de fois 
//qu'il y a de passagers, donc quand l'indice  i  atteint
// 10 (après 10 boucles), vous souhaitez l'arrêter, car il 
//n'y a plus de passager.

//La troisième commande demande à la boucle   for  
//d'incrémenter   i  (ajouter 1) à chaque exécution.
// C'est ce qui permet de suivre le nombre d'exécutions de la boucle.

//JavaScript termine la boucle avant d'exécuter tout autre 
//code, donc si vous deviez écrire ceci :

const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
   console.log("Passager embarqué !");
}

console.log("Tous les passagers sont embarqués !");


//la dernière sortie de console s'imprimerait après 
//l'embarquement des 10 passagers.

//Le travail sur des indices, c'est bien, mais
// si vous souhaitiez utiliser un tableau de passagers 
//pour les embarquer dans un ordre précis ?


//--------------------------boucle for of et for in ---------------------------//
//Travaillez sur des tableaux :  for… of et for… in

//Dans beaucoup de cas, vous aurez un tableau et devrez 
//le parcourir, pour faire quelque chose sur chaque élément.
// Il peut s'agir de mettre à jour les prix sur un menu, de traiter
// les données d'une base de données, ou d'embarquer des passagers dans l'ordre.

//L'ancienne façon de parcourir un tableau dans une boucle était 
//d'utiliser la boucle   for  vue précédemment avec sa propriété   
//length  . Par exemple, avec un tableau appelé   passengers  :

for (let i = 0; i < passengers.length; i++) {
    console.log("Passager embarqué !");
 }

//Bien que ceci fonctionne, il y a deux façons plus faciles de 
//parcourir en boucle des tableaux (ou de faire une itération sur leurs éléments).

//La boucle for… in
//La boucle   for…  in  est très comparable à l'exemple de boucle   for
//  normale, mais elle est plus facile à lire, et effectue tout le travail
// d'itération pour vous :

const passengers1 = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
   console.log("Embarquement du passager " + passengers[i]);
}

//Comme dans l'exemple précédent,   i  démarre automatiquement 
//à zéro, et s'incrémente à chaque boucle. Vous imprimez donc   
//passengers[0]  , puis  passengers[1]  , puis   passengers[2]  ,
// etc., jusqu'à terminer l'itération sur tous les passagers. 
//Vous pouvez bien sûr imprimer chaque élément sur la console,
// car chacun est une chaîne contenant le nom du passager.

//La boucle for… of
//Pour les cas où l'indice précis d'un élément n'est pas 
//nécessaire pendant l'itération, vous pouvez utiliser une boucle   for… of  :

//En reprenant l'exemple précédent et en utilisant à la place
// une boucle   for… of  , vous obtenez :

const passengers = [
    {
        name: "Will Alexander",
        ticketNumber: 209542
    },
    
    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },
    
    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },
    
    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengers) {
   console.log('Embarquement du passager ' + passenger.name + 
   ' avec le ticket numéro ' + passenger.ticketNumber);
}

//------------------------------boucle while----------------------// 

//Utilisez la bouclewhile  
//Une boucle   while  vérifie si une condition est vraie.
// Si c'est le cas, la boucle se poursuit ; sinon elle s'arrête. 
//En revenant à l'exemple de l'embarquement d'avion : 
//supposons que vous ayez des variables représentant le 
//nombre de sièges restants et le nombre de passagers restants. 
//Vous souhaitez continuer l'embarquement jusqu'à l'épuisement 
//du nombre de sièges ou de passagers :

let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges


//Cette boucle   while  poursuit son exécution jusqu'à ce que 
//l'un des nombres   seatsLeft  et   passengersStillToBoard  
//atteigne zéro, et à ce point elle se termine.

//---------------------------en resume------------------------------//


// Dans ce chapitre, vous avez abordé deux façons de répéter les tâches :

// la boucle   for  , pour un nombre d'itérations fixe ;

// la boucle   while  , quand le nombre d'itérations nécessaires est inconnu.