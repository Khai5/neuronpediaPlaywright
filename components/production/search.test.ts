import { expect, test } from '@playwright/test';

test('search models', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.locator('[data-state="closed"][data-sentry-source-file="model-selector.tsx"]').click();
  const modelNames = [
    'DEEPSEEK-R1-LLAMA-8B',
    'GEMMA-2-27B',
    'GEMMA-2-2B',
    'GEMMA-2-2B-IT',
    'GEMMA-2-9B-IT',
    'GEMMA-3-1B',
    'GEMMA-3-270M',
    'GEMMA-3-4B',
    'GPT-OSS-20B',
    'GPT2-SMALL',
    'LLAMA3.1-8B', //base
    'LLAMA3.1-8B-IT', //instruct
    'LLAMA3.3-70B-IT', //instruct
  ];

  for (const model of modelNames) {
    await expect(page.getByText(model, { exact: true }).first()).toBeVisible();
  }
});

test('deepseek sae', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.locator('[data-state="closed"][data-sentry-source-file="model-selector.tsx"]').click();
  await page.getByText('DEEPSEEK-R1-LLAMA-8B').click();
  await expect(page.getByText('llamascope-slimpj-res-32k')).toBeVisible();
});

test('gemma-2-2b sae', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  // currently default search model
  // await page.locator('[data-state="closed"][data-sentry-source-file="model-selector.tsx"]').click();
  // await page.getByText('GEMMA-2-2B').click();

  await page.locator('[data-state="closed"][data-sentry-source-file="sourceset-selector.tsx"]').click();
  const saeNames = ['gemmascope-att-16k', 'gemmascope-res-16k', 'res-matryoshka-dc'];

  for (const saeset of saeNames) {
    await expect(page.getByText(saeset, { exact: true }).first()).toBeVisible();
  }
});

test('gemma-2-9b sae', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.locator('[data-state="closed"][data-sentry-source-file="model-selector.tsx"]').click();
  await page.getByText('GEMMA-2-9B').first().click();

  await page.locator('[data-state="closed"][data-sentry-source-file="sourceset-selector.tsx"]').click();
  const saeNames = ['gemmascope-res-16k'];

  for (const saeset of saeNames) {
    await expect(page.getByText(saeset, { exact: true }).first()).toBeVisible();
  }
});

test('gemma-2-9b-it sae', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.locator('[data-state="closed"][data-sentry-source-file="model-selector.tsx"]').click();
  await page.getByText('GEMMA-2-9B-IT').first().click();

  await page.locator('[data-state="closed"][data-sentry-source-file="sourceset-selector.tsx"]').click();
  const saeNames = ['gemmascope-res-131k', 'gemmascope-res-16k'];

  for (const saeset of saeNames) {
    await expect(page.getByText(saeset, { exact: true }).first()).toBeVisible();
  }
});

test('gpt2-sm sae', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.locator('[data-state="closed"][data-sentry-source-file="model-selector.tsx"]').click();
  await page.getByText('GPT2-SM').first().click();

  await page.locator('[data-state="closed"][data-sentry-source-file="sourceset-selector.tsx"]').click();
  const saeNames = [
    'att_32k-oai',
    'att-kk',
    'mlp_32k-oai',
    'res_fs12288-jb',
    'res_fs1536-jb',
    'res_fs24576-jb',
    'res_fs3072-jb',
    'res_fs49152-jb',
    'res_fs6144-jb',
    'res_fs768-jb',
    'res_fs98304-jb',
    'res_mid_32k-oai',
    'res_post_32k-oai',
    'res_sce-ajt',
    'res_scefr-ajt',
    'res_scl-ajt',
    'res_sle-ajt',
    'res_slefr-ajt',
    'res_sll-ajt',
    'res-jb',
  ];

  for (const saeset of saeNames) {
    await expect(page.getByText(saeset, { exact: true }).first()).toBeVisible();
  }
});

test('llama3.1-8b sae', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.locator('[data-state="closed"][data-sentry-source-file="model-selector.tsx"]').click();
  await page.getByText('LLAMA3.1-8B').first().click();

  await page.locator('[data-state="closed"][data-sentry-source-file="sourceset-selector.tsx"]').click();
  const saeNames = ['llamascope-res-32k'];

  for (const saeset of saeNames) {
    await expect(page.getByText(saeset, { exact: true }).first()).toBeVisible();
  }
});

// checks for new url in the case that the default model is changed
test('random button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Random' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('food button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Food' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('news button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'News' }).click()
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('literary button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Literary' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('personal button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Personal' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('Programming button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Programming' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('Techinical button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Technical' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('academic button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Academic' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('business button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Business' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('legal button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Legal' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('educational button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Educational' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});

test('Cultural button', async ({ page }) => {
  await page.goto('https://neuronpedia.org/search');

  await page.getByRole('button', { name: 'Cultural' }).first().click();
  await expect(page).not.toHaveURL('https://www.neuronpedia.org/search');
});
