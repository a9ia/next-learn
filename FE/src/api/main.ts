// export const request_url = "https://" + process.env.network + ".infura.io/v3/" + process.env.PROJECTID
export const request_url = "https://goerli.infura.io/v3/" + process.env.PROJECTID

export interface RequestBody {
  jsonrpc: "2.0",
  method: string,
  params: any[],
  id: number
}

export const fetcher = async (body: RequestBody) => fetch(request_url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})
