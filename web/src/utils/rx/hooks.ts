import { useEffect, useRef, useState } from "react"
import { Observable } from "rxjs"

export function useObservable<T, O extends Observable<T>>(observable: O):[T|undefined,O] {
  const [value, setValue] = useState<T>()
  const observableRef = useRef(observable)
  useEffect(() => {
    const subscription = observableRef.current.subscribe(setValue)
    return () => subscription.unsubscribe()
  }, [observableRef.current])
  return [value, observableRef.current]
}