import React from 'react'
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const LandingScreen = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => navigate('/register');
    const handleLoginClick = () => navigate('/login');

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-white sm:bg-gradient-to-br sm:from-indigo-100 sm:via-white sm:to-purple-100 sm:animate-gradient-xy overflow-hidden relative">

            {/* Recruiter Note - Hidden on mobile, visible on desktop */}
            <div className="hidden sm:flex absolute top-6 right-6 bg-yellow-100/60 backdrop-blur-md border border-yellow-300 text-yellow-800 px-4 py-3 rounded-2xl shadow-sm text-sm font-medium items-center gap-2 animate-fade-in z-50 max-w-xs">
                <span>📱</span>
                <p className="m-0 leading-snug">
                    <span className="font-bold">Hi!</span> For the best experience, please view this app using mobile layout
                    
                </p>
            </div>

            <div className="relative border-2 border-[#E5E5E5] sm:h-[812px] h-screen w-full sm:w-[375px] flex flex-col justify-end bg-[#F7F8F9] p-[24px] shadow-xl sm:rounded-[32px] overflow-hidden animate-fade-in">

                {/* Decorative background elements */}
                <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[200px] left-[-50px] w-[150px] h-[150px] bg-blue-400 opacity-10 rounded-full blur-2xl animate-pulse delay-700"></div>

                <div className="flex-1"></div>

                <div className="flex flex-col gap-[8px] mb-[32px] z-10 animate-slide-up">
                    <h1 className="text-[28px] font-bold text-[#1D2939] m-0 leading-tight">
                        Welcome to PopX
                    </h1>
                    <p className="text-[15px] text-[#B8BBBC] m-0 leading-[1.5]">
                        Transform your educational<br />journey with our digital platform.
                    </p>
                </div>

                <div className="flex flex-col gap-[12px] pb-[16px] z-10 animate-slide-up delay-150">
                    <Button onClick={handleRegisterClick}>
                        Create Account
                    </Button>
                    <Button variant="secondary" onClick={handleLoginClick}>
                        Already Registered? Login
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LandingScreen