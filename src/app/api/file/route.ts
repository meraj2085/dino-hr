import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  // console.log(req.body);

  return NextResponse.json({ name: "File uploaded" });
}
