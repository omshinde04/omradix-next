export async function POST(req) {
    const data = await req.json();

    console.log("New Lead:", data);

    // TODO: Save to DB or send email

    return Response.json({ success: true });
}