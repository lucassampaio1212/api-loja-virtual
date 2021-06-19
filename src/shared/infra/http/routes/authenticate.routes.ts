import AuthenticateUserController from "@modules/Accounts/useCases/AuthenticateUser/AuthenticateUserController";
import {Router} from "express";


const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export default authenticateRoutes;