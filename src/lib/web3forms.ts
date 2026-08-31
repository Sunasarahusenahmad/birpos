export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export type Web3FormsPayload = Record<string, string> & {
  subject: string;
};

export async function submitToWeb3Forms(payload: Web3FormsPayload) {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error(
      "Form is not configured yet. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to enable submissions."
    );
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "BirPOS Website",
      ...payload,
    }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data?.message ?? "Something went wrong. Please try again.");
  }
  return data;
}
