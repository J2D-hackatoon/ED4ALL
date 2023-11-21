import { create } from 'zustand'
import { type District } from '../types/types'

interface StoreState {
    selectedDistrict: District | null
    setSelectedDistrict: (district: District) => void
}

export const useStore = create<StoreState>()(
    (set) => (
        {
            selectedDistrict: null,
            setSelectedDistrict: (district: District) => set({ selectedDistrict: district }),


        }
    )
)