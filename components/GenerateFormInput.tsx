"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sparkle } from "lucide-react";
import React, { ChangeEvent, useActionState, useEffect, useState } from "react";
import { generateForm } from "@/actions/generateForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type InitialState = {
  message: string;
  success: boolean;
  data?: any;
};

const initialState: InitialState = {
  message: "",
  success: false,
};

const GenerateFormInput: React.FC<{ text?: string }> = ({ text }) => {
  const [descripiton, setDescription] = useState<string | undefined>("");
  const [state, formAction] = useActionState(generateForm, initialState);
  const router = useRouter();

  useEffect(() => {
    setDescription(text);
  }, [text]);

  useEffect(() => {
    if (state.success) {
      console.log("Response ->", state.data);
      toast(state.message);
      router.push(`/dashboard/forms/edit/${state.data.id}`);
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [router, state]);

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <form action={formAction} className="flex items-center gap-3 my-8">
      <Input
        id="description"
        name="description"
        value={descripiton}
        onChange={changeEventHandler}
        type="text"
        placeholder="Write a prompt to Generate Form..."
        required
      />
      <SubmitButton />
    </form>
  );
};

export default GenerateFormInput;

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="h-12 bg-gradient-to-r from-blue-500 to bg-purple-600">
      <Sparkle className="mr-2" />
      {pending ? <span>Generating Form</span> : "Generate Form..."}
    </Button>
  );
};

// https://youtu.be/DNlBTMuGMso?t=7254 2:00
