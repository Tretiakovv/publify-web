import {Exception, Journal} from "@/app/types/entities";
import {StateCreator} from "zustand";
import api from "@/app/api/api";

type FirstStepData = {
    title: string,
    description: string
}

type SecondStepData = {
    employeeEmails: string[]
}

export type CreateJournalSlice = {
    journal: Journal,
    createJournal: () => Promise<Exception | void>,
    fillData: (data: FirstStepData | SecondStepData) => void,
}

export const createJournalSlice: StateCreator<CreateJournalSlice, [], [], CreateJournalSlice> = (set, get) => ({

    journal: {
        title: "",
        description: "",
        organizationId: 0,
        employeeEmails: []
    },

    createJournal: async () => {

        const organizationId = (localStorage.getItem("ORGANIZATION_ID") ?? 0) as number
        const journal: Journal = {...get().journal, organizationId: organizationId}

        return api.post('/journal', journal)
            .then((response) => {
                console.log(response)
                return response.data.exception as Exception
            })
            .catch(console.log)

    },

    fillData: (data: FirstStepData | SecondStepData) => set((state) => ({
        journal: {
            ...state.journal,
            ...data
        }
    }))

})