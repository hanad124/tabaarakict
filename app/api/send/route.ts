import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "tabaarak <tabaarakict.com>",
      to: ["hanaddaahir124@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        firstName: "Hanad Mohamed",
      }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
