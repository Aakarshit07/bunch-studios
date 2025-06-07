import { Project } from "@/types/project.types"
import { create } from "zustand"

interface ISharedStore {
  selectedProject: Project | null
  isProjectModalOpen: boolean
  isMobileMenuOpen: boolean
  setSelectedProject: (project: Project | null) => void
  setProjectModalOpen: (open: boolean) => void
  setMobileMenuOpen: (open: boolean) => void
}

export const useSharedStore = create<ISharedStore>((set) => ({
  selectedProject: null,
  isProjectModalOpen: false,
  isMobileMenuOpen: false,
  setSelectedProject: (project) => set({ selectedProject: project }),
  setProjectModalOpen: (open) => set({ isProjectModalOpen: open }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}))
