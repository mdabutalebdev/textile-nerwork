'use client'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import Link from "next/link";
import {AuthHeader} from "@/shared";
import Button from "@/components/ui/button";
import {Input} from "@/components/ui/input"
import React from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage
} from "@/components/ui/form"

const formSchema = z.object({
    email: z.string().min(3,{ message: 'Must have at least 3 character' }).email({
        message: 'Must be a valid email',
    }),
    password: z.string().min(8, {
        message: "Your password is not valid",
    })
})


export default function Login() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const handleSubmit = async (data) => {

    }

    return (
        <div className="container mx-auto">
            <div className="auth-wrap flex flex-col justify-center items-center">
                <AuthHeader logo={'/logo-sm.svg'}/>
                <div className="w-full sm:w-[360px] mx-auto">
                    <h1 className="text-center auth_title">Log in to your account</h1>
                    <div className="auth-form pt-10">
                        <Form  {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)}>
                                <div className="grid grid-cols-1 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="afrm-label">Enter your email</FormLabel>
                                                <FormControl>
                                                    <Input type="email"
                                                           placeholder="basharvai@textile.com" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="afrm-label">Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" {...field} />
                                                </FormControl>
                                                <FormDescription className="text-center underline">
                                                    <Link className="frm-alink" href="#">Forgot password</Link>
                                                </FormDescription>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <Button className="w-full mt-2" type="submit">
                                        Log in
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                    <div className="pt-8 text-center">
                        <p className="frm_cr">Don’t have an account? <Link className="text-primary text-base font-semibold"
                                                                           href="/sign-up">Sign
                            up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
  