const express = require("express");
const createError = require("http-errors");
const app = express();
const port = 3000;

// Configurar motor de templates (en este caso usamos ejs)
app.set("view engine", "ejs");

let productos = [
    {
        // nombre de la propiedad: valor
        id: 'a',
        nombre: "FORK",
        materias: [
            {
                imgs: [],
            },
        ]
    },
    {
        id: 'b',
        nombre: "THREEK",
        materias: [
            {
                imgs: [],
            },
        ]
    },
    {
        id: 'c',
        nombre: "TWOK",
        materias: [
    },
    {
        id: 'd',
        nombre: "ONEK   ",
        materias: [
            {
                imgs: [],
            },
        ]
    },
];

// Rutas
app.use(express.static("public"));

app.get("/", (req, res) => {
    // render -> mostrar una vista/html/ejs
    res.render("pages/index");
});

app.get("/tenedores", (req, res) => {
    res.render("pages/products", {
        productos: productos,
    });
});

// Not Found
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    let message = err.message;
    let error = err;

    res.status(err.status || 500);
    res.render("pages/error", {
        message,
        error
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});