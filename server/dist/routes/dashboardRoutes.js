"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashbaordController_1 = require("../controllers/dashbaordController");
const router = (0, express_1.Router)();
router.get("/", dashbaordController_1.getDashboardMatrics);
exports.default = router;
