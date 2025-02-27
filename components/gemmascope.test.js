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

test('advanced steer button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');
    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.locator('a[target="_blank"][href*="https://www.neuronpedia.org/steer"]').click()
    ]);
    await expect(newPage).toHaveURL(/https:\/\/www\.neuronpedia\.org\/.*\/steer/);
});

test('browse saes button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');
    
    await page.getByText('Browse SAEs').click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#browse');
});

// test('Contact Us', async({ page }) => {
//   await page.goto('https://neuronpedia.org/gemma-scope#learn');

//   const [newPage] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('a[target="_blank"][href*="mailto:johnny@neuronpedia\.org"]').click()
//   ]);

//   await expect(newPage).toHaveURL(/mailto:johnny@neuronpedia\.org*/);
// });

test('deepmind blog post button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('DeepMind Blog Post').click()
    ]);
    
    await expect(newPage).toHaveURL('https://deepmind.google/discover/blog/gemma-scope-helping-the-safety-community-shed-light-on-the-inner-workings-of-language-models/'); 
});

test('coding tutorial button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('Coding Tutorial').click()
    ]);
    
    await expect(newPage).toHaveURL('https://colab.research.google.com/drive/17dQFYUYnuKnP6OwQPH9v_GSYUW5aj-Rp?usp=sharing'); 
});

//testing it the default method with expect().toHaveURL doesnt work, url ends up being blank
//only tests for the correct link being on the page
test('technical report button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');
    
    const href = await page.getByText('Technical Report').getAttribute('href');
    
    expect(href).toContain('storage.googleapis.com/gemma-scope/gemma-scope-report.pdf');
});

test('huggingface button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('HuggingFace').click()
    ]);
    
    await expect(newPage).toHaveURL('https://huggingface.co/google/gemma-scope'); 
});

test('get started with mech interp button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('Get Started with Mech Interp').click()
    ]);
    
    await expect(newPage).toHaveURL('https://www.neelnanda.io/mechanistic-interpretability/getting-started'); 
});

test('favourite mech interp papers button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('Favourite Mech Interp Papers').click()
    ]);
    
    await expect(newPage).toHaveURL('https://www.alignmentforum.org/posts/NfFST5Mio7BCAQHPA/an-extremely-opinionated-annotated-list-of-my-favourite-1'); 
});

test('toward monosemanticity button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('Toward Monosemanticity').click()
    ]);
    
    await expect(newPage).toHaveURL('https://transformer-circuits.pub/2023/monosemantic-features'); 
});

test('saelens button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('SAELens').click()
    ]);
    
    await expect(newPage).toHaveURL('https://github.com/jbloomAus/SAELens'); 
});

test('transformerlens button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('TransformerLens').click()
    ]);
    
    await expect(newPage).toHaveURL('https://github.com/TransformerLensOrg/TransformerLens'); 
});

test('nnsight button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('NNsight').click()
    ]);
    
    await expect(newPage).toHaveURL('https://github.com/ndif-team/nnsight'); 
});

test('mats program button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('MATS Program').click()
    ]);
    
    await expect(newPage).toHaveURL('https://www.matsprogram.org/'); 
});

test('arena education button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('ARENA Education').click()
    ]);
    
    await expect(newPage).toHaveURL('https://www.arena.education/'); 
});

test('twitter button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    const [newPage] = await Promise.all ([
        page.waitForEvent('popup'),
        await page.getByText('Twitter').first().click()
    ]);
    
    await expect(newPage).toHaveURL('https://x.com/neuronpedia'); 
});

// second contact us button on same page
// test('Contact Us', async({ page }) => {
//   await page.goto('https://neuronpedia.org/gemma-scope#learn');

//   const [newPage] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('a[target="_blank"][href*="mailto:johnny@neuronpedia\.org"]').click()
//   ]);

//   await expect(newPage).toHaveURL(/mailto:johnny@neuronpedia\.org*/);
// });

test('open problems button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    await page.getByRole('button', { name: 'Open Problems'}).click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#openproblems');
});

test('playground button', async ({ page }) => {
    await page.goto('https://neuronpedia.org/gemma-scope#learn');

    await page.getByRole('button', { name: 'Playground'}).click();
    await expect(page).toHaveURL('https://www.neuronpedia.org/gemma-scope#playground');
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