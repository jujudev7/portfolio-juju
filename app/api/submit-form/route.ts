// app/api/submit-form/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Middleware CORS
export function applyCORS(req: Request) {
  const allowedOrigins = ["https://julienpenna.com"]; // Remplacez par votre domaine
  const origin = req.headers.get("origin");

  if (allowedOrigins.includes(origin as string)) {
    const response = NextResponse.next();
    response.headers.append("Access-Control-Allow-Origin", origin);
    response.headers.append("Access-Control-Allow-Methods", "POST");
    response.headers.append("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }

  return NextResponse.next();
}

export async function POST(request: Request) {
  // Appliquer le middleware CORS
  const corsResponse = applyCORS(request);
  if (corsResponse) {
    return corsResponse; // Retourne la réponse modifiée si CORS est appliqué
  }

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
