import { BehaviorSubject } from "rxjs"

export type RightMenuOption = {label: string, href: string}

export const RightMenuOptionStore = new BehaviorSubject<RightMenuOption[]>([])