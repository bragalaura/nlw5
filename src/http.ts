import express, { response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";

import { routes } from "./routes";

const app = express();

// configuração pra conseguir usar o html do public dentro das nossas rotas
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
// fim configuracao html rotas

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
})

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html");
})

const http = createServer(app);    // criando protocolo http
const io = new Server(http);       // criando protocolo ws (websocket)

io.on("connection", (socket: Socket) => {
    //console.log("Se conectou ", socket.id);
})

app.use(express.json());

app.use(routes);

export { http, io };


// não vamos mais utilizar essas rotas.
/*app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW"
    });
});

app.post("/", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!"});
});
*/