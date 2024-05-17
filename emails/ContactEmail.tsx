import { Tailwind } from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ContactEmail = ({
  userFirstname,
}: KoalaWelcomeEmailProps) => (
  <Tailwind>
    <div className="bg-white font-sans">
      <div className="w-1/2 mx-auto p-8">
        <img
          src={`${baseUrl}/static/j.png`}
          width="32"
          height="32"
          alt="J"
          className="mx-auto"
        />
        <p className="text-lg mt-4">Hi {userFirstname},</p>
      </div>
    </div>
  </Tailwind>
);

ContactEmail.PreviewProps = {
  userFirstname: "Alan",
} as KoalaWelcomeEmailProps;

export default ContactEmail;
