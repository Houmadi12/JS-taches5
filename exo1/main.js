let tableau = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet'];

let ligne = document.querySelector(".ligne");
let ligne1 = document.querySelector(".ligne1");

function afficheTableau(index,tab){
    for(let i=0; i<tab.length; i++){
        index.innerHTML += "<td>"+tab[i]+"</td>"
    }
}

// Affichage du tableau initial
afficheTableau(ligne,tableau);

//Retirer le dernier element 
tableau.pop()
afficheTableau(ligne1,tableau);

// Affichage du tableau avec document.write
document.write('<div class="container">');
document.write('<h3 class="mt-3">3. Réafficher le tableau avec document.write </h3>');
document.write('<table><tr>');
for(let i=0; i<tableau.length; i++){
document.write('<td>'+tableau[i]+'</td>');
}
document.write('</tr></table>');
document.write('</div>');

// Ajouter la valeur 'août' à la fin du tableau et afficher le tableau
tableau.push('août');

document.write('<div class="container">');
document.write('<h3 class="mt-3">4. Ajouter la valuer août à la fin du tableau </h3>');
document.write('<table><tr>');
for(let i=0; i<tableau.length; i++){
document.write('<td>'+tableau[i]+'</td>');
}
document.write('</tr></table>');
document.write('</div>');

// Remplacer la valeur 'février' par la valeur 'février' et afficher le tableau

document.write('<div class="container">');
document.write('<h3 class="mt-3">5. Modifier la valeur février par "fevrier"</h3>');
document.write('<table><tr>');
for(let i=0; i<tableau.length; i++){
    if(tableau[i] === "février"){
        tableau.splice(i,1);
        tableau.splice(i,0,"fevrier")
    }
document.write('<td>'+tableau[i]+'</td>');
}
document.write('</tr></table>');
document.write('</div>');


// Afficher le nombre de valeurs du tableau en utilisant la méthode document.write
document.write('<div class="container">');
document.write('<h3 class="mt-3">6. Afficher le nombre de valeurs du tableau en utilisant la méthode document.write</h3>');
let count = 0;
for(let i=0; i<tableau.length; i++){
    count++;
}
document.write('<p class="fs-3"> Le nombre de valeur est : '+count+'</p>');
document.write('</div>');

// Afficher la troisieme élément du tableau
document.write('<div class="container">');
document.write('<h3 class="mt-3">7. Afficher la troisième valeur du tableau</h3>');
document.write('<p class="fs-3"> Le troisième valeur du tableau est : '+tableau[2]+'</p>');
document.write('</div>');