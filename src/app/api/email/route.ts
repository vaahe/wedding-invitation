import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

import { SMTP_PASS, SMTP_USER } from "../../config";

export async function POST(req: NextRequest) {
    try {
        const { fullname, guestsCount, isAttending } = await req.json();
        console.log({ fullname, guestsCount, isAttending });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: SMTP_USER,
            to: SMTP_USER,
            subject: fullname,
            text: `Guests: ${guestsCount}, Attending: ${isAttending ? 'Yes' : 'No'}`
        });

        return NextResponse.json({ message: "Ձեր պատասխանը ուղարկվել է" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { message: "Ձեր պատասխանը չհաջողվեց ուղարկել, փորձեք կրկին" },
            { status: 500 }
        );
    }
}
