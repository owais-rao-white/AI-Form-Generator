"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import OpenAI from "openai";
import { revalidatePath } from "next/cache";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export const generateForm = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "User Not Found" };
    }

    // Define the Schema For Validating
    const schema = z.object({
      description: z.string().min(1, "Description is Required"),
    });

    const result = schema.safeParse({
      description: formData.get("description") as string,
    });

    if (!result.success) {
      return { success: false, message: "Inavlid from data", error: result.error.errors };
    }

    const description = result.data.description;

    if (!process.env.OPENAI_API_KEY) {
      return { success: false, message: "OpenAI API Key Not Found" };
    }

    const prompt =
      "create a json form with the following fields:title,fields(If any field include options then keep it inside array not object) ,botton ";

    // Request openai to generate the form  content

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: `${description} ${prompt}` }],
      model: "gpt-4o-mini", // Ensure model name is correct
    });

    console.log("ai generated the form ->", completion.choices[0]);
    const formContent = completion.choices[0]?.message.content;
    if (!formContent) {
      return { succes: false, message: "failed to generate form content" };
    }

    let formJsonData;
    try {
      formJsonData = JSON.parse(formContent);
    } catch (error) {
      console.log("Error parsing Json", error);
      return { succes: false, message: "Generated form content is not valid JSON" };
    }

    // Save form data in the database
    const form = await prisma.form.create({
      data: {
        ownerId: user.id,
        content: formJsonData ? formJsonData : null,
      },
    });

    revalidatePath("/dashboard/forms"); // optional revalidate a path if necessary

    return {
      success: true,
      message: "Form generated successfully",
      data: form,
    };
  } catch (error) {
    console.log("Error generated form", error);
    return { success: false, message: "An error has occurred while generating the form" };
  }
};

// JSON.parse(completion.choices[0].text);

// https://youtu.be/DNlBTMuGMso?t=7697  2:07
