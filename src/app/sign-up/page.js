"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Step1 from "./_features/step1";
import Step2 from "./_features/step2";

export default function SignupPage() {
  const [step, setStep] = useState(1);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "it must be above 8 characters")
      .matches(/[a-zA-Z]/, "it must contain letters")
      .matches(/[0-9]/, "it must contain numbers")
      .matches(/[^a-zA-Z0-9]/, "it must contain symbols")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div className="grid min-h-svh lg:grid-cols-2 items-center">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs">
            {step === 1 && <Step1 next={next} formik={formik} />}
            {step === 2 && <Step2 next={next} back={back} formik={formik} />}
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
