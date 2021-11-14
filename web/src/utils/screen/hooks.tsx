import { useEffect, useState } from "react"

export interface ScreenDimensions {
  width: number
  height: number
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}

class ScreenDetails implements ScreenDimensions {
  width: number = 0
  height: number = 0
  /**@property xs screen smaller than 640 */
  xs: boolean = false
  /**@property sm screen smaller than 960 */
  sm: boolean = false
  /**@property md screen smaller than 1280 */
  md: boolean = false
  /**@property lg screen smaller than 1920 */
  lg: boolean = false
  /**@property xl screen greater than 1920 */
  xl: boolean = false
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.xs = width <= 640
    this.sm = width <= 960 && width > 640
    this.md = width <= 1280 && width > 960
    this.lg = width <= 1920 && width > 960
    this.xl = width > 1920
  }
}

export function useScreenDimension(): ScreenDetails {
  const [screen, setScreen] = useState(new ScreenDetails(0, 0))
  useEffect(() => {
    setScreen(new ScreenDetails(window.screen.width, window.screen.height))
  }, [window.screen.width, window.screen.height])
  return screen
}
