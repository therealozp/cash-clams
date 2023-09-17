const lessonsList = [
	{
		name: 'Introduction to Financial Literacy',
		lessons: 'Why Financial Literacy Matters, Setting Financial Goals',
		quiz: ['Assessing Financial Knowledge'],
		moduleCode: 1,
	},
	{
		name: 'Basic Financial Concepts',
		lessons: 'Income, Expenses, Savings, Debt, Budget',
		quiz: ['Financial Literacy Basics'],
		moduleCode: 2,
	},
	{
		name: `Budgeting`,
		lessons: 'Creating a Budget',
		activity: [`Pokémon Expense Tracker`],
		quiz: ['Budgeting Basics'],
		moduleCode: 3,
	},
	{
		name: `Saving and Investing`,
		lessons: 'The Power of Saving, Introduction to Investing',
		activity: [`Building Your Anime Investment Portfolio`],
		quiz: ['Saving and Investing Essentials'],
		moduleCode: 4,
	},
	{
		name: `Debt Management`,
		lessons: 'Types of Debt, Strategies for Managing Debt',
		activity: [`Debt Reduction Plan with Anime characters`],
		quiz: ['Debt Management Techniques'],
		moduleCode: 5,
	},
	{
		name: `Building Credit`,
		lessons: 'Understanding Credit, Building and Maintaining Good Credit',
		activity: [`Pokémon Credit Score Simulator`],
		quiz: ['Credit Building Strategies'],
		moduleCode: 6,
	},
	{
		name: `Risk Management `,
		lessons: 'Introduction to Insurance, Preparing for Emergencies',
		activity: [`Anime Risk Management Simulation`],
		quiz: ['Managing Financial Risks'],
		moduleCode: 7,
	},
	{
		name: `Taxes`,
		lessons: 'Understanding Taxes, Tax-Advantaged Accounts',
		activity: [`Pokémon Tax Simulator`],
		quiz: ['Tax Basics'],
		moduleCode: 8,
	},
	{
		name: `Financial Planning`,
		lessons: 'Setting Financial Goals, Adjusting Your Financial Plan',
		activity: [`Pokémon Financial Planning Simulator`],
		quiz: ['Financial Planning Basics'],
		moduleCode: 9,
	},
];

const dummyQuizData = {
	questions: [
		{
			number: 1,
			question: 'Why is it important to have financial literacy?',
			answers: [
				'To become a Pokémon Master',
				'To make informed financial decisions',
				'To catch rare Pokémon',
				'To win Pokémon battles',
			],
			correct_answer: 2,
		},
		{
			number: 2,
			question: 'What is the primary purpose of setting financial goals?',
			answers: [
				'To evolve your Pokémon',
				'To become a Gym Leader',
				'To provide a clear direction for your financial decisions',
				'To trade Pokémon with friends',
			],
			correct_answer: 3,
		},
		{
			number: 3,
			question:
				'Which of the following is an example of a short-term financial goal?',
			answers: [
				'Saving up for a new Pokémon game',
				'Becoming the Pokémon Champion',
				'Retiring at age 65',
				'Collecting all 151 original Pokémon',
			],
			correct_answer: 1,
		},
		{
			number: 4,
			question:
				'What is a common reason people fail to achieve their financial goals?',
			answers: [
				"They don't care about Pokémon",
				'They set unrealistic goals',
				'They have too many Pokémon cards',
				"They don't have a Pokédex",
			],
			correct_answer: 2,
		},
		{
			number: 5,
			question:
				'Which of the following is a key component of financial literacy?',
			answers: [
				"Knowing every Pokémon's type and weakness",
				'Understanding how to use a Pokéball',
				'Understanding personal finance concepts like budgeting and investing',
				'Being able to name all 800+ Pokémon species',
			],
			correct_answer: 3,
		},
		{
			number: 6,
			question: 'What is a SMART goal in the context of financial literacy?',
			answers: [
				'A goal related to catching legendary Pokémon',
				'A goal that is Specific, Measurable, Achievable, Relevant, and Time-bound',
				'A goal to trade Pokémon with strangers',
				'A goal to fill your Pokédex with every Pokémon',
			],
			correct_answer: 2,
		},
		{
			number: 7,
			question:
				'How can setting financial goals help you manage your money better?',
			answers: [
				'By teaching your Pokémon new moves',
				'By providing a clear roadmap for your financial decisions',
				'By winning Pokémon battles',
				'By collecting rare Pokémon cards',
			],
			correct_answer: 2,
		},
		{
			number: 8,
			question:
				'Which of the following is NOT a benefit of being financially literate?',
			answers: [
				'Being able to identify a counterfeit Pokémon card',
				'Making informed financial decisions',
				'Avoiding financial scams',
				'Building wealth over time',
			],
			correct_answer: 1,
		},
		{
			number: 9,
			question: "What can happen if you don't have financial literacy skills?",
			answers: [
				'You might encounter wild Pokémon in your financial transactions',
				'You can make poor financial choices and struggle with money management',
				"You'll become a Pokémon Master regardless",
				"You'll never catch a shiny Pokémon",
			],
			correct_answer: 2,
		},
		{
			number: 10,
			question:
				"In the context of financial literacy, what does 'budgeting' refer to?",
			answers: [
				'Planning your Pokémon training schedule',
				'Tracking your spending and managing your income',
				'Calculating the power of Pokémon moves',
				'Deciding which Pokémon to release',
			],
			correct_answer: 2,
		},
	],
};

export { lessonsList, dummyQuizData };
