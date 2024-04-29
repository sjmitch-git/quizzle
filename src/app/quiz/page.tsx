import { Heading } from '@/components'
import Questions from './questions'
import { DEFAULT_CATEGORY, DEFAULT_DIFFICULTY } from '@/utils/constants'
import FetchData from '@/utils/fetchData'
import { shuffleArray } from '@/utils/shuffleArray'
import { ExtendedQuizQuestion } from '@/types/quizQuestion'

export default async function Quiz({
	searchParams,
}: {
	searchParams: { category: string | null; difficulty: string | null }
}) {
	const category = searchParams.category || DEFAULT_CATEGORY
	const difficulty = searchParams.difficulty || DEFAULT_DIFFICULTY

	const data = await FetchData(`category=${category}&difficulty=${difficulty}`)

	const extendedData: ExtendedQuizQuestion[] = data.results
		.map((question: ExtendedQuizQuestion) => ({
			...question,
			answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
			answered: null,
			value: null,
		}))
		.sort()

	return (
		<div>
			<Heading label='Quiz Questions' />
			<Questions data={extendedData} />
		</div>
	)
}
