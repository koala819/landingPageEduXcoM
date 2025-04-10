import nodemailer from 'nodemailer';
export { renderers } from '../renderers.mjs';

const prerender = false;
function mailContact(firstName, message, email) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Nouveau message concernant EduXcoM</h2>
      <p><strong>Nom:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
      <p style="color: #666; font-size: 12px;">Cet email a été envoyé depuis le formulaire de contact de votre site.</p>
    </div>
  `;
}
const POST = async ({ request }) => {
  try {
    if (!request) {
      return new Response(
        JSON.stringify({
          status: 403,
          statusText: "Don't have form data...!"
        }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const email = "contact@dix31.com";
    const pass = "W3qb9Y4v8q3@";
    const host = "mail.dix31.com";
    const port = "465";
    const formData = await request.formData();
    const firstName = formData.get("name")?.toString() || "";
    const contactEmail = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    if (formData.get("emai")) {
      return new Response(
        JSON.stringify({
          status: 200,
          statusText: "Merci pour votre message, vous aurez une réponse dans les 48 heures."
        })
      );
    }
    if (!email || !pass || !host || !port) ;
    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port),
      secure: true,
      auth: {
        user: email,
        pass
      },
      tls: { rejectUnauthorized: false }
    });
    const mailOptions = {
      from: "contact@dix31.com",
      to: "contact@dix31.com",
      bcc: "x.genolhac@gmail.com",
      subject: `📧 ${firstName} m'a écrit`,
      text: `${message}.
 Adresse mail ${contactEmail} pour répondre.`,
      html: mailContact(firstName, message, contactEmail)
    };
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        status: 200,
        statusText: "Merci pour votre message, vous aurez une réponse dans les 48 heures."
      })
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return new Response(
      JSON.stringify({
        status: 500,
        statusText: "Une erreur s'est produite lors de l'envoi de l'email"
      })
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
