import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools';
export const useStore = create((set) => ({
    recordData: [
        { id: 1, firstName: 'Mark', lastName: 'Barton' },
        { id: 2, firstName: 'Steven', lastName: 'Chapman' },
        { id: 3, firstName: 'Will', lastName: 'Constable' },
    ],




}))
mountStoreDevtool('Store1', useStore);