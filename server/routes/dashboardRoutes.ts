import { Router } from "express";
import { getDashboardMatrics } from "../controllers/dashbaordController";

const router = Router();

router.get("/", getDashboardMatrics);

export default router;
