'use client';

import Layout from '@/src/components/Layout';
import QuizPage from '@/src/components/quiz/QuizPage';
import { useParams } from 'next/navigation';

export default function Quiz() {
	const moduleID = useParams().id;
	// console.log('You are at quiz', moduleID);

	return (
		<Layout>
			<QuizPage moduleID={moduleID} />
		</Layout>
	);
}
