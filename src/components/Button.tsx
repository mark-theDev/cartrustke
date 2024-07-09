import Image from "next/image"

type ButtonProps ={
    type?: 'button' | 'submit';
    icon?: any
    title: string;    
    variant?: string
    
}

const Button = ({ type,icon, title,variant }: ButtonProps) => {
  return (
    
    <button
      className={`flex items-center text-sm py-2 px-4 gap-2 rounded-full border ${variant}`}
      type="button">
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 text-sm whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button