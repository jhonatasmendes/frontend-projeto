import expres from 'express';
import { getUsers, addUser,updateUser, deleteUser } from '../controllers/userControllers.js'

const router = expres.Router();

router.get("/", getUsers);
router.post("/", addUser); // adiciona nome expecifico na tabela
router.put("/", updateUser);
router.delete("/", deleteUser);
export default router;