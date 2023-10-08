"use strict";

class Survivant{//La classe qui définit les survivants
    constructor(){
        this.nom = this.NomS();
        this.caractéristique = this.CaractéristiqueS();
    }
    NomS(){//Fonction qui définit au hasard le nom des survivants
        let iNomSurvivant = Math.floor(Math.random()*nomSurvivant.length);
        let nom = nomSurvivant[iNomSurvivant];
        nomSurvivant.splice(iNomSurvivant,1);
        surVivant.push(nom);
        return nom;
    }
    CaractéristiqueS(){//Fonction qui définit au hasard les caractéristiques des survivants
        let iCaractéristiqueSurvivant = Math.floor(Math.random()*listeCaractéristique.length);
        let caractéristique = listeCaractéristique[iCaractéristiqueSurvivant];
        listeCaractéristique.splice(iCaractéristiqueSurvivant,1);
        return caractéristique;
    }
}

class Tueur{//La classe qui définit le tueur
    constructor(){
        this.nom = "Jason";
        this.hp = 100;
    }

    Attaque(){//fonction qui détermine les actions du tueur et des survivants
        let iSurvivantA = Math.floor(Math.random()*surVivant.length);
        let survivantA = surVivant[iSurvivantA];

        let aleatoire = Math.random();
            
        if(aleatoire < 0.2){//Le survivant meurt
            surVivant.splice(iSurvivantA,1);
            surMort.push(survivantA);
            console.log(`${this.nom} tue ${survivantA} en la découpant en deux suite à son coup de machette.`);
        }
        else if(0.2 <= aleatoire && aleatoire < 0.8){//Le survivant esquive et inflige 10pts de dégats
            this.hp -= 10 ;
            console.log(`${survivantA} esquive le coup de ${this.nom} et lui donne un coup-de-poing lui infligeant 10 points de dégâts !`);
        }
        else{//Le survivant inflige 15pts de dégats mais meurt
            this.hp -= 15 ;
            surVivant.splice(iSurvivantA,1);
            surMort.push(survivantA);
            console.log(`${survivantA} lui donne un coup de pied lui infligeant 15 points de dégâts mais, meurt suite au coup de ${this.nom}.`);
        }
    }
}



function Déroulement(){//Cette fonction est la fonction principale du programme, elle permet de définir les conditions de victoires et de défaites
    let Jason = new Tueur();

    let s1 = new Survivant();
    console.log(s1);
    let s2 = new Survivant();
    console.log(s2);
    let s3 = new Survivant();
    console.log(s3);
    let s4 = new Survivant();
    console.log(s4);
    let s5 = new Survivant();
    console.log(s5);
    
    //Explication de l'histoire
    console.log(`Dans la ville de Crystal Lake, un tueur en série du nom de ${Jason.nom} est activement recherché par la police.\nLa dernière information qu'on sait sur son sujet est qu'il est rentré dans la forêt est personne ne l'a vu en sortir.\nPour tenter de le neutraliser, la police a fait appel à une équipe de professionnel constitué de ${surVivant}.`);
    console.log("");
    console.log(`L'équipe de professionnel aperçoit ${Jason.nom} et engage un combat.`);
    console.log("");

    //Condition Victoire/Défaite
    while(Jason.hp > 0 && surVivant.length >= 1){
        Jason.Attaque();
        console.log("");
    }

    if(surMort.length == 5){
        console.log(`${Jason.nom} a tué tous les survivants, il lui reste ${Jason.hp} points de vie.`);
        }
        else if(Jason.hp <= 0){
            console.log(`${Jason.nom} s'est fait tué par les survivants, mais à emporté avec lui ${surMort}.`);
        }
        else{
            console.log("Tout le monde est mort.")
        }
    
}

//Tableaux utilisés
let nomSurvivant = ["Meg Thomas","Claudette Morel","Nea Karlsson","Laurie Strode","Feng Min","Kate Denson","Zarina Kassir","Cheryl Mason","Jane Romero","Ellen Ripley"];
let surVivant = [];
let surMort = [];

let listeCaractéristique = ["Sportive","Geek","Inspectrice","Enfant","Pilote","Botaniste","Artiste","Journaliste","Agent Secret","Infirmière"];

Déroulement();