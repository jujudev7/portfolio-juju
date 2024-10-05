// app/api/submit-form/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Extraire les données du formulaire
  const { name, subject, message, email } = body;

  // Effectuer des actions avec les données ici (ex: envoyer un email)
  console.log("Nom :", name);
  console.log("Sujet :", subject);
  console.log("Message :", message);
  console.log("Email :", email);

  // Réponse à renvoyer au client
  return NextResponse.json({ message: "Formulaire soumis avec succès" });
}
