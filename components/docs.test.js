import { test, expect } from '@playwright/test';

test('Introduction page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org');
    await expect(page).toHaveTitle(/Introduction | Neuronpedia Docs/);
});

test('launch tweets', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org');

    const link = page.locator('a:has-text("johnny")').first();
    await expect(link).toHaveAttribute('href', 'https://twitter.com/johnnylin/status/1773403396130885844');
});

test('third embed tweet', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org');

    const link = page.locator('a:has-text("johnnylin")').nth(2);
    await expect(link).toHaveAttribute('href', 'https://twitter.com/johnnylin/status/1773403397489881423');
});

test('lesswrong link', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('LessWrong').click()
    ]);

    await expect(newPage).toHaveURL(/.*lesswrong.com/);
});

test('Sparse Autoencoder page', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/sparse-autoencoder');
    await expect(page).toHaveTitle(/Sparse Autoencoder | Neuronpedia Docs/);
});

test('sae explanation link', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/sparse-autoencoder');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('Here is an explainer on SAEs').click()
    ]);

    await expect(newPage).toHaveURL('https://transformer-circuits.pub/2023/monosemantic-features');
});

test('example gpt2 link', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/sparse-autoencoder');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('https://neuronpedia.org/gpt2-small/9-res-jb').click()
    ]);

    await expect(newPage).toHaveURL('https://www.neuronpedia.org/gpt2-small/9-res-jb');
});

test('example res-jb link', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/sparse-autoencoder');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('RES-JB').nth(2).click()
    ]);

    await expect(newPage).toHaveURL('https://www.neuronpedia.org/gpt2-small/res-jb');
});

test('example p70d link', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/sparse-autoencoder');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('P70D-SM').click()
    ]);

    await expect(newPage).toHaveURL('https://www.neuronpedia.org/p70d-sm');
});

test('example att-sm link', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/sparse-autoencoder');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('ATT-SM').click()
    ]);

    await expect(newPage).toHaveURL('https://www.neuronpedia.org/pythia-70m-deduped/att-sm');
});

test('example mlp-sm link', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/sparse-autoencoder');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('MLP-SM').click()
    ]);

    await expect(newPage).toHaveURL('https://www.neuronpedia.org/pythia-70m-deduped/mlp-sm');
});

test('example res-sm link', async ({ page }) => {
    await page.goto('https://docs.neuronpedia.org/sparse-autoencoder');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('RES-SM').click()
    ]);

    await expect(newPage).toHaveURL('https://www.neuronpedia.org/pythia-70m-deduped/res-sm');
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



