'use client'

type InputProps = {
  value: string | number | readonly string[] | undefined
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
}

type InputLWithLabelProps = InputProps & { label: string }

export const Input = ({ value, handleInputChange, type = 'text', required = false }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={handleInputChange}
      required={required}
      className="bg-transparent border border-gray-300 rounded-md p-3 focus:outline-1 focus:outline-red-500 focus:border-red-500"
    />
  )
}

export const InputLWithLabel = ({ value, handleInputChange, type = 'text', required = false, label }: InputLWithLabelProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="password">{label}</label>
      <Input value={value} handleInputChange={handleInputChange} type={type} required={required} />
    </div>
  )
}
