// Generate lessons and save them, and based on the lessons generate a quiz, and once they move on to the next moduel clear the data
// For quizes, they can retake quizes -> no criteria to proceed, and incorrect answers are saved and
//displayed differently with more emphasis during the next iteration of the quiz

const lessonsList = [
	(moduleOne = {
		name: 'Introduction to Financial Literacy',
		lessons: ['Why Financial Literacy Matters', 'Setting Financial Goals'],
		quiz: ['Assessing Financial Knowledge'],
	}),
	(moduleTwo = {
		name: `Budgeting with Pokémon`,
		lessons: ['Creating a Budget', `Tracking Expenses with Pokémon themes`],
		activity: [`Pokémon Expense Tracker`],
		quiz: ['Budgeting Basics'],
	}),
	(moduleThree = {
		name: `Saving and Investing in the Anime World`,
		lessons: ['The Power of Saving', 'Introduction to Investing'],
		activity: [`Building Your Anime Investment Portfolio`],
		quiz: ['Saving and Investing Essentials'],
	}),
	(moduleFour = {
		name: `Debt Management with Anime Characters`,
		lessons: ['Types of Debt', 'Strategies for Managing Debt'],
		activity: [`Debt Reduction Plan with Anime characters`],
		quiz: ['Debt Management Techniques'],
	}),
	(moduleFive = {
		name: `Building Credit Using Pokémon Principles`,
		lessons: ['Understanding Credit', 'Building and Maintaining Good Credit'],
		activity: [`Pokémon Credit Score Simulator`],
		quiz: ['Credit Building Strategies'],
	}),
	(moduleSix = {
		name: `Risk Management through Anime Scenarios`,
		lessons: ['Introduction to Insurance', 'Preparing for Emergencies'],
		activity: [`Anime Risk Management Simulation`],
		quiz: ['Managing Financial Risks'],
	}),
];

const prompt = (lessonNumber, theme) => {
	const message = {
		role: 'user',
		content: `I am a beginner in financial literacy. Please teach me about ${lessonsList[lessonNumber].lessons[0]} in terms of ${theme}`,
	};
	return message;
};

export default prompt;

// 	`
// 1. Basic Financial Concepts
// Income: Money earned, often from work, investments, or business operations.
// Expenses: Money spent on goods, services, and other necessities or luxuries.
// Savings: Money set aside for future use, not spent.
// Debt: Money owed to another person or entity, often with interest.
// Budget: A plan for your income and expenses to ensure you're not spending more than you're earning.
//     `,
// 	`
// 2. Creating a Budget
// Track your Income: This includes salary, bonuses, and any other sources of income.
// List Fixed Expenses: These are regular, predictable costs like rent/mortgage, utilities, and subscriptions.
// List Variable Expenses: These might change month to month, such as groceries, dining out, and entertainment.
// Set Financial Goals: Save for an emergency, buy a house, start a business, etc.
// Evaluate and Adjust: Periodically review your budget to ensure you're on track. Adjust as necessary.
// `,
// 	`
// 3. Saving and Investing
// Emergency Fund: Aim to save 3-6 months' worth of living expenses in an easily accessible account. This can shield you from unexpected financial setbacks.
// Retirement Savings: Consider tax-advantaged accounts like a 401(k) or an IRA. The earlier you start, the more you benefit from compound interest.
// Diversified Investments: Spreading your money across various types of investments (stocks, bonds, real estate) can reduce risk.
// `,
// 	`
// 4. Understanding Debt
// Good Debt vs. Bad Debt: 'Good' debt might include student loans or mortgages (things that can appreciate in value or generate income). 'Bad' debt can be things like high-interest credit card debt.
// Interest: The cost of borrowing money. Always be aware of the interest rate on your loans and credit cards.
// Pay Off Strategy: Focus on high-interest debt first, or tackle small debts for quick wins.
// `,
// 	`5. Credit and Credit Scores
// Credit Score Factors: Payment history, amounts owed, length of credit history, types of credit used, and new credit.
// Importance: A good credit score can help you get better interest rates on loans and credit cards, saving money in the long run.
// `,
// 	`6. Insurance and Risk Management
// Understand basic insurance types: health, auto, life, disability, and homeowner's/renter's insurance.
// The idea is to transfer the financial risk of unforeseen events to an insurance company, for a fee (premium).
// `,
// 	`7. Taxes
// Understanding Tax Brackets: Know the different tax rates and how progressive taxation works.
// Tax-Advantaged Accounts: Using accounts like 401(k)s, IRAs, or HSAs can offer tax benefits.
// `,
// 	`8. Financial Planning
// Think about long-term goals, like buying a home, sending kids to college, or retiring.
// Understand the importance of adjusting your financial plans as life changes.
// `,
