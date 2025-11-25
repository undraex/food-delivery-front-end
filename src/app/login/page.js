"use client";
import { useState } from "react";
import { LoginForm } from "@/app/login/loginForm";
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
      .min(8, "it must be above 8 characters")
      .required("Required"),
  });
  const createUser = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:999/authentication/login",
        {
          email: email,
          password: password,
        }
      );

      router.push("/admin");
      alert("Succesfull");
    } catch (err) {
      alert("boldguee");
      if (err.response?.data) {
        setApiError(err.response.data);
      } else {
        setApiError("Something went wrong. Please try again.");
      }
    }
  };

  // const createUser = async (email, password) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:999/authentication/login",
  //       { email, password }
  //     );
  //     console.log("LOGIN SUCCESS:", response.data);

  //     router.push("/home");
  //   } catch (err) {
  //     console.log("LOGIN ERROR:", err);
  //     alert("boldguee");
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("hello");
      const { email, password } = values;
      await createUser(email, password);
    },
  });
  return (
    <div className="grid min-h-svh lg:grid-cols-2 items-center">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm formik={formik} />
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
