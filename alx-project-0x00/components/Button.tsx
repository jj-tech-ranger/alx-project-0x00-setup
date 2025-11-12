components/Button.tsx  import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`${styles} px-6 py-2 font-medium transition-all`}>
      {title}
    </button>
  )
}

export default Button;
