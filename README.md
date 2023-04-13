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

EXERCICE D'AUJOURD'HUI 


    const phrase = `Assemblage oral ou écrit capable de représenter l'énoncé complet d'une idée.
La phrase peut consister en un mot unique (ex. Viens !), mais contient habituellement un second terme qui est le sujet de l'énoncé (ex. Tu viens ?).`
        const frequence = {}
        const mots = phrase
            .toLowerCase()
            .replaceAll(',','')
            .replaceAll('!','')
            .replaceAll('?','')
            .replaceAll('(','')
            .replaceAll(')','')
            .replaceAll('"','')
            .split(' ')
        for(let mot of mots){
            if (mot !==''){
                if(frequence[mot]){
                    frequence[mot]++
                }else{
                    frequence[mot] = 1
                }
            }

        }
        const frequenceA = []
        for(let k in frequence){
            frequenceA.push({
                mot: k,
                count:frequence[k]
            })
        }
        frequenceA.sort((a,b) => b.count - a.count)
        console.log(frequenceA)
        console.log(`les mots les plus fréquents sont : ${frequenceA[0].mot}, ${frequenceA[1].mot},${frequenceA[2].mot}`)


/*
            const students = [
                {
                    name: 'John',
                    notes: [1,20,18,19,12]
                },
                {
                    name: 'Sophie',
                    notes: [17,12,14,15,13]
                },
                {
                    name: 'Barbara',
                    notes: [18,17,18,19,12]
                },
                {
                    name: 'Manon',
                    notes: [2,7,10,15,14]
                },
                {
                    name: 'Jane',
                    notes: [17,18,3,11,5]
                }

            ]

            const Moyenne = (notes) => {
                let sum = 0
                for (let note of notes){
                    sum = sum + note
                }
                return sum / notes.length 
            }
            
            for (let student of students){
                student.Moyenne = Moyenne(student.notes)
                student.plusnul = Math.min(...student.notes)
                student.meilleur = Math.max(...student.notes)
            }

            const cStudents = (a,b) =>{
                return b.Moyenne - a.Moyenne
            }

            students.sort(cStudents)

            const podium = (student) =>{
                return `${student.name} avec une moyenne de ${student.Moyenne}, meilleur note ${student.meilleur}, pire note (${student.plusnul})`
            }

            console.log(`Top 3 étudiant
                1:${podium(students[0])}
                2:${podium(students[1])}
                3:${podium(students[2])}
            `)

            console.log(students)




        /*
            function isPalindrome (word){
                 const LettreI = word
                    .split('')
                    .reverse()
                    .join('')
                if (word.toUpperCase() === LettreI.toUpperCase()){
                    console.log("c'est un palindrome")
                }else{
                    console.log("Ce n'est pas un palindrome")
                }
            
        }

        const words = {
            kayak: true,
            SOS: true,
            Kayak: true,
            Bonjour: false,
        }
        for (let word in words){
            if (isPalindrome(word)!== words[word]){
                console.error(`isPalindrome(${word})`)
            }
        }
        */

        CLASSE / PROTOTYPE :

        
        const Moyenne = (notes) => {
            let sum = 0
            for (let note of notes){
                sum = sum + note
            }
            return sum / notes.length
        }
       
        class Student {
            ecole = 'Michelet'
            constructor (prenom,nom){
                this.prenom = prenom
                this.nom = nom
            }
            setNotes (notes){
                this.notes = notes
            }

            canPass (){
                return Moyenne(this.notes) >= 10

            }
        }

        const john = new Student('John', 'Doe')
        const jane = new Student('Jane', 'Doe')
        john.notes = ([10,10,9])
        jane.setNotes([15,18,19])
        console.log(john.canPass(),jane.canPass())

        const Moyenne = (notes) => {
            let sum = 0
            for (let note of notes){
                sum = sum + note
            }
            return sum / notes.length
        }
       
        class Student {
            ecole = 'Michelet'
            constructor (prenom,nom){
                this.prenom = prenom
                this.nom = nom
            }
            set notes (v) {
            if (Array.isArray(v)){
                this._notes = v
            }
            }
            
            get name (){
                return `${this.prenom} ${this.nom}`
            }
            canPass (){
                return Moyenne(this._notes) >= 10

            }
        }

        const john = new Student('John', 'Doe')
        const jane = new Student('Jane', 'Doe')
        john.notes = [19]
        jane.notes = [15,18,19]
        console.log(john.name)


        extend ça rajoute un prototype

        TP CLASS :
        class Livre {
            #page = 1
            constructor(title,pages){
                this.title = title
                this.pages = pages
                
            }
            get page (){
                return this.#page
            }

            nextPage(){
                if(this.#page < this.pages){
                    this.#page++
                }
            }
            close(){
                this.#page = 1
            }
        }

        class Library {

            #books = []
            
            addBook(book){
                this.#books.push(book)
            }
            addBooks(books){
                for(let book of books){
                    this.addBook(book)
                }
            }
            findBooksByLetter(letter){
                const found = []
                for(let book of this.#books){
                    if(book.title[0].toLowerCase() === letter.toLowerCase())
                    found.push(book)
                }
                return found
            }
                
        }

        const b = new Livre(`Seigneur des anneaux`, 200);
        console.log(b.page)
        b.nextPage()
        console.log(b.page)
        b.close()
        console.log(b.page)

        const l = new Library()
        l.addBook(b)
        l.addBooks([
        new Livre('Ready player one', 100),
        new Livre('Oui-oui', 10),
        new Livre('Sillage', 50),
        ])
        console.log(l.findBooksByLetter('S'))


        /*
        class Rectangle {
            constructor (width, height){
                this.width = width
                this.height = height
            }
            get perimeter (){
                return (this.width + this.height)*2
            }
            get isValid (){
                return this.width > 0 && this.height > 0
            }

            isBiggerThan (shape){
                return this.perimeter > shape.perimeter
            }
        }

        class Square extends Rectangle {
            constructor(width){
                super(width,width)
            }
        
        }
        

        const r = new Rectangle(10,20);
        console.log(r.perimeter)
        console.log(r.isValid)
        const r2 = new Rectangle(-10,20);
        console.log(r2.isValid)
        const c = new Square(10);
        console.log(c.perimeter)
        console.log(c.isBiggerThan(r))
        */


        EXCEPTION JAVASCIPT
  
        ça coupe entierement le script 

        class Square extends Rectangle {
            constructor(width){
                super(width,width)
            }
        
        }
        try{
            const r = new Rectangle(-10,20)
        } catch(e){
            console.log(e.message)
        }

        PromptError 

        pour verifier err classi ou prompt on met if(e instanceof promptError){
        
        }else{
            console.log('Erreur classique')
        }


        METHODES ;

        at : recupere un index particulier ( peut aussi negative)

        concat : peut concatener des tableau ensemble pour les fusionner 

        fill : remplie des tableaux avec valeau precises

        filter : filtre les resultats (ex :
        const notes = [12,10,17,9]
        const bonnenotes = notes.filter((note) => note >= 10)
        console.log(bonnenotes)   
        )

        find : renvoye le premiere element de la condition 

        findIndex : renvye l'index du premiere element de la condition.

        findLast : bref t'as compris quoi c'est l'inverse.

        findLastIndex : la même chose.

        from : ...from('foo') = ["f","o","o"]

        ForEach : ça boucle dans la liste et donne accès a l'element et son index  .
        foo.forEach((e, i) => {
            console.log(`element = ${e}, index = ${i}`);
        })

        includes : repond true ou false pour voir si quelque chose se trouve dans un tableau.
        foo.includes("f")

        indexOf : on lui passe une valeur et nous renvoye son index .

        join : ça permet de joindre les caracteère avec different type de liaison. 

        map : applique une fonction a chaque element 
        (ex : 
        const array1 = [1,4,9,16]
        const map1 = array1.map(x => x * 2));
        == [2,8,18,32]

        pop : retire le derniere element de la liste.

        push : envoye un nouvelle element dans le tableau 

        reduce : reduit les differentes valeurs et obtenir qu'une valeur en sortie.

        reduceRight : droite a gauche 

        slice : recupere une parti d'un tableau . ( ça crée un nouveau tableau)

        unshift : insert des eleement au début des tableau.

        METHODE OBJET :

        assign : assigne les propriété d'un objet a un autre objet.

        create : crée un nouvel objet en utilisant le prototype d'un autre objet.

        defineProperties : definir la propriété dans un objet.

        entries : renvoye un tableau avec les cléfs et les valeurs.

        freeze : gele un objet pour que celui-ci ne puisse plus etre modifier 


        keys : donne un tableau de toutes les cléfs.

        values : donne un tableau avec toutes les valeurs.


        SUCRE SYNTAXIQUE :

        ex :
        let i = 0

        i++

        +=
        *=
        /=

        const double = n => n * 2
        console.log(double(3))

        const a = 3
        const b = a || 5
        console.log(b)
        renvoye 3
        si a = 0 
        renvoye 5

        let a 
        const b = a ?? 5
        renvoye 5

        let a = null 
        a ??= 3 
        met 3 dans a

        let a = 0
        a ||= 3 
        met 3 dans a que si c'est 0


        const person = {firstname: 'John'}
        console.log(person?.age?.toString())
        quand on met ? permet de voir si jamais ça existe .

        const [premierNote, secondesNote] = [12,17,18]
        ça donne 12 et 17

        const [premierNote, ...autreNotes] = [12,17,18]
        ça donne la premiere et les autres notes.

        TIMER :

        function wait(duration) {
        const t = Date.now()
        while(Date.now() - t < duration){
            
        }
        
    }
    
    function message(nombre)  {
        for (let i = nombre; i >= 0; i--) {
            wait(1000)
            console.log(i)
            
        }
    }
    message(10);


    PROMISES :


     const p = new Promise((resolve,reject) => {
            resolve(4)
        })

        p.then((e) => {
            console.log('le nombre', e)
            throw new Error('echec')
        })
        .then((e) => console.log('Le nombre 2',e))
        .catch((e) => {
            console.log('Erreur', e)
            return 2
        })
        .then(n => console.log(2))
        .finally(() => console.log("aaa"))



        const p = new Promise((resolve,reject) => {
            resolve(4)
        })

        function wait(duration){
            return new Promise((resolve, reject) =>
                setTimeout(() => {
                    resolve(duration)
                }, duration )

            )}

            function waitFail(duration){
            return new Promise((resolve, reject) =>
                setTimeout(() => {
                    reject(duration)
                }, duration )

            )}


        wait(2000)
                .then(()=> {
                    console.log('Attente 2s')
                    return wait(2000)
                })
                .then(() =>{
                    console.log('Attente 1s')
                })
        

        allSettled : ignore les promesses qui echoue.

    any : donne le resultat de la premiere qui reussis.

    race : si la premiere promesses echoue alors ça echoue.

    async function main(){
                const duration = await wait(2000)
                console.log(`Duration ${duration}`)
                return 5
            }
        
            const p = new Promise((r) => {
                console.log('Hello')
                r(2)
            })
            p.then(() => console.log('then'))
            waitSync(2000)
            console.log('les gens')


        FETCH :


        text : retourne une promesse.

        json : renvoye le corp de la réponse parsé en json 

        async function fetchuser (){
            const r = await fetch('https://jsonplaceholder.typicode.com/users',{
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title: 'Mon premier'})
            }
            )
            if (r.ok === true){
                return r.json();
            }
            throw new Error('Impossible de contacter le serveur ')
        }
        fetchuser().then(users => console.log(users))


        differentes option qu'on peut utiliser sur fetch :

        redirecte : specifie comment on doit suivre notre redirection .


        headers : renvoye un objet de tye headers qui va contenir les differente entete.


        request : objet qui peut representer la requete.

        arreter un fetch : 

        const a = new AbortController()
    Promise.race([
        fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=2000',{
            signal: a.signal

        }),
        fetch('https://jsonplaceholder.typicode.com/users/?_limit=3',{
            signal: a.signal
        })
    ]).then(r => r.json()).then(body => {
        a.abort()
        console.log(body)
        
    })


    Les modules :

    export dans le fichier java et import dans l'index html.

    import * as A from './array.js' ça import tout est nommé A mais c'est pas trop conseiller c'est mieux un par un .

    L'objet Date :

    Va nous permettre de representer une date et en interne c'est representer sous forme de nombre de secondes ( js minisecondes)

    un constructor = date()

    gethours = pour recuperer les heures 

    getdate pour les jours.

    toUTCString() renvoye jour heures.

    ToLacalDateString() ça met le jour france et on peut mettre en parametre l'endroit.

    toLocalString() date et temps

    toLocalString()(undefined,{dateStyle: 'long', timeStyle:'long'}) = date de l'ordianteur . 

    to localtimestring() heure minute seconde 


     ajouter un jour au jour d'aujourd'hui
    function addDays(date, days){
            const newDate = new Date(date.getTime())
            newDate.setDate(date.getDate() + days)
            return newDate
        }
        const today = new Date()
        const tomorrow = addDays(today,1)
        console.log(today)
        console.log(tomorrow)
    </script>



