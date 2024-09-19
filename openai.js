import OpenAI from "openai"
import dotenv from "dotenv"
dotenv.config()

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
})

export async function mainChat(question) {
	const stream = await openai.chat.completions.create({
		model: "gpt-4o-mini",
		messages: [{ role: "user", content: question }],
		stream: true,
	})
	let answer = ""
	for await (const chunk of stream) {
		process.stdout.write(chunk.choices[0]?.delta?.content || "")
		answer += chunk.choices[0]?.delta?.content || ""
	}
	return answer
}
