import express from "express"
import { mainChat } from "./openai.js"

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
	res.json({ msg: "chat gpt api" })
})

app.post("/", async (req, res) => {
	const { question } = req.body
	const answer = await mainChat(question)
	res.json({ msg: "post req", question, answer })
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
