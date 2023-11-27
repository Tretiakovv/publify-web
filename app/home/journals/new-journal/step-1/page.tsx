"use client"

import TextInput from "@/app/components/atoms/inputs/TextInput";
import CreateJournalStepWrapper
    from "@/app/components/wrappers/layout/create-journal-step-wrapper/CreateJournalStepWrapper";

const CreateJournalFirstStepPage = () => {
    return (
        <CreateJournalStepWrapper>
            <TextInput
                label={"Journal name"}
                labelClassName={"text-[18px] text-text-black"}
                placeholder={"Type here name of your organization"}
            />
            <TextInput
                label={"Journal description"}
                labelClassName={"text-[18px] text-text-black"}
                placeholder={"Enter description of your journal"}
            />
        </CreateJournalStepWrapper>
    );
};

export default CreateJournalFirstStepPage;
