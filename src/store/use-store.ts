import { create } from "zustand"

interface Project {
  id: string
  title: string
  category: string
  date: string
  description: string
  images: string[]
  content: string
  similarProjects: string[]
}

interface StoreState {
  selectedProject: Project | null
  isProjectModalOpen: boolean
  isMobileMenuOpen: boolean
  setSelectedProject: (project: Project | null) => void
  setProjectModalOpen: (open: boolean) => void
  setMobileMenuOpen: (open: boolean) => void
}

export const useStore = create<StoreState>((set) => ({
  selectedProject: null,
  isProjectModalOpen: false,
  isMobileMenuOpen: false,
  setSelectedProject: (project) => set({ selectedProject: project }),
  setProjectModalOpen: (open) => set({ isProjectModalOpen: open }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}))
