// app/api/submit-form/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "http://localhost:3000",
//   "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type",
// };

// export async function OPTIONS() {
//   // Répondre aux requêtes OPTIONS
//   return NextResponse.json({}, { status: 200, headers: corsHeaders });
// }

export async function POST(request: Request) {
  const body = await request.json();

  // Extraire les données du formulaire
  const { name, subject, message, email } = body;

  // Configurer Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé avec succès !");
    return NextResponse.json(
      { message: "Formulaire soumis avec succès" }
      // { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'e-mail" }
      // { status: 500, headers: corsHeaders }
    );
  }
}
