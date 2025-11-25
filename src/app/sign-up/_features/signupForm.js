"use client";

import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";

export function SignupForm({ className, ...props }) {
  const router = useRouter();

  const handleLoginButton = () => {
    console.log("hello");
    router.push("/login");
  };

  return (
    <form className={cn("flex flex-col gap-[16px]", className)} {...props}>
      <div
        onClick={handleLoginButton}
        className="hover:underline underline-offset-4 text-[#2563EB]"
        style={{ fontSize: "300px", color: "red" }}
      >
        Log in
      </div>
      <FieldGroup>
        <div className="flex flex-col items-start gap-1 ">
          <div>
            <Button variant="outline" size="icon" aria-label="Go Back">
              <BackIcon />
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-start">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <Field>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </Field>

        <Field>
          <Button type="submit">Let's go</Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <a
              href="#"
              className="hover:underline underline-offset-4 text-[#2563EB]"
            >
              Log in
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
