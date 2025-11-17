import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { BackIcon } from "@/_icons/BackIcon";

export function SignupForm({
  className,
  ...props
}) {
  return (
    <form className={cn("flex flex-col gap-[16px]", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-start gap-1 ">
          <div>
              <Button variant="outline" size="icon" aria-label="Go Back">
                <BackIcon/>
                </Button>
          </div>
          <h1 className="text-2xl font-bold text-start">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <Field>
          <Input id="email" type="email" placeholder="Enter your email address" required />
        </Field>
      
        <Field>
          <Button type="submit">Let's go</Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <a href="#" className="hover:underline underline-offset-4 text-[#2563EB]">
              Log in
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
