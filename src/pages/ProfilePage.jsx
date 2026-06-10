import React, { useEffect, useState } from 'react';
import avatarImg from '../assets/avatar.png';
import cameraIcon from '../assets/camera-icon.png';

const ProfilePage = () => {
    const [user, setUser] = useState({
        fullName: 'Marry Doe',
        email: 'Marry@Gmail.Com'
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser.fullName) {
                    setUser({
                        fullName: parsedUser.fullName,
                        email: parsedUser.email || 'Marry@Gmail.Com'
                    });
                }
            } catch (error) {
                console.error("Error parsing user from localStorage:", error);
            }
        }
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-white sm:bg-gradient-to-br sm:from-indigo-100 sm:via-white sm:to-purple-100 sm:animate-gradient-xy overflow-hidden">
            <div className="relative border-2 border-[#E5E5E5] sm:h-[812px] h-screen w-full sm:w-[375px] flex flex-col justify-start bg-white shadow-xl sm:rounded-[32px] overflow-hidden animate-fade-in">

                {/* Header */}
                <div className="h-[64px] w-full border-b border-[#E5E5E5] flex items-center px-[24px] bg-white z-10 shrink-0">
                    <h2 className="text-[18px] font-semibold text-[#1D2939] m-0">
                        Account Settings
                    </h2>
                </div>

                {/* Content */}
                <div className="p-[24px] flex flex-col bg-[#F7F8F9] flex-1 overflow-y-auto custom-scrollbar">
                    
                    <div className="flex items-center gap-[20px] animate-slide-up delay-100">
                        <div className="relative w-[80px] h-[80px] shrink-0 group">
                            <img
                                src={avatarImg}
                                alt="User Avatar"
                                className="w-full h-full rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="absolute bottom-0 right-0 w-[24px] h-[24px] rounded-full bg-[#6C38FF] flex items-center justify-center border-2 border-white shadow-md cursor-pointer hover:bg-[#5b2de6] transition-colors duration-300">
                                <img
                                    src={cameraIcon}
                                    alt="Camera Icon"
                                    className="w-[12px] h-[12px]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[4px] overflow-hidden">
                            <h3 className="text-[18px] font-semibold text-[#1D2939] m-0 truncate">
                                {user.fullName}
                            </h3>
                            <p className="text-[14px] text-[#667085] m-0 truncate">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <p className="text-[14px] text-[#667085] leading-[1.6] mt-[28px] mb-[28px] text-left animate-slide-up delay-200">
                        As a member of Educase India, you have full access to our personalized school management system. Manage your profile, customize your dashboard, and enjoy a seamless digital experience.
                    </p>

                    <div className="border-t border-dashed border-[#CBCBCB] w-full animate-fade-in delay-300"></div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
