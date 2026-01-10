import { expect, test } from '@playwright/test';

test('main page', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope-2#main');

    await page.locator('textarea[name="If you\'re new to interpretability"]').isVisible();
});

test('safety & alignment button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope-2#main');

    await page.getByRole('button', { name: "Explore safety and alignment relevant features in Gemma 3."}).click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope-2#safety');
});

test('Circuit Tracing button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope-2#main');

    await page.getByRole('button', { name: "Using prompts to activate and trace Gemma 3's internal reasoning steps."}).click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope-2#circuit');
});

test('Dashboards + Inference button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope-2#main');

    await page.getByRole('button', { name: "See top activating examples, search, and test with inference."}).click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope-2');
});

test('Tutorial Notebook', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope-2#main');
    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.getByRole('link', { name: 'Tutorial Notebook A Colab notebook for loading and using Gemma Scope 2 artifacts.' }).click()
  ]);

    await expect(newPage).toHaveURL('https://colab.research.google.com/drive/1NhWjg7n0nhfW--CjtsOdw5A5J_-Bzn4r')
  });

test('Hugging Face', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope-2#main');
    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.getByRole('link', { name: 'Hugging Face Download the Gemma Scope 2 SAEs and transcoders.' }).click()
    ]);

    await expect(newPage).toHaveURL('https://huggingface.co/google/gemma-scope-2')
  });

test('DeepMind Blog', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope-2#main');
    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.getByRole('link', { name: 'DeepMind Blog Read the official blog post about Gemma Scope 2.' }).click()
  ]);

    await expect(newPage).toHaveURL('https://deepmind.google/blog/gemma-scope-2-helping-the-ai-safety-community-deepen-understanding-of-complex-language-model-behavior/')
  });

test('Safety Features', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope-2#safety');

    await expect(page.getByText('Not Found')).not.toBeVisible();
  })

test('model selector', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope-2#main'); //original url redirects to main
    await page.getByRole('button', { name: "See top activating examples, search, and test with inference."}).click();
    await page.locator('[data-sentry-source-file="model-selector.tsx"]').first().click();
  
    const modelNames = [ 'GEMMA-3-12B', 'GEMMA-3-12B-IT', 'GEMMA-3-1B', 'GEMMA-3-1B-IT', 'GEMMA-3-270M', 'GEMMA-3-270M-IT', 'GEMMA-3-27B', 'GEMMA-3-27B-IT', 'GEMMA-3-4B', 'GEMMA-3-4B-IT'];
  
    for (const model of modelNames) {
      await expect(page.getByText(model, { exact: true }).first()).toBeVisible();
    }
  });