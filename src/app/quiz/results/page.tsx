import { Heading } from '@/components'
import Feedback from './feedback'

export default function Results() {
	return (
		<div>
      		<Heading label='Results' />
			<div className='flex justify-center py-8'>
				<Feedback />
			</div>
		</div>
	)
}