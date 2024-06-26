import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ListElementAvatarProps {
	name: string
	src: string
}

const ListElementAvatar = ({ name, src }: ListElementAvatarProps) => {
	return (
		<Avatar className='border border-gray-400 items-center justify-center scale-125'>
			<AvatarImage src={src} />
			<AvatarFallback>{name[0]}</AvatarFallback>
		</Avatar>
	)
}

export default ListElementAvatar
