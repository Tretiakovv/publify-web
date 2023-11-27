import React from 'react';
import {IssueShortDTO} from "@/app/types/entities";
import CardWrapper from "@/app/components/wrappers/card/card-wrapper/CardWrapper";
import {cn} from "@/app/utils/cn";
import {ClassValue} from "clsx";
import Text from "@/app/components/atoms/text/Text";
import Image from "next/image";
import {FiSettings, FiTrash2} from "react-icons/fi";

type IssueCardV2Props = {
    issue: IssueShortDTO,
    className?: string
}

const IssueCardV2 = ({issue, className}: IssueCardV2Props) => {

    const classValues: ClassValue[] = [
        "col-span-3 p-5", className
    ]

    return (
        <CardWrapper className={cn(classValues)}>
            <Text
                text={issue.title}
                className={"text-[18px] text-text-black pb-5 border-b-2 border-background"}
            />
            <Image
                className={"w-full h-[300px] object-fill"}
                src={issue.image}
                width={100}
                height={100}
                alt={'/'}
                quality={100}
            />
            <div className={"flex flex-row items-center justify-between"}>
                <Text
                    text={`#${issue.issueNumber}`}
                    className={"text-[18px] text-text-black"}
                />
                <Text
                    text={issue.date}
                    className={"text-[18px] text-text-black"}
                />
                <div className={"flex flex-row gap-[15px] items-center"}>
                    <FiSettings
                        size={"20px"}
                        className={"stroke-text-gray hover:cursor-pointer hover:stroke-info-blue-default"}
                        onClick={() => console.log("Settings Clicked")}
                    />
                    <FiTrash2
                        size={"20px"}
                        className={"text-text-gray hover:cursor-pointer hover:stroke-info-red"}
                        onClick={() => console.log("Delete Clicked")}
                    />
                </div>
            </div>
        </CardWrapper>
    );
};

export default IssueCardV2;
