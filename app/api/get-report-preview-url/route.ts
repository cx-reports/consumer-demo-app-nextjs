import { CxReportsClient } from "@cx-reports/api-client";
import { NextRequest, NextResponse } from "next/server";

let client = new CxReportsClient({
  baseUrl: process.env.BASE_URL!,
  authToken: process.env.AUTH_TOKEN!,
  defaultWorkspaceId: process.env.DEFAULT_WORKSPACE_ID,
});

export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    let { nonce } = await client.createNonceAuthToken();

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const tempData = searchParams.get("tempData");
    const data = searchParams.get("data");
    const reportId = parseInt(searchParams.get("reportId")!);
    const paramsString = searchParams.get("params");

    let params;
    if (paramsString) {
      params = JSON.parse(paramsString!);
    }

    let tempDataId;
    if (tempData) {
      let pushTempData = await client.pushTemporaryData({
        content: JSON.parse(tempData!),
      });

      tempDataId = pushTempData.tempDataId;
    }

    let previewUrl = client.getReportPreviewURL({
      reportId,
      nonce,
      tempDataId,
      params,
      data: data ? JSON.parse(data) : undefined,
    });

    return NextResponse.json({ previewUrl });
  } catch (error) {
    console.error(error);
  }
}
