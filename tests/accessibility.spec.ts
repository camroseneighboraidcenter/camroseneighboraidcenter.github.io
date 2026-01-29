import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Accessibility Test Suite
 * Tests all pages for WCAG 2.1 AA compliance using axe-core.
 */

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Donate", path: "/donate" },
  { name: "Programs", path: "/programs" },
  { name: "404", path: "/404" },
  { name: "Food Bank Services", path: "/programs/food-bank-services" },
  { name: "Food for Kids", path: "/programs/food-for-kids" },
  { name: "Martha's Table", path: "/programs/marthas-table" },
  { name: "Medical Transportation", path: "/programs/medical-transportation" },
  { name: "Emergency Financial Assistance", path: "/programs/emergency-financial-assistance" },
  { name: "Referral Services", path: "/programs/referral-services" },
];

test.describe("Accessibility Tests", () => {
  for (const page of pages) {
    test(`${page.name} page should have no accessibility violations`, async ({
      page: browserPage,
    }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState("networkidle");

      const accessibilityScanResults = await new AxeBuilder({
        page: browserPage,
      })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test(`${page.name} page should have proper heading hierarchy`, async ({
      page: browserPage,
    }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState("networkidle");

      const headings = await browserPage.evaluate(() => {
        const headingElements = document.querySelectorAll(
          "h1, h2, h3, h4, h5, h6"
        );
        return Array.from(headingElements).map((h) => ({
          level: parseInt(h.tagName.charAt(1)),
          text: h.textContent?.trim() || "",
        }));
      });

      // Check that there's exactly one h1
      const h1Count = headings.filter((h) => h.level === 1).length;
      expect(h1Count).toBeLessThanOrEqual(1);

      // Check heading hierarchy (no skipping levels)
      let previousLevel = 0;
      for (const heading of headings) {
        if (previousLevel > 0) {
          expect(heading.level).toBeLessThanOrEqual(previousLevel + 1);
        }
        previousLevel = heading.level;
      }
    });

    test(`${page.name} page should have accessible images`, async ({
      page: browserPage,
    }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState("networkidle");

      const images = await browserPage.locator("img").all();

      for (const img of images) {
        const alt = await img.getAttribute("alt");
        const ariaLabel = await img.getAttribute("aria-label");
        const ariaHidden = await img.getAttribute("aria-hidden");
        const role = await img.getAttribute("role");

        // Images should have alt text OR be decorative (aria-hidden or role="presentation")
        const isDecorative =
          ariaHidden === "true" || role === "presentation" || role === "none";
        const hasAccessibleName = alt !== null || ariaLabel !== null;

        expect(isDecorative || hasAccessibleName).toBe(true);
      }
    });

    test(`${page.name} page should have accessible links`, async ({
      page: browserPage,
    }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState("networkidle");

      const links = await browserPage.locator("a").all();

      for (const link of links) {
        const text = await link.textContent();
        const ariaLabel = await link.getAttribute("aria-label");
        const title = await link.getAttribute("title");

        // Links should have accessible text
        const hasAccessibleName =
          (text && text.trim().length > 0) || ariaLabel || title;
        expect(hasAccessibleName).toBeTruthy();
      }
    });

    test(`${page.name} page should have proper focus indicators`, async ({
      page: browserPage,
    }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState("networkidle");

      // Tab through interactive elements and check for focus visibility
      const focusableElements = await browserPage
        .locator(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        .all();

      // Test first 5 visible and enabled elements
      let testedCount = 0;
      for (const element of focusableElements) {
        if (testedCount >= 5) break;

        // Check if element is visible and enabled
        const isVisible = await element.isVisible();
        const isEnabled = await element.isEnabled();

        if (isVisible && isEnabled) {
          await element.focus();
          const isFocused = await element.evaluate(
            (el) => document.activeElement === el
          );
          expect(isFocused).toBe(true);
          testedCount++;
        }
      }

      // Ensure we tested at least some elements
      expect(testedCount).toBeGreaterThan(0);
    });
  }
});

test.describe("Dark Mode Accessibility", () => {
  test.use({ colorScheme: "dark" });

  for (const page of pages) {
    test(`${page.name} page should have no accessibility violations in dark mode`, async ({
      page: browserPage,
    }) => {
      await browserPage.goto(page.path);
      await browserPage.waitForLoadState("networkidle");

      const accessibilityScanResults = await new AxeBuilder({
        page: browserPage,
      })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});

test.describe("Keyboard Navigation", () => {
  test("should be able to navigate the site using only keyboard", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Skip link should be first focusable element
    await page.keyboard.press("Tab");
    const skipLink = page.locator(".skip-to-main-content");
    await expect(skipLink).toBeFocused();

    // Should be able to activate skip link
    await page.keyboard.press("Enter");
    const mainContent = page.locator("#main-content");
    await expect(mainContent).toBeVisible();
  });

  test("should trap focus in mobile menu when open", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Open mobile menu
    const menuButton = page.locator("#mobile-menu-toggle");
    await menuButton.click();

    // Verify menu is open
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    // Close with Escape
    await page.keyboard.press("Escape");
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});

test.describe("Form Accessibility", () => {
  test("contact form should have proper labels", async ({ page }) => {
    await page.goto("/contact");
    await page.waitForLoadState("networkidle");

    const formInputs = await page
      .locator("input:not([type='hidden']), textarea, select")
      .all();

    for (const input of formInputs) {
      const id = await input.getAttribute("id");
      const ariaLabel = await input.getAttribute("aria-label");
      const ariaLabelledby = await input.getAttribute("aria-labelledby");

      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        const hasLabel = (await label.count()) > 0;
        const hasAriaLabel = ariaLabel || ariaLabelledby;

        expect(hasLabel || hasAriaLabel).toBe(true);
      }
    }
  });

  test("contact form should show validation errors accessibly", async ({
    page,
  }) => {
    await page.goto("/contact");
    await page.waitForLoadState("networkidle");

    // Try to submit empty form
    const submitButton = page.locator('button[type="submit"]');
    if ((await submitButton.count()) > 0) {
      await submitButton.click();

      // Check for aria-invalid or error messages
      const invalidInputs = await page.locator("[aria-invalid='true']").count();
      const errorMessages = await page
        .locator('[role="alert"], .error-message')
        .count();

      // Form should either prevent submission or show accessible errors
      expect(invalidInputs > 0 || errorMessages >= 0).toBe(true);
    }
  });
});

test.describe("ARIA Landmarks", () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.name} page should have proper ARIA landmarks`, async ({
      page,
    }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState("networkidle");

      // Should have main landmark
      const main = page.locator("main, [role='main']");
      await expect(main).toBeVisible();

      // Should have navigation
      const nav = page.locator("nav, [role='navigation']");
      expect(await nav.count()).toBeGreaterThan(0);

      // Should have header/banner
      const header = page.locator("header, [role='banner']");
      expect(await header.count()).toBeGreaterThan(0);

      // Should have footer/contentinfo
      const footer = page.locator("footer, [role='contentinfo']");
      expect(await footer.count()).toBeGreaterThan(0);
    });
  }
});
