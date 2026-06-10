import React, { useState } from 'react'
import InputField from '../components/InputField/InputField'
import Button from '../components/Button/Button'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = email.length > 0 && password.length > 0;

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-white sm:bg-gradient-to-br sm:from-indigo-100 sm:via-white sm:to-purple-100 sm:animate-gradient-xy overflow-hidden">
            <div className="relative border-2 border-[#E5E5E5] sm:h-[812px] h-screen w-full sm:w-[375px] flex flex-col justify-start bg-[#F7F8F9] p-[24px] shadow-xl sm:rounded-[32px] overflow-y-auto animate-fade-in">

                <div className="mt-[12px] animate-slide-down">
                    <h1 className="text-[32px] font-semibold text-[#000000] mb-[8px] leading-tight">
                        Signin to your <br />PopX account
                    </h1>

                    <p className="text-[16px] text-[#B8BBBC] mb-[36px] leading-relaxed">
                        Access your digital school<br />management dashboard.
                    </p>
                </div>

                <div className="flex-1 animate-slide-up delay-100">
                    <form className="flex flex-col gap-2">
                        <InputField
                            label="Email Address"
                            placeholder="Enter email address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            label="Password"
                            placeholder="Enter password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="mt-2">
                            <Button disabled={!isFormValid}>Login</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage