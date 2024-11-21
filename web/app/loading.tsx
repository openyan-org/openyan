import { FaAsterisk as OpenYanLogo } from "react-icons/fa"

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="text-4xl flex items-center justify-center">
          <OpenYanLogo /> OpenYan
        </div>
        <div className="flex justify-center">
          <div
            className="my-10 inline-block h-12 w-12 animate-spin rounded-full border-[6px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-teal-400"
            role="status"
          />
        </div>
      </div>
    </div>
  )
}