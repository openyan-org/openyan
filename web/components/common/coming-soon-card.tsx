import { MdOutlineMiscellaneousServices as WIPIcon } from "react-icons/md";

export default function ComingSoonCard() {
  return (
    <div className="p-8 border rounded-lg">
      <div className="flex items-center justify-center text-xl">
        Coming soon...
      </div>
      <div className="flex justify-center mt-8">
        <WIPIcon size={80} />
      </div>
    </div>
  )
}