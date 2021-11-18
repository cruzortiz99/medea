import { map, range, reduce, tap } from "rxjs"

export function joinClasses(...classes: string[]) {
  return classes.join(" ")
}
export function randomColor(): string {
  let color: string = "#"
  range(0, 6)
    .pipe(
      map(() => "0123456789abcdef".split("")[Math.round(Math.random() * 16)]),
      reduce((acc, current) => `${acc}${current}`, color)
    )
    .subscribe((currentColor) => {
      color = currentColor
    })
  return color
}
