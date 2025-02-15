import { test, expect } from '@playwright/test';


test('homepage has expected title', async ({ page }) => {
  await page.goto('https://neuronpedia.org');
  await expect(page).toHaveTitle(/Neuronpedia/);
});

test('API navigation link', async ({ page }) => {
  await page.goto('https://neuronpedia.org');
  
  // Find and click the API link
  const apiLink = page.getByRole('link', { name: 'API', exact: true });
  await apiLink.waitFor({ state: 'visible' });
  await apiLink.click();
  
  // Wait for navigation and check exact URL
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL('https://www.neuronpedia.org/api-doc');
});

test('SAE Evals link', async({ page }) => {
  await page.goto('https://neuronpedia.org');

  // Find and click the SAE Evals link
  const saeEvalsLink = page.getByRole('link', { name: 'SAE Evals', exact: true });
  await saeEvalsLink.waitFor({ state: 'visible' });
  await saeEvalsLink.click();

  // Wait for navigation and check exact URL
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/.*neuronpedia\.org\/sae-bench/);
})

test('Steer', async({ page }) => {
  await page.goto('https://neuronpedia.org');

  // Find and click the Steer link
  const steerLink = page.getByRole('link', { name: 'Steer', exact: true });
  await steerLink.waitFor({ state: 'visible' });
  await steerLink.click();

  await expect(page).toHaveURL(/https:\/\/www\.neuronpedia\.org\/.*\/steer/);
})

// Must be logged in to test this
// test('My lists', async({ page }) => {
//   await page.goto('https://neuronpedia.org');

//   // Find and click the My lists link
//   const myListsLink = page.getByRole('link', { name: 'My lists', exact: true });
//   await myListsLink.waitFor({ state: 'visible' });
//   await myListsLink.click();

//   await expect(page).toHaveURL(/.*neuronpedia\.org\/user\/.*\/lists/);
// })

// Must be logged in to test this
// /* test('My vectors', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*neuronpedia\.org\/user\/.*\/vectors/);
// }) */

test('Getting Started', async({ page }) => {
  await page.goto('https://neuronpedia.org');

  // Find and click the Getting Started link
  const gettingStartedLink = page.getByRole('link', { name: 'Getting Started', exact: true });
  await gettingStartedLink.waitFor({ state: 'visible' });
  await gettingStartedLink.click();

  await expect(page).toHaveURL('https://docs.neuronpedia.org/');
})

// test('MIT Technology Review image link', async ({ page }) => {
//   await page.goto('https://neuronpedia.org');
  
//   // Find the link by the image's alt text
//   const imageLink = page.getByRole('img', { 
//     alt: 'MIT Technology Review' 
//   });
  
//   // Wait for it to be visible
//   await imageLink.waitFor({ state: 'visible' });
  
//   // Click the link
//   await imageLink.click();
  
//   // Check the navigation
//   await page.waitForLoadState('networkidle');
//   await expect(page).toHaveURL(/.*technologyreview\.com/);
// });

// test('Google Deepmind', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*gemma-scope/);
// })

// test('Fudan University', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*llama-scope/);
// })

// test('Apollo Research', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*gpt2sm-appollojt/);
// })

// test('ML Alignment & Theory Scholars', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*neuronpedia\.org\/#mats/);
// })

// test('EleutherAI', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*llama3\.1-8b-eleuther_gp/);
// })

// test('Docs: Features', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*docs\.neuronpedia\.org\/features/);
// })

// test('Demo', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*johnnylin\/status\/1773403397489881423/);
// })

// test('Upload SAEs', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.forms\.gle\/Yg51TYFutJysiyDP7/);
// })

// /*test('searcher is embedded in the page', async ({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHave('placeholder', 'Enter any text or sentence to search');
// })
// */
  
// /*test('searcher example', async ({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHave('placeholder', 'Test activation with custom text\./');
// })
//   */
  
// test('Docs: Lists', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*docs\.neuronpedia\.org\/lists/);
// })

// test('Docs: Embed', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*docs\.neuronpedia\.org\/embed-iframe/);
// })

// test('Slack', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*slack\.com*/);
// })

// test('Donate', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*every\.org*/);
// })

// test('Feedback', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/mailto:johnny@neuronpedia\.org*/);
// })

// test('Upskill', async({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*arena\.education/);
// })

// test('all services are online', async ({ page }) => {
//   await page.goto('https://neuronpedia.org');
//   await expect(page).toHaveURL(/.*status\.neuronpedia\.org/);
// })