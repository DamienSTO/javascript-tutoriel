JAVASCRIPT LES VARIABLES:

Let : crée une variable qui peut être modifier 

const : crée une variable qui est constante, ne peut pas être modifier 

var : crée une variable globale.

const a = 'Salut'
const b = 'Les gens'

a + b = 'SalutLes gens'

a + ' ' + b = 'Salut Les gens'

'${a} ${b}' = 'Salut Les gens'

undefined = absence de valeur 

Toutes les types de varibales sont des objets par défaults.

    typeof b = 'string'

    typeof notes 'object' or typeof undefined 'object'

    typeof 3 = number 

2 * 'a' = NaN = Not a number 

( <script>

        const a = 'Salut'
        const b = 'Les gens'
        const isMajeur = undefined
        const notes = [13,14,8,9,'hello',[1,2,3]]

    const person = {
        firstname:'John',
        lastname: 'Doe',
        age: 24,
        notes: [12,15,19],
        job:{
            name:'Informaticien',
            hours: 35
        },
        [b]:23
    }
    </script>
    )


OPERATEUR COMPLEXE :

VRAI ET VRAI = VRAI 
VRAI ET FAUX = FAUX 
FAUX ET FAUX = FAUX 

a || b inverse = !a && !b

switch (pays)
            case 'FR':
                console.log('Je suis en france')
                break
            case 'US':
                console.log('Je suis au US ')
                break
            default:
                console.log('Je suis dans un pays inconnu')
                break

ça s'active que si pays est égal au case.

EXERCICE :

 const year = 2023

        const beathyear = prompt('Quel est votre année de naissance ?')
        const film = ['LiLo Et Stitch', 'Matrix', 'EvilMan']
        const age = year - beathyear
        if (age <= 13){
            console.log('On vous conseille de regarder  ', film[0])
        }
        else if(age > 13 && age  < 18){
            console.log('On vous conseille de regarder ', film[1] )
        }
        else {
            console.log('On vous conseille de regarder ', film[2])
        }


         let = 18
        if (age >= 18) {
            var suffix = 'Hello'
        }
        console.log(suffix)

        Varibale declarer avec let et const ne sera accessible que dans les bloc courrant et enfant et pas dans les bloc parents (var)

        let chiffre = prompt()
        if (chiffre < 0 || chiffre > 10){
            console.log("Le nombre n'est pas valide") 
            }else{
                for(let i = chiffre; i >= 0;i--){
                    console.log(i)
                }
                }
        

let guess = 8
        let chiffre 
        while (chiffre !== guess){
            chiffre = prompt('Autre chiffre') * 1
            if (chiffre < guess){
                console.log('Plus')
            }else if ( chiffre > guess){
                console.log('Moins')
            }
        }
        console.log('Bienjouer tu es bon')


        FONCTION :

        EXEMPLE :

        ( const canDrive = ) function canDrive (age,pays){
            if (
                (age > 18 && pays === 'FR') ||
                (age > 16 && pays === 'US')
            ){return true
            }
            return false

        }
        console.log(canDrive(15,'FR'))


Juste avec fonction on peut l'appeller avant que ça soit définis ( on peut metre un console avant la fonction dans le script)
Avec le const faut mettre le console apres ça limite la porter de la fonction.

function greeting(name){
            console.log(`Bonjour ${name}`)
        }
        greeting('John')
        greeting('Jane')


on va utiliser this dans le console.log dans une fonction sans parametre 
et va en recevoir un lorsqu'on va appeler la fonction

const a = {
    firstname:'John',
    lastname: 'Doe',
    fullname: function (){
        console.log(this)
    }
}
a.fullname()


METHODE /
il existe plein de methode deja prefaites
je peux me renseigner plus sur mdn web docs
on va utilisre ça sur les objet/ classe qu'on va createServer

fonction flèché n'alter pas avec this 
ça retourne directement, c'est plus concis 


FUNCTION :

split : ça prend un paterne et ca divise la chaine avec ce paterne . ( ça converti une chaine de caractere en tableau)

slit : Bonjour == [B,o,n,j,o,u,r]
reverse : [B,o,n,j,o,u,r] == [r,u,o,j,n,o,B]
join : [B,o,n,j,o,u,r] == Bonjour


function isPalindrome (word){
            const lettre = word.split('')
            lettre.reverse()
            let lettreI = lettre.join('')
            console.log(lettreI)
            if (word.toUpperCase() === lettreI.toUpperCase()){
                    console.log("c'est un palindrome")
                }else{
                    console.log("Ce n'est pas un palindrome")
                }
PLUS SIMPLE 

function isPalindrome (word){
    const LettreI = word
        .split('')
        .reverse()
        .join('')
    return word.toUpperCase() === LettreI.toUpperCase()