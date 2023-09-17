// import { Configuration, OpenAIApi } from 'openai';
import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

async function POST(req) {
	const request = await req.json();
	const messages = request.messages;

	const response = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: messages,
	});

	// console.log('this is from request api route:', messages);

	return NextResponse.json({
		status: 200,
		body: {
			text: response.choices[0].message.content,
			// text: messages[0].content,
		},
	});
}

export { POST };
