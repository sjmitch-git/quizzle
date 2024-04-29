'use client'

import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { TriviaContext } from '@/contexts/TriviaContext'
import { ExtendedQuizQuestion } from '@/types/quizQuestion'
import { decodeHtmlEntities } from '@/utils/decodeHtmlEntities'
import { Heading, Progress } from '@/components'

interface QuestionsProps {
	data: ExtendedQuizQuestion[]
}

export default function Questions({ data }: QuestionsProps) {
	const [questionIndex, setQuestionIndex] = useState(0)
	const [answer, setAnswer] = useState('')
	const triviaContext = useContext(TriviaContext)!
	const { updateTriviaQuestions } = triviaContext

	const router = useRouter()

	useEffect(() => {
		updateTriviaQuestions(data)
	}, [updateTriviaQuestions, data])

	const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAnswer(e.target.value)
		checkAnswer()
	}

	const checkAnswer = () => {
		data[questionIndex].value = data[questionIndex].correct_answer === answer
		data[questionIndex].answered = answer
	}

	const submitAnswer = () => {
		checkAnswer()
		setAnswer('')
		if (questionIndex === data.length - 1) {
			router.push(`/quiz/results`)
		} else setQuestionIndex((prevIndex) => ++prevIndex)
	}

	return (
		<div>
			<Heading
				label={decodeHtmlEntities(data[questionIndex]?.category)}
				subLabel={`(${data[questionIndex]?.difficulty})`}
				level={2}
			/>
			<div onContextMenu={(e) => e.preventDefault()}>
				<Heading
					label={`${questionIndex + 1}. ${decodeHtmlEntities(data[questionIndex]?.question)}`}
					level={3}
					className='normal-case'
				/>
			</div>

			<div className='mx-auto mb-8 flex max-w-md flex-col gap-3'>
				{data[questionIndex]?.answers.map((item, index) => (
					<div
						key={index}
						className={`relative flex overflow-clip rounded-md border hover:border-primary ${item === answer ? 'bg-info text-light' : 'bg-gray-300'}`}
					>
						<input
							type='radio'
							id={`answer_${questionIndex}_${index}`}
							name='answer'
							value={item}
							checked={item === answer}
							onChange={onOptionChange}
							className='absolute left-[-50px]'
						/>
						<label
							htmlFor={`answer_${questionIndex}_${index}`}
							className='w-full p-4'
						>
							{decodeHtmlEntities(item)}
						</label>
					</div>
				))}
			</div>
			<div className='flex justify-center'>
				<button
					className='btn bg-primary text-light'
					onClick={submitAnswer}
					disabled={!answer}
				>
					Submit
				</button>
			</div>
			<Progress
				value={questionIndex}
				total={data.length}
			/>
		</div>
	)
}
