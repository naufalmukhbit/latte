interface InputProps {
	placeholder?: string;
	isPassword?: boolean;
}

export default function Input({ placeholder, isPassword }: InputProps) {
	return (
		<input
			className="py-2 px-3 border-2 rounded-md transition"
			type={isPassword ? "password" : "text"}
      placeholder={placeholder}
		/>
	);
}