function addDays(date, days){
            const newDate = new Date(date.getTime())
            newDate.setDate(date.getDate() + days)
            return newDate
        }
        const MONTHS = 1
        const DAYS = 2
        const YEARS = 0

        function addInterval(date, n , unit){
            const parts = [
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds(),
        ]
            const newDate = new Date(date.getTime())
            switch (unit){
                case DAYS:
                    newDate.setDate(newDate.getDate() + n)
                    break;
                case MONTHS:
                    newDate.setMonth(newDate.getMonth() + n)
                    break;
                case YEARS:
                    newDate.setYear(newDate.getFullYear() + n)
                    break;
            }
            return newDate
        }
        const today = new Date()
        const tomorrow = addInterval(today, 3, YEARS)
        console.log(today)
        console.log(tomorrow)



        or(const [unit, value] of Object.entries(interval)){
                parts[unit] += value
            }
            
            return new Date(...parts)
        }
        const today = new Date()
        const tomorrow = addInterval(today,{
            [MONTHS]: 2,
            [DAYS]: 1,
        })

        Front-end ou Back-end ?


        JS COTE NAVIGATEUR :


        <script src="./app.js" > avec du  coup un autre fichier js


        defer ça charge le js dès qu'il a le temps par contre il n'execute le code qu'a la fin du chargement de la page

        <script src="./app.js" defer >

        <script src="./app.js" type="module" defer >
        ça va supporter les module sans ça on peut pas.

        window pour mettre des variables global .

        meme effet que var 

        c'est mieux d'utiliser en type module.

        alert ça affiche un message.


        MANIPULER LE DOM :

        queryselector : renvoye un element sur lequel on pourra faire differente chose 
        queryselectorall on peut selectionner plusieurs choses.

        textcontent renvoye le texte en respectant les espaces meme les hidden 

        innerHTML juste ce que les utilisateur vont voirs.*

        setAttribute met element 

        removeAttribute enleve element.


        DOMTokenList.toggle() : permet de manipuler une list d'element ( remove surpimmer une classe, toggle : supprimer si existe pas ajoute si oui, add : rajoute )

        children = html collection avec des enfants.


        async function main(){
        const wrapper = document.querySelector('#lastPosts')
        const loader = document.createElement('p')
        loader.innerText = 'Chargement...'
        wrapper.append(loader)
        try{
            const r = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5',{
                headers:{
                    Accept: 'application/json'
            }
        })
     
        if (!r.ok){
            throw new Error('Error serveur')
        }
        const posts = await r.json()
        loader.remove()
        } catch(e){
            loader.innerText = 'Impossible'
            loader.style.color = 'red'
            return
    }
}

