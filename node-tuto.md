# nodejs
Tuto Node JS
Let : crée une variable qui peut être modifier 

const : crée une variable qui est constante, ne peut pas être modifier 

var : crée une variable globale. 

BOUCLE 'FOR' FONCTIONNEMENT 

function toto(params) {
    let toto = 0;
    for (var index = 0; index < 10; index++) {
        toto++;
    }
    console.log(`Toto = ${toto}`);
    console.log(`Var = ${index}`);
}

toto();

== || ===
https://developer.mozilla.org/fr/docs/Web/JavaScript/Equality_comparisons_and_sameness
En résumé :

    L'égalité faible (==) effectuera une conversion des deux éléments à comparer avant d'effectuer la comparaison
    L'égalité stricte (===) effectuera la même comparaison mais sans conversion préalable (elle renverra toujours false si les types des deux valeurs comparées sont différents)
    Enfin Object.is() se comportera comme l'égalité stricte sauf pour les valeurs NaN, -0 et +0 : pour Object.is(), -0 et +0 seront différents mais on aura Object.is(NaN, NaN) qui sera true. (Généralement, quand on compare NaN avec NaN en utilisant l'égalité stricte ou l'égalité faible, cela donne false afin de respecter la norme IEEE 754.)


Query : c'est les informations qui se trouve apres le premier '/' dans un url .
ça peux contenir des variables, accessibles avec query.nomdelavarible
ex: http://localhost:8080/?ballon=gigachad
tu peux ajouter plusieurs parametres en les separant pas un &
ex: http://localhost:8080/?ballon=gigachad&name=Damien

module.export : ça export la variable donnée 
ex : 
let hello = function ()...

module.export = hello 







 /*
    fs.readFile('indeax.html', (err, data) => {  

        if (err) {

           response.writeHead(404)

           response.end("Ce fichier n'existe pas")
        } else {

          response.writeHead(200, {

            'Content-type': 'text/html; charset=utf-8'
    
           })
    
            response.end(data)
        }
    })
    */

    


