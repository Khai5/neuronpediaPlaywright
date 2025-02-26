import { test, expect } from '@playwright/test'

test('main page', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#main');

    await page.locator('textarea[name="The inner workings"]').isVisible();
});

test('microscope button', async ({ page }) =>{
    await page.goto('https://neuronpedia.org/gemma-scope#main');

    await page.getByText('scan Gemma 2\'s brain to see what it\'s thinking').click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#microscope');
});

test('analyze features button', async ({ page }) =>{
    await page.goto('https://neuronpedia.org/gemma-scope#main');

    await page.getByText('Make features fire and figure out what they do').click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#analyze');
});

test('steer gemma button', async ({ page }) =>{
    await page.goto('https://neuronpedia.org/gemma-scope#main');

    await page.getByText('Change Gemma\'s behavior by manipulating features').click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#steer');
});

test('do more button', async ({ page }) =>{
    await page.goto('https://neuronpedia.org/gemma-scope#main');

    await page.getByText('Dive deeper into the exciting world of AI interpretability').click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#learn');
});

test('browse & search saes button', async ({ page }) =>{
    await page.goto('https://neuronpedia.org/gemma-scope#main');

    await page.getByText('Directly explore the SAEs in Gemma Scope').click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#browse');
});

test('microscope page', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#microscope');

    await page.locator('textarea[name="To understand what AI is thinking"]').isVisible();
});

test('demo button feeling lucky', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#microscope');

    await page.getByText('I\'m Feeling Lucky').click();
    await expect(page.getByText('Click a preset above to send a text to Gemma')).not.toBeVisible({ timeout: 30000});
});

test('demo button food', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#microscope');

    await page.getByText('Food').click();
    await expect(page.getByText('Click a preset above to send a text to Gemma')).not.toBeVisible({ timeout: 30000});
});

test('demo button News', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#microscope');

    await page.getByText('News').click();
    await expect(page.getByText('Click a preset above to send a text to Gemma')).not.toBeVisible({ timeout: 30000});
});

test('demo button Literary', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#microscope');

    await page.getByText('Literary').click();
    await expect(page.getByText('Click a preset above to send a text to Gemma')).not.toBeVisible({ timeout: 30000});
});

test('demo button Personal', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#microscope');

    await page.getByText('Personal').click();
    await expect(page.getByText('Click a preset above to send a text to Gemma')).not.toBeVisible({ timeout: 30000});
});

test('demo button Programming', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#microscope');

    await page.getByText('Programming').click();
    await expect(page.getByText('Click a preset above to send a text to Gemma')).not.toBeVisible({ timeout: 30000});
});

test('challenge gemma', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#microscope');

    //challenge is unlocked after doing the demo, or pressing skip demo
    await page.getByText('skip demo').first().click();

    const gemmaSearch = page.getByPlaceholder('Hint: Try a short sentence instead of a word or phrase.');
    await gemmaSearch.fill('testing inputs');
    await gemmaSearch.press('Enter');
    await expect(page.getByText('Click a preset above to send a text to Gemma')).not.toBeVisible({ timeout: 30000});
});

test('next analyze features button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#microscope');

    //next is unlocked after doing the demo, or pressing skip demo
    await page.getByText('skip demo').nth(1).click();
    await page.getByText(' Next - Analyze Features').click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#analyze');
});

test('analyze features page', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#analyze');

    await page.locator('textarea[name="The features in Gemma Scope have labels"]').isVisible();
});

test('olympic sports button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#analyze');
    await page.getByText('Olympic sports').click();
    await expect(page.getByText('What do these activations (in green) have in common?')).toBeVisible();
});

test('famous cities button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#analyze');
    await page.getByText('famous cities').click();
    await expect(page.getByText('What do these activations (in green) have in common?')).toBeVisible();
});

test('reference to animals button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#analyze');
    await page.getByText('references to animals').click();
    await expect(page.getByText('Nice! This was tricky, because there are two possibly correct answers.')).toBeVisible();
});

test('none of these button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#analyze');
    await page.getByText('none of these').click();
    await expect(page.getByText('Nice! This was tricky, because there are two possibly correct answers.')).toBeVisible();
});

test('analyze steer', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#analyze');
    
    //unlocked after doing the demo, or pressing skip demo
    await page.getByText('skip example').first().click();
    const analyzeSteer = page.getByPlaceholder('Can you write a text snippet that activates it?');
    await analyzeSteer.fill('test');
    await analyzeSteer.press('Enter');
    
    await expect(page.getByText('0.00')).toBeVisible(); 
});

test('puzzles labels', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#analyze');

    //unlocked after doing analyze steer, or pressing skip analyze
    await page.getByText('skip analyze').first().click();

    //test all 3 buttons
    const labelButtons = await page.getByRole('button', { name: 'Reveal Our Label'}).all();
    //click each button
    for ( let i = 0; i < labelButtons.length; i++) {
        await labelButtons[i].click();
    }

    //check labels
    await expect(page.getByText('Lies and falsehoods')).toBeVisible();
    await expect(page.getByText('Misspellings or typos')).toBeVisible();
    await expect(page.getByText('Bad/cringe stories')).toBeVisible();
});

test('next steer gemma button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#analyze');

    //unlocked after puzzles, or pressing skip analyze
    await page.getByText('skip analyze').nth(1).click();
    await page.getByText(' Next - Steer Gemma').click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#steer');
});


test('steer page', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#steer');

    await page.locator('textarea[name="Let\'s put these features to use"]').isVisible();
});

test('steer demo', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#steer');

    //check for demo question
    await expect(page.getByText('What are you?').first()).toBeVisible();
});

test('next do more button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#steer');

    await page.getByText('Next - Do More').click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#learn');
});

test('do more page', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    await page.locator('textarea[name="This demo of Gemma Scope"]').isVisible();
});

test('open problems page', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#openproblems');

    await page.locator('textarea[name="Interpretability has many unsolved problems"]').isVisible();
});

test('playground page', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#playground');

    await page.locator('textarea[name="Enter something below to see"]').isVisible();
});

test('browse & search page', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#browse');

    await page.locator('textarea[name="Search 50,000,000+ features"]').isVisible();
});