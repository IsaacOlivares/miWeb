let radi;
let ratoli = false; //variable per controlar quan pot dibuixar
let font;
//Variables de control
let rodona, tri, quadrat, mostrarInstruccions, triCount, rodCount, quaCount, countDown;

//Carreguem la font abans de carregar les instruccions del Sketch
function preload() {
    font = loadFont('Inconsolata-Regular-1.ttf');
}
//Inicialitzem el Canvas i les variables
function setup() {
    createCanvas(1280, 900, WEBGL); //Per tal de tenir figures geometriques complexes, inicialitzem el Canvas amb WEBGL
    background(255);
    mostrarInstruccions = true;
    radi = 0;
    rodona = false;
    tri = false;
    quadrat = true; //Per defecte la primera figura sempre serà el quadrat. 
    triCount = 0;
    rodCount = 0;
    quaCount = 0;
    countDown = 0;
    frameRate(24); //Modifiquem el ratio de frames a 24/segon
}


function draw() {
    //Mostrem menú d'instruccions al iniciar el sketch
    if (mostrarInstruccions) {
        background(255);
        fill(180);
        textSize(18);
        textAlign(CENTER);
        textFont(font);
        text("Clica, arrastra i dibuixa." + "\n" +
            "Apreta 'q' per dibuixar quadrats." + "\n" +
            "Apreta 'w' per dibuixar triangles." + "\n" +
            "Apreta 'e' per dibuixar rodones." + "\n" +
            "Apreta 'espai' per netejar pantalla." + "\n", 0, 0);
    } else if (countDown <= 3) {
        //Afegim un contador abans d'inicialitzar el dibuix final. 
        background(255);
        fill(180);
        textSize(24);
        textAlign(CENTER);
        textFont(font);
        if (countDown <= 2) {
            text(countDown, 0, 0);
        } else {
            text("CLICA!!!", 0, 0);
        }


    }
    //Si la divisio entre 24 del framecount es = 0 significa que ha passat 1 segon, per tant esperem 3 segons abans d'iniciar el draw
    if (frameCount % 24 == 0 && countDown < 4 && mostrarInstruccions == false) {
        countDown++;
        background(255);
    }
    if (ratoli && countDown > 3) {
        radi++;

        textSize(18);
        textFont(font);
        fill(255);
        //background(255);
        noStroke();
        rect(-width / 2, -height / 2, 400, 25); //Dibuixem un rectangle per tal d'evitar que es solapi el text
        fill(180);
        text("Quadrats: " + quaCount + " Triangles: " + triCount + " Conos: " + rodCount, -width / 2 + 200, -height / 2 + 20);


        //posicionem les figures a la posicio del ratoli
        translate(mouseX - width * 0.5, mouseY - height * 0.5, 100);
        //Fem que els objectes tinguin rotació
        rotate(random(300));
        //Els objectes es posicionen al voltant del ratolí
        translate(80 * sin(radi), 80 * sin(radi), -100);
        //Colors dels objectes
        fill(random(255), random(255), random(255), 255);
        if (quadrat) {
            //Inicialitzem un requadre
            quaCount++;
            box(40);
        }
        if (tri) {
            //Inicialitzem un cono
            triCount++;
            cone(20, 40);
        }
        if (rodona) {
            //Inicialitzem un cilindre
            rodCount++;
            cylinder(20, 50);
        }

    }
}


//Quan apretem el ratoli, posem a true la variable
function mousePressed() {
    //Un cop iniciem el Sketch eliminem les instruccions i deixem funcionant la resta
    if (mostrarInstruccions) {
        mostrarInstruccions = false;
        background(255);
    }

    ratoli = true;
}
//Quan deixem d'apretar el ratoli, posem a false la variable
function mouseReleased() {
    ratoli = false;
}

//Registrem les comandes del sketch
function keyPressed() {
    console.log(key);
    if (key == ' ') {
        background(255);
        triCount = 0;
        rodCount = 0;
        quaCount = 0;
        //mostrarInstruccions = true;
        countDown = 0;
    }
    if (key == 'e') {
        quadrat = false;
        tri = false;
        rodona = true;
    }
    if (key == 'q') {
        tri = false;
        rodona = false;
        quadrat = true;
    }
    if (key == 'w') {
        rona = false;
        quadrat = false;
        tri = true;
    }
}