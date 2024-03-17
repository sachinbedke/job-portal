import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'

import { useContinueWithGoogleMutation } from '@/redux/apis/authApi'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Login = () => {
    return <div className="container relative  h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
            href="/examples/authentication"
            className="absolute right-4 top-4 md:right-8 md:top-8"
        >
            Login
        </a>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="relative z-20 flex items-center text-lg font-medium">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-6 w-6"
                >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                SKILLHUB
            </div>
            <div className="relative z-20 mt-auto">
                <blockquote className="space-y-2">
                    <p className="text-lg">
                        &ldquo;This library has saved me countless hours of work and
                        helped me deliver stunning designs to my clients faster than
                        ever before.&rdquo;
                    </p>
                    <footer className="text-sm">Sofia Davis</footer>
                </blockquote>
            </div>
        </div>
        <div className="lg:p-8 ">
            <div className="mx-auto  flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Create an account
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email below to create your account
                    </p>
                </div>
                <UserAuthForm />
                <p className="px-8 text-center text-sm text-muted-foreground">
                    By clicking continue, you agree to our{" "}
                    <a
                        href="/terms"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                        href="/privacy"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </div>
    </div>
}



export function UserAuthForm({ className, ...props }) {
    const [type, setType] = useState("user")
    const [handleLogin, { isSuccess, data }] = useContinueWithGoogleMutation()
    const [isLoading, setIsLoading] = React.useState(false)

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    useEffect(() => {
        if (isSuccess || user) {
            if (user.role === "emp") { navigate("/employer") }
            if (user.role === "user") { navigate("/user") }
            if (user.role === "admin") { navigate("/admin") }
        }
    }, [isSuccess])

    return (
        <div className={cn("grid gap-6 ", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {/* {isLoading && (
                            // <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )} */}
                        Sign In with Email
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Select onValueChange={val => setType(val)} defaultValue={type}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Login As" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select Role</SelectLabel>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="emp">Employer</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <GoogleLogin
                onSuccess={response => handleLogin({ ...response, type })}
                onError={err => console.log(err)}
            />
        </div>
    )
}
export default Login