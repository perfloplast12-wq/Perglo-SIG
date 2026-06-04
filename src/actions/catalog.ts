"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { requireInventoryManager } from "@/services/auth";
import { syncCatalogProducts } from "@/services/catalog";

export async function syncCatalogProductsAction() {
  let synced = 0;

  try {
    await requireInventoryManager();
    const result = await syncCatalogProducts();
    synced = result.synced;
    revalidatePath("/inventario");
    revalidatePath("/produccion");
    revalidateTag("catalog", "default");
    revalidateTag("inventory", "default");
    revalidateTag("production", "default");
    revalidateTag("dashboard", "default");
  } catch (error) {
    redirect(`/inventario?error=${encodeURIComponent(error instanceof Error ? error.message : "No se pudo sincronizar el catalogo.")}`);
  }

  redirect(`/inventario?synced=${synced}`);
}
