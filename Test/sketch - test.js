let radi; //variable per tal de fer una circumferencia al voltant del ratoli
let ratoli = false; //variable per controlar quan pot dibuixar
let font;
//Variables de control
let rodona, tri, quadrat, mostrarInstruccions, triCount, rodCount, quaCount;
let headerCanvas, mainCanvas;

//Carreguem la font abans de carregar les instruccions del Sketch
function preload() {
    font = loadFont('Inconsolata-Regular-1.ttf');
}
//Inicialitzem el Canvas i les variables
function setup() {
    createCanvas(1280, 900);
    //background(255);
    headerCanvas = createGraphics(1280, 100, WEBGL);
    mainCanvas = createGraphics(1280, 900, WEBGL);
    mostrarInstruccions = true;
    radi = 0;
    rodona = false;
    tri = false;
    quadrat = true;
    triCount = 0;
    rodCount = 0;
    quaCount = 0;
}


function draw() {
    //Mostrem menú d'instruccions al iniciar el sketch
    if (mostrarInstruccions) {
        mainCanvas.background(255);
        mainCanvas.fill(180);
        mainCanvas.textSize(18);
        mainCanvas.textAlign(CENTER);
        mainCanvas.textFont(font);
        mainCanvas.text("Clica, arrastra i dibuixa." + "\n" +
            "Apreta 'q' per dibuixar quadrats." + "\n" +
            "Apreta 'w' per dibuixar triangles." + "\n" +
            "Apreta 'e' per dibuixar rodones." + "\n" +
            "Apreta 'espai' per netejar pantalla." + "\n", 0, 0);
    }
    mainCanvas.noStroke();
    drawHeaderCanvas();
    image(headerCanvas, 0, 0);
    drawMainCanvas();
    image(mainCanvas, 0, 100);

}

function drawMainCanvas() {

    if (ratoli) {
        radi++;
        console.log("mouseX: " + mouseX);
        console.log("mouseY: " + mouseY);
        console.log("radi " + radi);
        //posicionem les figures a la posicio del ratoli
        mainCanvas.translate(mouseX, mouseY, 0);
        //Fem que els objectes tinguin rotació
        mainCanvas.rotate(random(499));
        //Els objectes es posicionen al voltant del ratolí
        //mainCanvas.translate(50 * sin(radi), 50 * sin(radi), -10);
        //Colors dels objectes
        mainCanvas.fill(random(255), random(255), random(255), 180);
        if (quadrat) {
            //Inicialitzem un requadre
            quaCount++;
            //mainCanvas.box(40);
            mainCanvas.rect(20, 20, 20, 20);
        }
        if (tri) {
            //Inicialitzem un cono
            triCount++;
            mainCanvas.cone(20, 40);
        }
        if (rodona) {
            //Inicialitzem un cilindre
            rodCount++;
            mainCanvas.cylinder(20, 50);
        }
    }
}

function drawHeaderCanvas() {
    headerCanvas.background(180);
    headerCanvas.textSize(18);
    headerCanvas.textAlign(CENTER, TOP);
    headerCanvas.textFont(font);
    headerCanvas.fill(0);
    headerCanvas.text("Quadrats: " + quaCount + " Triangles: " + triCount + " Conos: " + rodCount, 0, 0);
}

//Quan apretem el ratoli, posem a true la variable
function mousePressed() {
    //Un cop iniciem el Sketch eliminem les instruccions i deixem funcionant la resta
    if (mostrarInstruccions) {
        mostrarInstruccions = false;
        mainCanvas.background(255);
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
        headerCanvas.background(255);
        mainCanvas.background(255);
        rodCount = 0;
        quaCount = 0;
        triCount = 0;
        radi = 0;
        //mostrarInstruccions = true;
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