import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Spécifier explicitement que nous n'utilisons PAS le runtime edge
export const runtime = "nodejs";

// Headers CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Remplacez par votre domaine en production
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Gestionnaire OPTIONS pour CORS
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

// Gestionnaire POST
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Vérification des champs requis
    if (!name || !email || !subject || !message) {
      return new NextResponse(
        JSON.stringify({ error: "Tous les champs sont requis" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nouveau message de ${name}: ${subject}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Sujet: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: "Email envoyé avec succès" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);

    return new NextResponse(
      JSON.stringify({
        error: "Erreur lors de l'envoi de l'email",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
}
