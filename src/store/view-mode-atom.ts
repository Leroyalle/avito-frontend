import { ViewMode, ViewModeStorageKey } from '@/types';
import { atom } from 'jotai';

export const viewModeAtom = atom<ViewMode, [newMode: ViewMode], void>(
  'grid',
  (_, set, newMode: ViewMode) => {
    set(viewModeAtom, newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem(ViewModeStorageKey.KEY, newMode);
    }
  },
);

if (typeof window !== 'undefined') {
  const storedMode = localStorage.getItem(ViewModeStorageKey.KEY) as ViewMode;
  if (storedMode) {
    viewModeAtom.onMount = (set) => {
      set(storedMode);
    };
  }
}
