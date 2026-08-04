import { test, expect } from '@playwright/test';

test.describe('IronCore Fitness E2E Test Suite', () => {
  test('should display homepage and claim day pass', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=IRONCORE')).toBeVisible();
    await page.fill('input[placeholder="Athlete Full Name"]', 'Jaxson Titan');
    await page.fill('input[placeholder="Email Address"]', 'jaxson@iron.com');
    await page.click('button:has-text("Claim Athletic Day Pass")');
    await expect(page.locator('text=Day Pass Claimed & Saved in DB')).toBeVisible();
  });
});
