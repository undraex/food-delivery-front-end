import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Step2({ next, back, formik }) {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
  } = formik;
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={(e) => {
          e.preventDefault(), handleSubmit(values);
        }}
      >
        <FieldGroup className="gap-6">
          <Button
            variant="outline"
            size="icon"
            aria-label="Submit"
            onClick={back}
          >
            <ChevronLeft />
          </Button>

          <div className="flex flex-col items-start gap-1 text-center">
            <h1 className="text-2xl font-bold">Create a strong password</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Create a strong password with letters, numbers.
            </p>
          </div>
          <div className="w-[416px]">
            <Field>
              <Field className=" gap-4">
                <Field>
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={cn(
                      "focus:outline-none",
                      errors.password && touched.password
                        ? "border-red-600"
                        : ""
                    )}
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-700 text-sm">{errors.password}</p>
                  )}
                </Field>
                <Field>
                  <Input
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={cn(
                      "focus:outline-none",
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-600"
                        : ""
                    )}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-red-700 text-sm">
                      {errors.confirmPassword}
                    </p>
                  )}
                </Field>
                <div className="flex justify-start items-start">
                  <Field className="flex flex-row  text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                      className="cursor-pointer w-[16px] h-[16px]"
                    />
                    Show password
                  </Field>
                </div>
              </Field>
            </Field>
          </div>

          <div className="w-[416px]">
            <Field>
              <Button
                type="submit"
                // onClick={handleSubmit}
                // disabled={isSubmitting}
              >
                Let's go
              </Button>
            </Field>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
