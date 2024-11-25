export default function Badge({ text }: { text: string }) {
  return (
    <span className="ml-2 bg-teal-800 px-2 py-1 rounded-lg bg-opacity-50 border border-teal-600 text-teal-200 text-sm" >{text}</span>
  )
}