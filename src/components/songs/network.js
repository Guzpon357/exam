import { Router } from "express";
import * as Controller from "./controller";
import authentication from "../../middlewares/authentication.js";

const SongsRouter = Router();

SongsRouter.route("/").get(authentication, Controller.readAll);
SongsRouter.route("/").post(authentication, Controller.create);
SongsRouter.route("/:id").get(authentication, Controller.readOne);
SongsRouter.route("/:id").delete(authentication, Controller.deleteOne);
export default SongsRouter;
