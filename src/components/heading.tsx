interface HeadingProps {
	label: string
	subLabel?: string
	level?: number
	className?: string
}

const Heading = ({ label, subLabel, level = 1, className = '' }: HeadingProps) => {
	const TagName = `h${level}` as keyof JSX.IntrinsicElements

	return <TagName className={`h${level} ${className}`}>{label} {subLabel && <small>{subLabel}</small>}</TagName>
}

export default Heading