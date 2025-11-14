import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { BackIcon } from "@/_icons/BackIcon";

export function LoginForm({
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
          <h1 className="text-2xl font-bold text-start">Log in</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <Field>
          <Input id="email" type="email" placeholder="Enter your email address" required />
        </Field>
        <Field>
          <Input id="password" type="password" placeholder="Password" required />
          <div className="flex items-center">
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline items-start">
              Forgot your password?
            </a>
          </div>
        </Field>
        <Field>
          <Button type="submit">Let's go</Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Don't have an account?{" "}
            <a href="#" className="hover:underline underline-offset-4 text-[#2563EB]">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
