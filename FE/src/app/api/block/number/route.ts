import { fetcher, RequestBody } from "../../../../api/main"

import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetcher({
    jsonrpc: "2.0",
    method: "eth_getBlockByNumber",
    params: [
      "0x104990",
      true
    ],
    id: 1
  });

  const data = await res.json();

  return NextResponse.json({data})
}
