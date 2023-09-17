'use client';

import LearnPage from '@/src/components/learn/LearnPage';
import { useParams } from 'next/navigation';

export default function Learn() {
	const moduleID = useParams().id;
	// console.log(moduleID);
	return <LearnPage moduleID={moduleID} />;
}
