import { expect, test } from '@playwright/test';

test ('page loads', async ({ page }) => {
    await page.goto('https://neuronpedia.org/embed/sae-explorable');

    await expect(page.getByText('Steering Controls')).toBeVisible();
});

test('max strength', async ({ page }) => {
    await page.goto('https://neuronpedia.org/embed/sae-explorable');
    await page.waitForLoadState('networkidle');

    const initialCount = await page.evaluate(() => {
        return document.querySelectorAll('div.flex.w-full.justify-end').length;
    });

    await page.click('text=🤯');
    await page.getByRole('button', { name: 'Tell me about yourself.' }).first().click();
    
    const finalCount = await page.evaluate(() => {
        return document.querySelectorAll('div.flex.w-full.justify-end').length;
    });

    expect(finalCount).toBe(initialCount + 2);
  });