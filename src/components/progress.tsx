interface ProgressProps {
	value: number
	total: number
}

const Progress = ({ value, total }: ProgressProps) => {
	return (
		<div className='progress-wrapper'>
			<div className='progress'>
				<div
					className='progress-bar'
					style={{ width: `${(value / total) * 100}%` }}
				>
					<div className='progress-fill'></div>
				</div>
			</div>
		</div>
	)
}

export default Progress
