function hello(str) {
    return "Hello, " + str + "!";
};

let nome = "Isa";
let mensagem = hello(nome);
console.log(mensagem);

module.exports = hello;