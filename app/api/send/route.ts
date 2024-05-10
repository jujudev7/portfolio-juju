import { WelcomeEmail } from '../../../emails/Welcome';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const formData = await req.json(); // Utilisez req.json() pour extraire les données JSON du formulaire
    const emailData = await resend.emails.send({
      from: 'CONTACT <contact@julienpenna.com>',
      to: ['penna.julien@gmail.com'],
      subject: 'Contact · julienpenna.com',
      html: `
        <p><b>Nom:</b> ${formData.name}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Sujet:</b> ${formData.subject}</p>
        <p><b>Message:</b> ${formData.message}</p>
      `
    });

    return Response.json(emailData);
  } catch (error) {
    return Response.json({ error });
  }
}


// react: WelcomeEmail({ userFirstname: 'John' }),