main()



TODO LIST :

<!DOCTYPE html>
<html lang="fr"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TodoList</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <script src="app.js" type="module" defer>

    </script>
</head>
<body>

    <section class="container pt-5" id="todolist">
        <form class="d-flex pb-4">
            <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title" data-com.bitwarden.browser.user-edited="yes">
            <button class="btn btn-primary">Ajouter</button>
        </form>
        <main>
            <div class="btn-group mb-4" role="group">
                <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
                <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
                <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
            </div>

            <ul class="list-group">
            <!---->
            <li class="todo list-group-item d-flex align-items-center">
                <input class="form-check-input" type="checkbox" id="todo-1">
                <label class="ms-2 form-check-label" for="todo-1">
                    Tâche à faire 2
                </label>
                <label class="ms-auto btn btn-danger btn-sm">
                <i class="bi-trash">
                </i>
                </label>
            </li>
            <li class="todo list-group-item d-flex align-items-center">
                <input class="form-check-input" type="checkbox" id="todo-2">
                <label class="ms-2 form-check-label" for="todo-2">
                    Tâche à faire 1
                </label>
                <label class="ms-auto btn btn-danger btn-sm">
                <i class="bi-trash">
                </i>
                </label>
            </li>
            </ul>
        </main>
    </section>

</body>
</html>


