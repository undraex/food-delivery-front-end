// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
//   FieldSeparator,
// } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { BackIcon } from "@/_icons/BackIcon"

// export function SignupForm({
//   className,
//   ...props
// }) {
//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Card className="overflow-hidden p-0">
//         <CardContent className="grid p-0 md:grid-cols-2">
//           <form className="p-6 md:p-8">
//             <FieldGroup>
//              <Button variant="outline" size="icon" aria-label="Go Back">
//                 <BackIcon/>
//                 </Button>
//               <div className="flex flex-col items-center gap-2 text-center">
//                 <h1 className="text-2xl font-bold">Create your account</h1>
            
//               </div>
//               <Field>
//                 <FieldDescription>
//                  Sign up to explore your favorite dishes.
//                 </FieldDescription>
//                 <Input id="email" type="email" placeholder="Enter your email address" required />
//               </Field>
           
//               <Field>
//                 <Button type="submit">Create Account</Button>
//               </Field>
//               <FieldDescription className="text-center ">
//                 Already have an account? <a href="#" className="text-[#2563EB]">Sign in</a>
//               </FieldDescription>
//             </FieldGroup>
//           </form>
//           <div className="bg-muted relative hidden md:block">
//             <img
//               src="/deliveryMan.png"
//               alt="Image"
//               className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


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
              Log in
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
