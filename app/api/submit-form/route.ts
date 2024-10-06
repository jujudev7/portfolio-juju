import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Headers CORS avec domaine spécifique
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://julienpenna.com", // Remplacez par votre domaine Hostinger
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Fonction pour gérer les requêtes OPTIONS (préflight)
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

// Fonction pour gérer les requêtes POST
export async function POST(request: NextRequest) {
  // Vérifier si l'origine de la requête est autorisée
  const origin = request.headers.get("origin");
  if (origin !== corsHeaders["Access-Control-Allow-Origin"]) {
    return new NextResponse(JSON.stringify({ message: "Origin not allowed" }), {
      status: 403,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (request.method !== "POST") {
    return new NextResponse(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }

  try {
    const body = await request.json();

    // Validation des données
    const { name, subject, message, email } = body;
    if (!name || !subject || !message || !email) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields" }),
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

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: subject,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: "Formulaire soumis avec succès" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Erreur:", error);
    return new NextResponse(
      JSON.stringify({ message: "Erreur lors du traitement de la requête" }),
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
