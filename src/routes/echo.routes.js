import express from "express";
import { echo } from "../controllers/echo.controller.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
const router = express.Router();


router.get(
  "/boom",
  asyncHandler(async (req, res) => {
    throw new Error("Async error");
  })
);


router.post("/echo", echo);

export default router;
