function Product (name,price){
    this.name = name;
    this.price = price;
}

function Food (name,price){
    Product.call(this, name, price) // Serve para chamar um "construtor" de um objeto dentro de outro objeto, evita ter que reescrever o codigo
    this.category = 'food'
}

var bread = new Food('pão', 'cinco reais')

console.log(bread instanceof Product) // False, o objeto bread não foi instanciado (usando o new) no product
console.log(bread instanceof Food) // True, o objeto foi instanciado usando o "new"
