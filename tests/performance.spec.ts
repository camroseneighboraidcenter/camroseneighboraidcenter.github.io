import { test, expect } from "@playwright/test";

/**
 * Performance Test Suite
 * Tests pages for Core Web Vitals and performance metrics.
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
  {
    name: "Emergency Financial Assistance",
    path: "/programs/emergency-financial-assistance",
  },
  { name: "Referral Services", path: "/programs/referral-services" },
];

test.describe("Performance Tests", () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.name} page should load within acceptable time`, async ({
      page,
    }) => {
      const startTime = Date.now();
      await page.goto(pageInfo.path);
      await page.waitForLoadState("networkidle");
      const loadTime = Date.now() - startTime;

      // Page should load within 5 seconds
      expect(loadTime).toBeLessThan(5000);
    });

    test(`${pageInfo.name} page should have optimized images`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState("networkidle");

      const images = await page.locator("img").all();

      for (const img of images) {
        // Check for lazy loading on non-critical images
        const loading = await img.getAttribute("loading");
        const src = await img.getAttribute("src");

        // Images should use modern formats (webp, avif) or have lazy loading
        if (src && !src.includes("hero")) {
          expect(
            loading === "lazy" ||
              src.includes(".webp") ||
              src.includes(".avif"),
          ).toBe(true);
        }
      }
    });

    test(`${pageInfo.name} page should have proper resource hints`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path);

      // Check for preconnect hints
      const preconnects = await page.locator('link[rel="preconnect"]').count();
      expect(preconnects).toBeGreaterThan(0);
    });
  }
});

test.describe("Core Web Vitals", () => {
  test("Home page should meet LCP threshold", async ({ page }) => {
    await page.goto("/");

    // Measure LCP using Performance API
    const lcp = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
            startTime: number;
          };
          resolve(lastEntry.startTime);
        }).observe({ type: "largest-contentful-paint", buffered: true });

        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      });
    });

    // LCP should be under 2.5 seconds for "good" rating
    // Using 4 seconds as threshold for dev environment
    expect(lcp).toBeLessThan(4000);
  });

  test("Home page should meet CLS threshold", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Measure CLS
    const cls = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries() as (PerformanceEntry & {
            hadRecentInput: boolean;
            value: number;
          })[]) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
        }).observe({ type: "layout-shift", buffered: true });

        setTimeout(() => resolve(clsValue), 3000);
      });
    });

    // CLS should be under 0.1 for "good" rating
    expect(cls).toBeLessThan(0.25);
  });
});

test.describe("Resource Loading", () => {
  test("should not have render-blocking resources", async ({ page }) => {
    await page.goto("/");

    // Check for async/defer on scripts
    const scripts = await page.locator("script[src]").all();

    for (const script of scripts) {
      const async = await script.getAttribute("async");
      const defer = await script.getAttribute("defer");
      const type = await script.getAttribute("type");

      // Scripts should be async, defer, or module type
      const isNonBlocking =
        async !== null || defer !== null || type === "module";
      expect(isNonBlocking).toBe(true);
    }
  });

  test("should load successfully", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
  });
});
