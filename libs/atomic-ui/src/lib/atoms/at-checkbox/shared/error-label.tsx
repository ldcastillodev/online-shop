interface ErrorLabelProps {
  message?: string
}

export const ErrorLabel = ({ message }: ErrorLabelProps) => {
  return <div className="text-feedback-negative-300 font-regular text-12">{message}</div>
}
