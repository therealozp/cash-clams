import Layout from '@/src/components/Layout';
import QuizPage from '@/src/components/quiz/QuizPage';
import { useParams } from 'next/navigation';

export default function Quiz() {
	return (
		<Layout>
			<QuizPage moduleID={moduleID} />
		</Layout>
	);
}
