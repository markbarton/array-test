import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools';
export const useStore = create((set) => ({
    recordData: [
        { id: 1, firstName: 'Mark', lastName: 'Barton' },
        { id: 2, firstName: 'Steven', lastName: 'Chapman' },
        { id: 3, firstName: 'Will', lastName: 'Constable' },
    ],


    updateRecords: (records) => {
        set((state) => {
            const recordData = [...state.recordData]
            // loop over records and update the corresponding object in services
            for (const [_id, _value] of Object.entries(records)) {
                recordData[_id] = { ...recordData[_id], ..._value }
            }
            return { recordData }
        }
        );
    },

}))
mountStoreDevtool('Store1', useStore);