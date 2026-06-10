import React, { useState } from 'react'
import InputField from '../components/InputField/InputField'
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: 'yes'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered Data:", formData);
        localStorage.setItem('user', JSON.stringify(formData));
        navigate('/profile');
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-white sm:bg-gradient-to-br sm:from-indigo-100 sm:via-white sm:to-purple-100 sm:animate-gradient-xy overflow-hidden">
            <div className="relative border-2 border-[#E5E5E5] sm:h-[812px] h-screen w-full sm:w-[375px] flex flex-col justify-start bg-[#F7F8F9] p-[24px] shadow-xl sm:rounded-[32px] overflow-y-auto custom-scrollbar animate-fade-in">
                
                <div className="mb-[28px] mt-[12px] animate-slide-down">
                    <h1 className="text-[28px] font-semibold text-[#1D2939] leading-tight m-0">
                        Create your <br />PopX account
                    </h1>
                </div>

                <div className="flex-1 animate-slide-up delay-100">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <InputField
                            label="Full Name"
                            required
                            type="text"
                            placeholder="Marry Doe"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Phone number"
                            required
                            type="tel"
                            placeholder="Marry Doe"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Email address"
                            required
                            type="email"
                            placeholder="Marry Doe"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Password"
                            required
                            type="password"
                            placeholder="Marry Doe"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Company name"
                            type="text"
                            placeholder="Marry Doe"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />

                        <InputField
                            label="Are you an Agency?"
                            required
                            type="radio"
                            name="isAgency"
                            options={[
                                { label: 'Yes', value: 'yes' },
                                { label: 'No', value: 'no' }
                            ]}
                            value={formData.isAgency}
                            onChange={handleChange}
                        />

                    </form>
                </div>
                
                <div className="pb-[16px] mt-[40px] z-10 animate-slide-up delay-200">
                    <Button onClick={handleSubmit}>
                        Create Account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
