import React from 'react';
import HomeNavbar from "@/app/components/organisms/home-navbar/HomeNavbar";

const ProfileLayout = ({children} : {
    children : React.ReactNode
}) => {
    return (
        <div className={"w-full h-full flex flex-col gap-[30px]"}>
            <HomeNavbar />
            <div className={"w-full px-[215px] flex flex-col gap-[30px]"}>
                {children}
            </div>
        </div>
    );
};

export default ProfileLayout;
