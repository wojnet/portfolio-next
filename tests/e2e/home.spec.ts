import { test, expect } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Wojciech Glid - Portfolio");
});

test("logo is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Wojciech Glid/i })).toBeVisible();
});

test("navigation loads correctly", async ({ page }) => {
  const header = page.getByRole("banner");
  const navigation = header.getByRole("list");

  await page.goto("/");
  await expect(navigation.getByRole("link", { name: /home/i })).toBeVisible();
  await expect(navigation.getByRole("link", { name: /blog/i })).toBeVisible();
  await expect(navigation.getByRole("link", { name: /contact/i })).toBeVisible();
});