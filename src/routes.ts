import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

/*
    GET = BUSCAS
    POST = CRIAÇÃO
    PUT = ALTERAÇÃO
    DELETE= ALTERAÇÃO
    PATCH = ALTERAR UMA INFORMAÇÃO ESPECÍFICA
*/

/*
    Tipos de parâmetros
    Routes Params => Parâmetros de rotas (http://localhost:3333/settings/1)
    Query Params => Filtros e buscas  (http://localhost:3333/settings/1?search=algumaCoisa&outroParam=outroValor)
    Body params => (passa objetos json dentro das nossas requisições {}) -- para inserção/alteração estamos falando desse cara geralmente
*/

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };