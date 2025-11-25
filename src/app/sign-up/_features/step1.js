"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

export default function Step1({ next, formik }) {
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    formik;

  return (
    <div className="flex flex-col gap-6">
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          formik.setTouched({ email: true });
          formik.validateForm().then((errors) => {
            if (!errors.email) next();
          });
        }}
      >
        <FieldGroup className="gap-6">
          <Button variant="outline" size="icon" aria-label="Submit">
            <ChevronLeft />
          </Button>

          <div className="flex flex-col items-start gap-1 text-center">
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Sign up to explore your favorite dishes.
            </p>
          </div>

          <div className="w-[416px]">
            <Field>
              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="m@example.com"
                className={cn(
                  "focus:outline-none",
                  errors.email && touched.email ? "border-red-600" : ""
                )}
              />
              {errors.email && touched.email && (
                <p className="text-red-700 text-sm">{errors.email}</p>
              )}
            </Field>
          </div>
          <div className="w-[416px]">
            <Field>
              <Button type="submit">Let's go</Button>
            </Field>
          </div>

          <div className="gap-[12px]">
            <FieldDescription className="text-center items-center justify center">
              Already have an account?
              <a
                href="/login"
                className="hover:underline underline-offset-4 text-[#2563EB]"
              >
                Log in
              </a>
            </FieldDescription>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
