'use client'

import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

import { TriviaContext } from '@/contexts/TriviaContext'
import Categories from '@/data/categories.json'

import { OPTIONS_DIFFICULTY } from '@/utils/constants'

export default function Form() {
	const triviaContext = useContext(TriviaContext)!
	const { updateTriviaParams, triviaParams, updateTriviaQuestions } = triviaContext

	const [category, setCategory] = useState(triviaParams.category)
	const [categoryName, setCategoryName] = useState(triviaParams.categoryName)
	const [difficulty, setDifficulty] = useState(triviaParams.difficulty)

	const router = useRouter()

	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const categoryId = e.target.value
		const selectedCategory = Categories.find((category) => category.id === Number(categoryId))
		setCategory(categoryId)
		if (selectedCategory) setCategoryName(selectedCategory.name)
	}

	const handleDifficultyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDifficulty(e.target.value)
	}

	const handleStartQuiz = () => {
		updateTriviaQuestions([])
		updateTriviaParams?.({
			category,
			difficulty,
			categoryName: categoryName,
		})
		router.push(`/quiz?category=${category}&difficulty=${difficulty}`)
	}

	return (
		<form>
			<label className='mb-8 block'>
				<span className='sr-only'>Category:</span>
				<select
					value={category}
					onChange={handleCategoryChange}
					name='category'
				>
					{Categories.map((category) => (
						<option
							key={category.id}
							value={category.id}
						>
							{category.name}
						</option>
					))}
				</select>
			</label>

			<div className='mb-8 flex justify-center'>
				{OPTIONS_DIFFICULTY.map((item: string, index: any) => (
					<div
						key={index}
						className={`relative flex overflow-clip first:rounded-s-md last:rounded-e-md hover:border-primary ${item === difficulty ? 'bg-info text-light' : 'bg-gray-300'}`}
					>
						<input
							type='radio'
							id={item}
							name='difficulty'
							value={item}
							checked={item === difficulty}
							onChange={handleDifficultyChange}
							className='absolute left-[-50px]'
						/>
						<label
							htmlFor={item}
							className='w-full p-4 text-xl capitalize'
							tabIndex={0}
						>
							{item}
						</label>
					</div>
				))}
			</div>

			<div className='flex justify-center'>
				<button
					type='button'
					className='btn bg-primary text-xl text-light'
					onClick={handleStartQuiz}
				>
					Start Quiz
				</button>
			</div>
		</form>
	)
}
