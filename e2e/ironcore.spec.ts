import { test, expect } from '@playwright/test';

test.describe('IronCore Fitness E2E Automation Suite', () => {
  test('should load ironcore landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=IRONCORE')).toBeVisible();
  });

  test('should navigate to class timetable', async ({ page }) => {
    await page.goto('/schedule');
    await expect(page.locator('text=Weekly Class Timetable')).toBeVisible();
  });
});
