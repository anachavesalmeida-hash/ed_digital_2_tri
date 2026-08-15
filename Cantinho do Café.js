function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(245, 235, 220);

  // Título
  fill(90, 55, 35);
  textSize(35);
  textAlign(CENTER);
  text("Café da Praça", width / 2, 60);

  // Subtítulo
  textSize(18);
  fill(100);
  text("Um lugar simples para tomar um bom café ☕", width / 2, 95);

  // Cardápio
  fill(90, 55, 35);
  textSize(27);
  text("Nosso Cardápio", width / 2, 155);

  // Primeiro produto
  fill(255);
  rect(80, 190, 300, 100, 10);

  fill(60);
  textSize(20);
  textAlign(LEFT);
  text("☕ Café Expresso", 100, 220);

  textSize(15);
  text("Café tradicional feito na hora", 100, 245);

  fill(90, 55, 35);
  text("R$ 5,00", 100, 270);

  // Segundo produto
  fill(255);
  rect(420, 190, 300, 100, 10);

  fill(60);
  textSize(20);
  text("🍰 Bolo de Chocolate", 440, 220);

  textSize(15);
  text("Bolo caseiro com cobertura", 440, 245);

  fill(90, 55, 35);
  text("R$ 8,00", 440, 270);

  // Terceiro produto
  fill(255);
  rect(80, 320, 300, 100, 10);

  fill(60);
  textSize(20);
  text("🥐 Croissant", 100, 350);

  textSize(15);
  text("Crocante e fresquinho", 100, 375);

  fill(90, 55, 35);
  text("R$ 7,00", 100, 400);

  // Quarto produto
  fill(255);
  rect(420, 320, 300, 100, 10);

  fill(60);
  textSize(20);
  text("🥤 Cappuccino", 440, 350);

  textSize(15);
  text("Café cremoso com canela", 440, 375);

  fill(90, 55, 35);
  text("R$ 9,00", 440, 400);

  // Rodapé
  fill(90, 55, 35);
  rect(0, 520, 800, 80);

  fill(255);
  textAlign(CENTER);
  textSize(16);
  text("Café da Praça • Venha nos visitar!", 400, 565);
}