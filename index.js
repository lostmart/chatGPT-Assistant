import express from "express"
import { mainChat } from "./openai.js"

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
	res.json({ msg: "chat gpt api" })
})

app.post("/", async (req, res) => {
	const answer = await mainChat("where are you ?")
	const { question } = req.body
	res.json({ msg: "post req", question, answer })
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
