import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'; // so we can debug the values in the React Dev Tools
export const useStore = create((set) => ({
    // initial state
    recordData: [
        { id: 1, firstName: 'Mark', lastName: 'Barton' },
        { id: 2, firstName: 'Steven', lastName: 'Chapman' },
        { id: 3, firstName: 'Will', lastName: 'Constable' },
    ],

    // function to update the records
    updateRecords: (records) => {
        set((state) => {
            const recordData = [...state.recordData] // copy the recordData array
            // loop over records and update the corresponding object in recordData
            for (const [_id, _value] of Object.entries(records)) {
                recordData[_id] = { ...recordData[_id], ..._value }
            }
            return { recordData }
        }
        );
    },

}))
// Following line for debug purposes only
mountStoreDevtool('Store1', useStore);