le dom :
export function createElement(tagName, attribute = {}){
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attriutes) ){
        element.setAttribute(attribute, value )

    }
    return element 
}

l'app.js : 
import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try{
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    console.log(todos)
    } catch(e){
        const alertElement = createElement('div',{
            class:'alert alert-danger m-2',
            role: 'alert'
        })
        alertElement.innerText = "Impossible de charger les éléments"
        document.body.prepend(alertElement)
}

JE NE PEUX PAS SUIVRE IL ME MANQUE DES ELEMENT MAIS JE CONTINU LA VIDEO.

ECOUTEUR D'EVENEMENT :

const button = document.querySelector('button')
button.addEventListener('click',function (){
    alert('Bonjour')
})

syntaxe de base 


const button = document.querySelector('button')
button.addEventListener('click',function (){
    console.log(event.target, event.currentTarget)
})

le target va donner la cible sur laquel on a veritablement clicker 

currentTarget va toujours donner le sujet du lsitener vu que addEventListener sur le button alors ça renvoye le button.

function onButtonClick (event){
    console.log(event.currentTarget)
}
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', onButtonClick)
});

preventdefault :

function onButtonClick (event){
    event.preventDefault()
}
document.querySelectorAll('button, a').forEach(button => {
    button.addEventListener('click', onButtonClick)
});

