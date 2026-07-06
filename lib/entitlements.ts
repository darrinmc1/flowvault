import { supabaseAdmin } from "./supabase"

export interface Entitlement {
  id: string
  user_id: string
  product_id: string
  granted_at: string
  expires_at: string | null
}

export async function getUserEntitlements(
  userId: string
): Promise<Entitlement[]> {
  if (!supabaseAdmin) return []
  const { data, error } = await supabaseAdmin
    .from("entitlements")
    .select("*")
    .eq("user_id", userId)
  if (error) {
    console.error("[entitlements] fetch failed", error)
    return []
  }
  return data ?? []
}

export async function grantEntitlement(
  userId: string,
  productId: string
): Promise<boolean> {
  if (!supabaseAdmin) return false
  const { error } = await supabaseAdmin.from("entitlements").upsert(
    {
      user_id: userId,
      product_id: productId,
      granted_at: new Date().toISOString(),
    },
    { onConflict: "user_id,product_id" }
  )
  if (error) {
    console.error("[entitlements] grant failed", error)
    return false
  }
  return true
}

export async function getSignedDownloadUrl(
  bucket: string,
  path: string,
  expiresIn = 3600
): Promise<string | null> {
  if (!supabaseAdmin) return null
  const { data, error } = await supabaseAdmin.storage
    .from(bucket)
    .createSignedUrl(path, expiresIn)
  if (error) {
    console.error("[storage] signed URL failed", error)
    return null
  }
  return data.signedUrl
}
