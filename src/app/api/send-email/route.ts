import { cookies } from "next/headers";
import ContactEmail from "@/components/contact-email";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "Bunch Studios <hello@bunchstudios.in>",
      to: "support@bunchstudios.in",
      subject: `New message from ${name}`,
      replyTo: email,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      return Response.json(
        {
          success: false,
          message: error.message || "Something went wrong while sending email",
        },
        { status: 500 }
      );
    }

    // Set the cookie using Next.js cookies() API
    const cookieStore = await cookies();
    cookieStore.set({
      name: "formSubmitted",
      value: "true",
      path: "/",
      maxAge: 300, // 5 minutes
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return Response.json(
      {
        success: true,
        message: "Email sent successfully!",
      },
      { status: 200 }
    );
  } catch (err: any) {
    return Response.json(
      {
        success: false,
        message: err.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
