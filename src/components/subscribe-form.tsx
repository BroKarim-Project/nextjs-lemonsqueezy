"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React, { useState, useRef, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

type Props = {};

const requiredSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

function SubscribeForm({}: Props) {
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [run, setRun] = useState<boolean>(false);
  const [totalCounts, setTotalCounts] = useState<number>(400);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
  }, []);
  return (
    <div className="flex flex-col space-y-8 md:w-[500px]">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={requiredSchema}
        onSubmit={async (values, { resetForm }) => {
          setButtonDisabled(true);
          try {
            const response = await fetch("/api/subscribe", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: values?.email,
              }),
            });
            const datas = await response.json();
            if (datas.status >= 400) {
              setStatus(datas.status);
              setMessage("Error joining the newsletter. You can directly contact me at github@ebraj.");
              setTimeout(() => {
                setMessage("");
                setButtonDisabled(false);
              }, 2000);
              return;
            }

            setStatus(201);
            setMessage("Thank you for subscribing my newsletter 👻.");
            setRun(true);
            setTimeout(() => {
              setTotalCounts(0);
              setMessage("");
              resetForm();
              setButtonDisabled(false);
            }, 4000);
            setTotalCounts(400);
          } catch (error) {
            setStatus(500);
            setMessage("Error joining the newsletter. You can directly contact me at github@ebraj.");
            setTimeout(() => {
              setMessage("");
              setButtonDisabled(false);
            }, 2000);
          }
        }}
      >
        <Form className="w-full">
          <div className="w-full bg-transparent border flex-1 border-black rounded-full flex gap-2 px-3">
            <Field type="email" name="email" className="w-full grow rounded-md bg-transparent px-5 py-3 outline-none" placeholder="Enter your email" autoComplete="off" />
            <button className="rounded-full bg-black  my-2 px-4 py-2 font-bold text-gray-100 transition-all hover:scale-105 hover:bg-gray-900 disabled:opacity-80" type="submit" disabled={buttonDisabled}>
              {submitting ? "Submitting" : "Subscribe"}
            </button>
          </div>
          {message && <p className={`${status !== 201 ? "text-red-500" : "text-green-500"} pt-4 font-black`}>{message}</p>}
        </Form>
      </Formik>
    </div>
  );
}

export default SubscribeForm;
