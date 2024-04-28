'use client'

import Link from 'next/link'

import { useContext, useState, useEffect } from 'react'

import { FaCheck, FaTimes } from 'react-icons/fa'

import { ExtendedQuizQuestion } from '@/types/quizQuestion'
import { TriviaContext } from '@/contexts/TriviaContext'
import { decodeHtmlEntities } from '@/utils/decodeHtmlEntities'
import { Heading } from '@/components'

export default function Feedback() {
	const [total, setTotal] = useState(0)
	const triviaContext = useContext(TriviaContext)!
	const { triviaQuestions } = triviaContext

	useEffect(() => {
		if (triviaQuestions) calculateTotal(triviaQuestions)
	}, [triviaQuestions])

	const calculateTotal = (data: ExtendedQuizQuestion[]) => {
		if (!data) return
		let correct = 0
		for (let i = 0; i < data.length; ++i) {
			if (data[i].value) ++correct
		}
		setTotal(correct)
	}

	return (
		<div>
			<Heading
				label={decodeHtmlEntities(triviaQuestions[0]?.category)}
				subLabel={`(${triviaQuestions[0]?.difficulty})`}
				level={2}
			/>
			<Heading
				label={`You scored ${total} out of ${triviaQuestions.length}`}
				level={3}
				className='normal-case'
			/>
			<div className='mx-auto mb-8 flex max-w-md flex-col gap-3'>
				{triviaQuestions &&
					triviaQuestions.map((item, index) => (
						<div
							key={index}
							className={`relative flex flex-col gap-2 rounded-md border bg-gray-50 p-4 ${item.value ? 'border-success' : 'border-error'}`}
						>
							<div className={`m-auto text-5xl`}>
								{item.value ? (
									<FaCheck className='text-success' />
								) : (
									<FaTimes className='text-error' />
								)}
							</div>
							<p>Q: {decodeHtmlEntities(item.question)}</p>
							<p>A: {decodeHtmlEntities(item.correct_answer)}</p>
							{!item.value && (
								<p className='text-error'>
									You answered: {decodeHtmlEntities(item.answered)}
								</p>
							)}
						</div>
					))}
			</div>
			<div className='text-center '>
				<Link
					href={'/'}
					className='btn bg-primary text-light'
				>
					Start Again?
				</Link>
			</div>
		</div>
	)
}
