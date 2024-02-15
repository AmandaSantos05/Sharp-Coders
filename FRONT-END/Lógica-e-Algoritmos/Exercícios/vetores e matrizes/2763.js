let lines = ["032.189.832-07",]

let entrada = lines.shift();
let cpf = entrada.split(".").join("-").split("-");

for (let i = 0; i < cpf.length; i++) {
    console.log(cpf[i]);
}
