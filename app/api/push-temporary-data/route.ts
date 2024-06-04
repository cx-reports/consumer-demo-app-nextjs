import { CxReportsClient } from "@cx-reports/api-client";
import { NextRequest, NextResponse } from "next/server";

let client = new CxReportsClient({
  baseUrl: process.env.BASE_URL!,
  authToken: process.env.AUTH_TOKEN!,
  defaultWorkspaceId: process.env.DEFAULT_WORKSPACE_ID,
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    let { workspaceId, content, expires } = await req.json();
    let response = await client.pushTemporaryData({
      workspaceId,
      content,
      expires,
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
  }
}
