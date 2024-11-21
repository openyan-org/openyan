import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// FOR SHADCN

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}