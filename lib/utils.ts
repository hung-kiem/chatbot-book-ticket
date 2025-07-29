import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimeOfDayGreeting(): string {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Chào buổi sáng";
  } else if (hour >= 12 && hour < 18) {
    return "Chào buổi chiều";
  } else {
    return "Chào buổi tối";
  }
}