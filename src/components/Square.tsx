import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Player } from '../App'
import CircleIcon from '../assets/circle.svg'
import TimesIcon from '../assets/times.svg'

interface Props
  extends Pick<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'className'> {
  value: Player | null
}

const ICONS: Record<Player, ReactNode> = {
  X: <TimesIcon />,
  O: <CircleIcon />,
}

export default function Square({ className, onClick, value }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={Boolean(value)}
      className={twMerge(
        'relative flex h-[25vmin] w-[25vmin] items-center justify-center text-[15vmin] bg-white',
        className,
      )}
    >
      {value && ICONS[value]}
    </button>
  )
}
