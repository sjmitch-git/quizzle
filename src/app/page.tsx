import { APP_NAME, APP_DESCRIPTION } from '@/utils/constants'
import {Heading} from '@/components'

import Form from './form'

export default function Home() {
	return (
		<div>
      		<Heading label={APP_NAME} className='text-center text-6xl' />
			<Heading label={APP_DESCRIPTION} level={2} className='text-center opacity-50' />
			<div className='flex justify-center py-8'>
				<Form />
			</div>
		</div>
	)
}