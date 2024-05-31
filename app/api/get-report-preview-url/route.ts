import { CxReportsClient } from "@cx-reports/api-client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  let client = new CxReportsClient({
    baseUrl: process.env.BASE_URL!,
    authToken: process.env.AUTH_TOKEN!,
    defaultWorkspaceId: process.env.DEFAULT_WORKSPACE_ID,
  });

  try {
    let { nonce } = await client.createNonceAuthToken();

    let previewUrl = client.getReportPreviewURL({
      reportId: 18620,
      nonce,
    });

    return NextResponse.json({ previewUrl });
  } catch (error) {
    console.error(error);
  }
}
