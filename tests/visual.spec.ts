import { test, expect } from "@playwright/test";

/**
 * Visual Regression Test Suite
 * Tests for visual consistency across pages and themes.
 */

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Donate", path: "/donate" },
  { name: "Programs", path: "/programs" },
  { name: "Food Bank Services", path: "/programs/food-bank-services" },
  { name: "Food for Kids", path: "/programs/food-for-kids" },
  { name: "Martha's Table", path: "/programs/marthas-table" },
  { name: "Medical Transportation", path: "/programs/medical-transportation" },
  { name: "Emergency Financial Assistance", path: "/programs/emergency-financial-assistance" },
  { name: "Referral Services", path: "/programs/referral-services" },
];

test.describe("Visual Regression - Light Mode", () => {
  test.use({ colorScheme: "light" });

  for (const pageInfo of pages) {
    test(`${pageInfo.name} page visual snapshot`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState("networkidle");

      // Wait for fonts to load
      await page.evaluate(() => document.fonts.ready);

      await expect(page).toHaveScreenshot(`${pageInfo.name.toLowerCase()}-light.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
});

test.describe("Visual Regression - Dark Mode", () => {
  test.use({ colorScheme: "dark" });

  for (const pageInfo of pages) {
    test(`${pageInfo.name} page visual snapshot (dark)`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState("networkidle");

      // Wait for fonts to load
      await page.evaluate(() => document.fonts.ready);

      await expect(page).toHaveScreenshot(`${pageInfo.name.toLowerCase()}-dark.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
});

test.describe("Visual Regression - Mobile", () => {
  test.use({
    viewport: { width: 375, height: 667 },
  });

  for (const pageInfo of pages) {
    test(`${pageInfo.name} page mobile snapshot`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState("networkidle");

      await expect(page).toHaveScreenshot(`${pageInfo.name.toLowerCase()}-mobile.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
});

test.describe("Component Visual Tests", () => {
  test("Header component", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const header = page.locator("header");
    await expect(header).toHaveScreenshot("header.png");
  });

  test("Footer component", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const footer = page.locator("footer");
    await expect(footer).toHaveScreenshot("footer.png");
  });

  test("Mobile menu open state", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Open mobile menu
    await page.click("#mobile-menu-toggle");
    await page.waitForTimeout(300); // Wait for animation

    await expect(page).toHaveScreenshot("mobile-menu-open.png");
  });
});
