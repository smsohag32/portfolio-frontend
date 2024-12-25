"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux-store/slice/authSlice";
import { AppDispatch } from "@/redux-store";
import { useRouter } from "next/navigation";

const schema = z.object({
   email: z.string().email({ message: "Invalid email address" }),
   password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

type LoginFormData = z.infer<typeof schema>;

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setLoading] = useState(false);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm<LoginFormData>({
      resolver: zodResolver(schema),
   });

   const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
      setLoading(true);
      const { email, password } = data;
      try {
         await dispatch(loginUser({ email, password })).unwrap();
         router.push("/dashboard/sohag");
         setLoading(false);
      } catch {
         setLoading(false);
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <Card className="w-full max-w-xl px-8 py-10 shadow-lg">
            <CardHeader className="space-y-1">
               <CardTitle className="lg:text-[28px] text-2xl font-normal text-title text-center">
                  Login
               </CardTitle>
               <CardDescription className="text-center">
                  Enter your email and password to access your account
               </CardDescription>
            </CardHeader>
            <CardContent>
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4">
                  <div className="space-y-2">
                     <Label htmlFor="email">Email</Label>
                     <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                           id="email"
                           placeholder="m@example.com"
                           className="pl-10"
                           {...register("email")}
                        />
                     </div>
                     {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                     )}
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="password">Password</Label>
                     <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                           id="password"
                           type={showPassword ? "text" : "password"}
                           className="pl-10"
                           {...register("password")}
                        />
                        <button
                           type="button"
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                           {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                           ) : (
                              <Eye className="h-5 w-5" />
                           )}
                        </button>
                     </div>
                     {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                     )}
                  </div>
                  <div className="pt-8">
                     <Button
                        type="submit"
                        disabled={isLoading || !isValid}
                        className="w-full ">
                        Sign In
                     </Button>
                  </div>
               </form>
            </CardContent>
         </Card>
      </div>
   );
};

export default Login;
