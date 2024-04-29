import Image from 'next/image'
import Link from 'next/link'

import { APP_NAME } from '@/utils/constants'
import Container from './container'

export default function Header({ className = '' }: { className?: string }) {
	return (
		<header className={`header ${className}`}>
			<Container>
				<figure className='mx-auto aspect-[4.84/1] max-w-md'>
					<Link
						href='/'
						className='relative inline-block h-full w-full'
					>
						<Image
							src='/logo.png'
							alt={`${APP_NAME} Logo`}
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							priority
						/>
					</Link>
				</figure>
			</Container>
		</header>
	)
}
