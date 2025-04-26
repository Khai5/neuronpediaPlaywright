import { expect, test } from '@playwright/test';

test ('page loads', async ({ page }) => {
    await page.goto('https://neuronpedia.org/embed/sae-explorable');

    await expect(page.getByText('Steering Controls')).toBeVisible();
});

test('max strength', async ({ page }) => {
    await page.goto('https://neuronpedia.org/embed/sae-explorable');
    
    await page.click('text=🤯');
    await page.getByRole('button', { name: 'Tell me about yourself.' }).first().click();
    await page.waitForTimeout(5000);
    await expect(page.getByText("Sorry, your message could not be sent at this time. Please try again later.")).not.toBeVisible({ timeout: 30000 });
  });