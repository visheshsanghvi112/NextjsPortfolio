"use client";
import { create } from 'zustand';

type PaletteState = {
  paletteOpen: boolean;
  openPalette: () => void;
  closePalette: () => void;
  togglePalette: () => void;
  toggleCommandPalette: () => void;
};

export const useUIStore = create<PaletteState>((set) => ({
  paletteOpen: false,
  openPalette: () => set({ paletteOpen: true }),
  closePalette: () => set({ paletteOpen: false }),
  togglePalette: () => set((s) => ({ paletteOpen: !s.paletteOpen })),
  toggleCommandPalette: () => set((s) => ({ paletteOpen: !s.paletteOpen })),
}));
