// import { Configuration, OpenAIApi } from 'openai';
import OpenAI from 'openai';
import prompt from '@/utils/getTopics';
import { NextResponse } from 'next/server';
import { useMessages } from '@/context/MessagesContext';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

async function GET(req) {
	const prompt = await req.body.prompt;

	const messages = useMessages();
	const response = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: [...messages, prompt],
	});

	console.log(response.choices[0].message.content);

	return NextResponse.json({
		status: 200,
		body: {
			text: response.choices[0].message.content,
		},
	});
}

export { GET };
