import { Tailwind } from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WelcomeEmail = ({
  userFirstname,
}: KoalaWelcomeEmailProps) => (
  <Tailwind>
    <div className="bg-white font-sans">
      <div className="w-1/2 mx-auto p-8">
        <img
          src={`${baseUrl}/static/j.png`}
          width="32"
          height="32"
          alt="Koala"
          className="mx-auto"
        />
        <p className="text-lg mt-4">Hi {userFirstname},</p>
        <p className="text-lg mt-4">
          Welcome to Koala, the sales intelligence platform that helps you
          uncover qualified leads and close deals faster.
        </p>
        <div className="w-full text-center mt-8">
          <a
            href="https://getkoala.com"
            className="getstarted w-full bg-violet-600 text-white hover:text-black no-underline px-4 py-2 rounded inline-block text-lg"
          >
            Get started
          </a>
        </div>
        <p className="text-lg mt-8">
          Best,
          <br />
          The Koala team
        </p>
        <hr className="border-gray-300 my-8" />
        <p className="text-sm text-gray-600">
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </p>
      </div>
    </div>
  </Tailwind>
);

WelcomeEmail.PreviewProps = {
  userFirstname: "Alan",
} as KoalaWelcomeEmailProps;

export default WelcomeEmail;
