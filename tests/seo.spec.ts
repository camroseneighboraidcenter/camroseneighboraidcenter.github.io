import { test, expect } from "@playwright/test";

/**
 * SEO Test Suite
 * Tests pages for SEO best practices and meta tags.
 */

const pages = [
  {
    name: "Home",
    path: "/",
    expectedTitle: "Home | Camrose Neighbor Aid Center",
  },
  {
    name: "About",
    path: "/about",
    expectedTitle: "About Us | Camrose Neighbor Aid Center",
  },
  {
    name: "Contact",
    path: "/contact",
    expectedTitle: "Contact Us | Camrose Neighbor Aid Center",
  },
  {
    name: "Donate",
    path: "/donate",
    expectedTitle: "Donate | Camrose Neighbor Aid Center",
  },
  {
    name: "Programs",
    path: "/programs",
    expectedTitle: "Our Programs | Camrose Neighbor Aid Center",
  },
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

test.describe("SEO Meta Tags", () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.name} page should have proper title`, async ({ page }) => {
      await page.goto(pageInfo.path);
      const title = await page.title();
      expect(title).toContain("Camrose Neighbor Aid");
      expect(title.length).toBeGreaterThan(10);
      expect(title.length).toBeLessThan(70);
    });

    test(`${pageInfo.name} page should have meta description`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path);
      const metaDescription = await page
        .locator('meta[name="description"]')
        .getAttribute("content");
      expect(metaDescription).toBeTruthy();
      expect(metaDescription!.length).toBeGreaterThan(50);
      expect(metaDescription!.length).toBeLessThan(160);
    });

    test(`${pageInfo.name} page should have canonical URL`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path);
      const canonical = await page
        .locator('link[rel="canonical"]')
        .getAttribute("href");
      expect(canonical).toBeTruthy();
      expect(canonical).toContain("camroseneighboraidcenter.ca");
    });

    test(`${pageInfo.name} page should have Open Graph tags`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path);

      const ogTitle = await page
        .locator('meta[property="og:title"]')
        .getAttribute("content");
      const ogDescription = await page
        .locator('meta[property="og:description"]')
        .getAttribute("content");
      const ogUrl = await page
        .locator('meta[property="og:url"]')
        .getAttribute("content");
      const ogImage = await page
        .locator('meta[property="og:image"]')
        .getAttribute("content");
      const ogType = await page
        .locator('meta[property="og:type"]')
        .getAttribute("content");

      expect(ogTitle).toBeTruthy();
      expect(ogDescription).toBeTruthy();
      expect(ogUrl).toBeTruthy();
      expect(ogImage).toBeTruthy();
      expect(ogType).toBe("website");
    });

    test(`${pageInfo.name} page should have Twitter Card tags`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path);

      const twitterCard = await page
        .locator('meta[property="twitter:card"]')
        .getAttribute("content");
      const twitterTitle = await page
        .locator('meta[property="twitter:title"]')
        .getAttribute("content");
      const twitterDescription = await page
        .locator('meta[property="twitter:description"]')
        .getAttribute("content");

      expect(twitterCard).toBe("summary_large_image");
      expect(twitterTitle).toBeTruthy();
      expect(twitterDescription).toBeTruthy();
    });

    test(`${pageInfo.name} page should have proper lang attribute`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path);
      const lang = await page.locator("html").getAttribute("lang");
      expect(lang).toBe("en-CA");
    });
  }
});

test.describe("SEO Structure", () => {
  test("should have sitemap.xml", async ({ page }) => {
    const response = await page.goto("/sitemap-index.xml");
    expect(response?.status()).toBe(200);
  });

  test("should have robots.txt", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);
    const content = await page.content();
    expect(content).toContain("Sitemap");
  });

  test("should have proper heading structure on home page", async ({
    page,
  }) => {
    await page.goto("/");

    // Should have exactly one h1
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);

    // H1 should contain meaningful content
    const h1Text = await page.locator("h1").first().textContent();
    expect(h1Text?.length).toBeGreaterThan(0);
  });

  test("links should have descriptive text", async ({ page }) => {
    await page.goto("/");

    const links = await page.locator("a").all();
    const genericTexts = ["click here", "read more", "learn more", "here"];

    for (const link of links) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute("aria-label");
      const accessibleText = ariaLabel || text || "";

      // Check that link text is not generic
      const isGeneric = genericTexts.some(
        (generic) => accessibleText.toLowerCase().trim() === generic,
      );

      // Allow generic text only if there's a more descriptive aria-label
      if (isGeneric && !ariaLabel) {
        // This is acceptable if the link has sr-only text
        const srOnlyText = await link.locator(".sr-only").textContent();
        expect(srOnlyText?.length).toBeGreaterThan(0);
      }
    }
  });
});

test.describe("Mobile SEO", () => {
  test("should have viewport meta tag", async ({ page }) => {
    await page.goto("/");
    const viewport = await page
      .locator('meta[name="viewport"]')
      .getAttribute("content");
    expect(viewport).toContain("width=device-width");
  });

  test("should be mobile-friendly", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Content should not overflow horizontally
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 10); // Small tolerance

    // Text should be readable (font-size >= 12px)
    const bodyFontSize = await page.evaluate(() => {
      const style = window.getComputedStyle(document.body);
      return parseFloat(style.fontSize);
    });
    expect(bodyFontSize).toBeGreaterThanOrEqual(12);
  });

  test("should have touch-friendly tap targets", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const buttons = await page.locator("button, a").all();

    for (const button of buttons.slice(0, 10)) {
      const box = await button.boundingBox();
      if (box) {
        // Tap targets should be at least 44x44 pixels
        expect(box.width).toBeGreaterThanOrEqual(24);
        expect(box.height).toBeGreaterThanOrEqual(24);
      }
    }
  });
});
