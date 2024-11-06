// Hooks
import { useForm } from "react-hook-form";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Components 
import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";

// Icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().trim().min(1, "required"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum 8 Characters Required")
})

export const RegisterCard = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values })
  }

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">
          Sgin Up
        </CardTitle>
        <CardDescription>
          By signing up, you agree to our {" "}
          <Link href="/privacy">
            <span className="text-blue-700">Privacy Policy</span>
          </Link>{" "}
          and {" "}
          <Link href="/terms">
            <span className="text-blue-700">Terms of Service</span>
          </Link>{" "}
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator className="" />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" >

            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" disabled={false} size="lg">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator className="" />
      </div>
      <CardContent className="flex flex-col gap-y-4 p-7">
        <Button
          className="w-full"
          variant="secondary"
          size="lg"
          disabled={false}
        >
          <FcGoogle className="mr-2 size-5" />
          Login With Google
        </Button>
        <Button
          className="w-full"
          variant="secondary"
          size="lg"
          disabled={false}
        >
          <FaGithub className="mr-2 size-5" />
          Login With Github
        </Button>
      </CardContent>
      <div className="px-7">
        <DottedSeparator className="" />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Already have an account?
          <Link href="/login">
           <span className="text-blue-700">&nbsp;Sign In</span> 
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}