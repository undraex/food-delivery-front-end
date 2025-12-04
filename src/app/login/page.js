"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { BackIcon } from "@/_icons/BackIcon";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [apiError, setApiError] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "It must be above 8 characters")
      .required("Required"),
  });

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:999/authentication/login",
        {
          email: email,
          password: password,
        }
      );

      console.log("response", response);
      localStorage.setItem("token", response.data.token);
      router.push("/admin");
      // alert("Successful");
    } catch (err) {
      console.log("err", err);

      // if (err.response?.data) {
      //   setApiError(err.response.data);
      // } else {
      //   setApiError("Something went wrong. Please try again.");
      // }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await loginUser(values.email, values.password);
    },
  });

  return (
    <div className="grid min-h-svh lg:grid-cols-2 items-center">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {/* --- FORM START --- */}
            <form
              className="flex flex-col gap-[16px]"
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
            >
              <FieldGroup>
                <div className="flex flex-col items-start gap-1">
                  <div>
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Go Back"
                      onClick={() => router.push("/sign-up")}
                    >
                      <BackIcon />
                    </Button>
                  </div>

                  <h1 className="text-2xl font-bold text-start">Log in</h1>
                  <p className="text-muted-foreground text-sm text-balance">
                    Log in to enjoy your favorite dishes.
                  </p>
                </div>

                <Field>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.email}
                    </p>
                  )}
                </Field>

                <Field>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    required
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.password}
                    </p>
                  )}

                  <div className="flex items-center">
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </Field>

                <Field>
                  <Button type="submit">Let's go</Button>
                </Field>

                {/* {apiError && (
                  <p className="text-red-500 text-sm text-center">{apiError}</p>
                )} */}

                <Field>
                  <FieldDescription className="text-center">
                    Don't have an account?{" "}
                    <a
                      href="/sign-up"
                      className="hover:underline underline-offset-4 text-[#2563EB]"
                    >
                      Sign up
                    </a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
            {/* --- FORM END --- */}
          </div>
        </div>
      </div>

      <div className="bg-muted relative hidden lg:block w-[856px] h-[904px]">
        <img
          src="/deliveryMan.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
