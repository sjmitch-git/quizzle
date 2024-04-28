import Container from './container'

export default function Footer({
	className,
}: {
	className?: string
}) {
	return (
		<footer className={`footer ${className}`}>
			<Container className='flex justify-between flex-col-reverse md:flex-row py-8 gap-4'>
				<div>&copy; 2024</div>
				<div>Made by Stephen. Design by Renata</div>
			</Container>
		</footer>
	)
}
