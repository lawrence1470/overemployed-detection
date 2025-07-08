"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { api } from "~/trpc/react";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<SignInFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const signInMutation = api.auth.signIn.useMutation();

  const handleChange = (field: keyof SignInFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form data
      const validatedData = signInSchema.parse(formData);

      // Clear any previous errors
      setErrors({});

      // Attempt sign in
      const result = await signInMutation.mutateAsync(validatedData);

      if (result.success) {
        router.push("/dashboard");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Partial<SignInFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof SignInFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Handle API errors
        setErrors({ email: "Invalid email or password" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center font-extrabold text-3xl text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-300 text-sm"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`relative mt-1 block w-full appearance-none border px-3 py-2 ${
                  errors.email ? "border-red-500" : "border-gray-600"
                } rounded-md bg-gray-800 text-white placeholder-gray-400 focus:z-10 focus:border-indigo-400 focus:outline-none focus:ring-indigo-400 sm:text-sm`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-medium text-gray-300 text-sm"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`relative mt-1 block w-full appearance-none border px-3 py-2 ${
                  errors.password ? "border-red-500" : "border-gray-600"
                } rounded-md bg-gray-800 text-white placeholder-gray-400 focus:z-10 focus:border-indigo-400 focus:outline-none focus:ring-indigo-400 sm:text-sm`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              {errors.password && (
                <p className="mt-1 text-red-600 text-sm">{errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative flex w-full justify-center rounded-md border border-transparent px-4 py-2 font-medium text-sm text-white ${
                isLoading
                  ? "cursor-not-allowed bg-gray-600"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>

          <div className="text-center">
            <a
              href="/sign-up"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Don't have an account? Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