on empeche le comportement des event qui dans cette exemple c'est de rediriger vers le lien.

stoppropagation : 

function onButtonClick (event){
    console.log('button click')
    event.preventDefault()
    event.stopPropagation()
}
document.querySelectorAll('button, a').forEach(button => {
    button.addEventListener('click', onButtonClick)
})


document.querySelector('div').addEventListener('click', () => {
    console.log('click div')
})


function onButtonClick (event){
    console.log('button click')
    event.preventDefault()
    event.stopPropagation()
}
document.querySelectorAll('button, a').forEach(button => {
    button.addEventListener('click', onButtonClick)
})


document.querySelector('div').addEventListener('click', () => {
    console.log('click div')
})


revealSpoiler : ça revel tout les poiler 


TEMPLATE :

Un template sert a stocké du contenu HTML qui ne doit pas etre affiché lors du chargement de la page mais qui peut etre instancié et affiché par la suite grâce a un script JavaScript.

content.cloneNode : clone le contenu du fragment 


.content donne le contenu du template 


EVENEMENT PERSONNALISE :

detail : pour envoyer des informations.

bubbles pour propager les element 

cancelable : nous dis si on peut annulé des comportement par défaults.

localStorage.setItem('hello','bonjour)
ça sauvegarde

localStorage.getItem('ce qu'on veut récupérer')

pour recupérer avant le rafraichissement d'une page.


dans l'application il y a le local storage en mieux 

pas de sécurité 

localStorage.clear tout supprimer 

localStorage.removeItem un element en particulier .

sessionStorage ça sauvegarde que dans la session de la plage si on reouvre la page y'a plus alors qu'avec le localstorage ça reste


LES COOCKIES :


Des informations qui vont pouvoir être stocker sur le navigateur de l'utilisateur et qui vont être envoyer a userveur .








