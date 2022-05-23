/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react'

export default function useDebounce() {
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>()

  const debounce = async (func: () => void, wait: number) => {
    clearTimeout(typingTimeout!)
    const timeout = setTimeout(() => {
      func()
    }, wait)
    setTypingTimeout(timeout)
  }

  return debounce
}
