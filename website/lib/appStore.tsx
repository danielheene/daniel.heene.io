import React from 'react';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Settings } from './types';

type AppStore = {
  isRouteChanging: boolean;
  showNavigation: boolean;
  headerHeight: number | null;
  settings: Partial<Settings>;
  setRouteChanging: (changing: boolean) => void;
  setShowNavigation: (show: boolean) => void;
  setHeaderHeight: (height: number) => void;
  setSettings: (settings: Partial<Settings>) => void;
};

export const useAppStore = create<AppStore, [['zustand/immer', AppStore]]>(
  immer((set) => ({
    isRouteChanging: false,
    showNavigation: false,
    headerHeight: null,
    settings: {},
    setRouteChanging: (changing) => set(() => ({ isRouteChanging: changing })),
    setShowNavigation: (show) => set(() => ({ showNavigation: show })),
    setHeaderHeight: (height) => set(() => ({ headerHeight: height })),
    setSettings: (settings) =>
      set((state) => ({ settings: { ...state.settings, ...settings } })),
  }))
);
