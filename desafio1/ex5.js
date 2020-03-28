
var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];
confere(usuarios);
function confere(usuarios){
    for (var usuarios of usuarios){
       console.log("O " + usuarios.nome + " possui as habilidades: " + usuarios.habilidades.join("--"));
    }
}
