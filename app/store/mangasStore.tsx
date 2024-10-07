import { create } from 'zustand';

interface AppState {
    title: string;
    id: string;
    image: string;
    idChapter: string;
    setTitle: (newTitle: string) => void;
    setId: (newId: string) => void;
    setImage: (newImage:string) => void
    setIdChapter: (newIdChapter : string) => void
  }
  
  export const useMangaStore = create<AppState>((set) => ({
    title: '',
    id: '',
    image : '',
    idChapter:'',
    setTitle: (newTitle: string) => set({ title: newTitle }),
    setId: (newId: string) => set({ id: newId }),
    setImage: (newImage:string) => set({image: newImage}),
    setIdChapter : (newIdChapter : string) => set({idChapter : newIdChapter})
  }));