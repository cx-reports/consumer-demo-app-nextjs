import { CxReportsClient } from "@cx-reports/api-client";
import { NextRequest, NextResponse } from "next/server";

let client = new CxReportsClient({
  baseUrl: process.env.BASE_URL!,
  authToken: process.env.AUTH_TOKEN!,
  defaultWorkspaceId: process.env.DEFAULT_WORKSPACE_ID,
});

export const revalidate = 0;

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    let { nonce } = await client.createNonceAuthToken();

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const tmpDataId = searchParams.get("tempDataId");
    const reportId = searchParams.get("reportId");

    let previewUrl = client.getReportPreviewURL({
      reportId: reportId ? parseInt(reportId) : undefined,
      nonce,
      tmpDataId: tmpDataId !== null ? parseInt(tmpDataId) : undefined,
    });

    return NextResponse.json({ previewUrl });
  } catch (error) {
    console.error(error);
  }
}
