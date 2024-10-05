// app/api/submit-form/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Headers CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Autorise toutes les origines (tu peux spécifier 'http://localhost:3000' pour plus de sécurité)
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Autorise les méthodes GET, POST, OPTIONS
  "Access-Control-Allow-Headers": "Content-Type", // Autorise le header Content-Type
};

// Fonction pour gérer les requêtes OPTIONS (préflight)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

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
    console.log("Envoi du mail en cours...");
    await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé avec succès !");

    // Applique les headers CORS à la réponse POST
    return NextResponse.json(
      { message: "Formulaire soumis avec succès" },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);

    // Applique aussi les headers CORS en cas d'erreur
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'e-mail" },
      { status: 500, headers: corsHeaders }
    );
  }
}
