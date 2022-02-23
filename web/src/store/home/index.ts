import { BehaviorSubject } from "rxjs"

export type RightMenuOption = { label: string; href: string }

const rightMenuOptionStore = new BehaviorSubject<RightMenuOption[]>([])

const isLoadingStore = new BehaviorSubject<boolean>(false)

export const homeStore = {
  rightMenuOptions: rightMenuOptionStore,
  isLoading: isLoadingStore,
}

export default homeStore
