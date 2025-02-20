import { test, expect } from '@playwright/test';

test('Introduction page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org');
    await expect(page).toHaveTitle(/Introduction | Neuronpedia Docs/);
});

test('Sparse Autoencoder page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/sparse-autoencoder');
    await expect(page).toHaveTitle(/Sparse Autoencoder | Neuronpedia Docs/);
});

test('SAE Features page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/features');
    await expect(page).toHaveTitle(/SAE Features | Neuronpedia Docs/);
});

test('Steering Using SAE Features page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/steering');
    await expect(page).toHaveTitle(/Steering Using SAE Features | Neuronpedia Docs/);
});

test('Embed Features (iframe) page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/embed-iframe');
    await expect(page).toHaveTitle(/Embed Features (iframe) | Neuronpedia Docs/);
});

test('Search page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/search');
    await expect(page).toHaveTitle(/Search | Neuronpedia Docs/);
});

test('Lists & Embed Lists page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/lists');
    await expect(page).toHaveTitle(/Lists & Embed Lists | Neuronpedia Docs/);
});

test('API and Exports page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/api');
    await expect(page).toHaveTitle(/API and Exports | Neuronpedia Docs/);
});

test('Upload Your SAEs page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/upload-saes');
    await expect(page).toHaveTitle(/Upload Your SAEs | Neuronpedia Docs/);
});

test('Feedback & Support page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/feedback');
    await expect(page).toHaveTitle(/Feedback & Support | Neuronpedia Docs/);
});



