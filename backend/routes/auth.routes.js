import express from 'express'
import { googleAuth, resetPassword, sendOtp, sigIn, signOut, signUp, verifyOtp } from '../controllers/auth.controllers.js'

const authRouter = express.Router()

authRouter.post("/signup", signUp)
authRouter.post("/signin", sigIn)
authRouter.get("/signout", signOut)
authRouter.post("/sendotp", sendOtp)
authRouter.post("/verifyotp", verifyOtp)
authRouter.post("/resetpassword", resetPassword)
authRouter.post("/googleauth", googleAuth)

export default authRouter