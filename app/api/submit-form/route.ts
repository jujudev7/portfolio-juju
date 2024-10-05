// app/api/submit-form/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();

  // Extraire les données du formulaire
  const { name, subject, message, email } = body;

  // Configurer Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail", // ou un autre service d'e-mail
    auth: {
      user: process.env.GMAIL_USER, // Ton adresse e-mail
      pass: process.env.GMAIL_PASS, // Ton mot de passe d'application
    },
  });

  // Définir le contenu de l'e-mail
  const mailOptions = {
    from: process.env.GMAIL_USER, // Adresse de l'expéditeur
    to: process.env.GMAIL_USER, // Adresse de l'expéditeur ou autre adresse
    subject: subject, // Sujet de l'e-mail
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Contenu de l'e-mail
  };

  // Envoyer l'e-mail
  try {
    await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé avec succès !");
    return NextResponse.json({ message: "Formulaire soumis avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'e-mail" },
      { status: 500 }
    );
  }
}
