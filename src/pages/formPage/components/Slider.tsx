interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Slider = (props: SliderProps) => {
	return (
		<div>
			<input
				type='range'
				{...props}
				onChange={props.onChange}
				min={0}
				max={5}
				className={`bg-red-100 cursor-pointer ${props.className}`}
			/>
		</div>
	)
}

export default Slider
