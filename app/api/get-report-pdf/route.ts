import { CxReportsClient } from "@cx-reports/api-client";
import { NextRequest, NextResponse } from "next/server";

let client = new CxReportsClient({
  baseUrl: process.env.BASE_URL!,
  authToken: process.env.AUTH_TOKEN!,
  defaultWorkspaceId: process.env.DEFAULT_WORKSPACE_ID,
});

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const data = searchParams.get("data");
  const reportId = parseInt(searchParams.get("reportId")!);

  let { tempDataId } = await client.pushTemporaryData({
    content: JSON.parse(data!),
  });

  let response = await client.downloadPDF({
    tempDataId,
    reportId,
  });

  return new Response(await response.blob(), {
    headers: { "content-type": "application/pdf" },
    status: 200,
  });
}
