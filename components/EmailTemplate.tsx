import * as React from "react";
import logo from "../public/assets/tabaarak-logo.svg";
import Image from "next/image";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  company: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  company,
  message,
}) => (
  <div
    className="bg-blue-400 text-slate-700 email-template"
    style={{
      backgroundColor: "#0b63e5",
      color: "white",
      padding: "2rem",
      margin: "1rem",
      borderRadius: "0.5rem",
    }}
  >
    {/* <Image
      src={logo}
      alt="Tabaarak Logo"
      width={100}
      height={100}
      style={{ width: "100px", height: "auto", marginBottom: "2rem" }}
    /> */}
    <h1>{name}!</h1>
    <p style={{ color: "white", fontSize: "15" }}>
      <span
        style={{
          backgroundColor: "white",
          color: "#0b63e5",
          padding: ".3rem .6rem",
          borderRadius: ".5rem",
        }}
      >
        {email}
      </span>
    </p>
    <p style={{ fontSize: "15" }}>
      <span
        style={{
          backgroundColor: "white",
          color: "#0b63e5",
          padding: ".3rem .6rem",
          borderRadius: ".5rem",
        }}
      >
        {subject}
      </span>
    </p>
    <p style={{ fontSize: "15" }}>
      <span
        style={{
          backgroundColor: "white",
          color: "#0b63e5",
          padding: ".3rem .6rem",
          borderRadius: ".5rem",
        }}
      >
        {company}
      </span>
    </p>
    <p style={{ lineHeight: "24px", fontSize: "16px", fontWeight: "300" }}>
      {message}
    </p>
  </div>
);
