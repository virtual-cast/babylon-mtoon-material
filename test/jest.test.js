/**
 * jest-puppeteer Test Suite file
 *
 * test scene uses `/src/test/index.ts` and `/test/index.html`
 */

describe('Test', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:10080/index.html');
        await page.waitForFunction(() => !!window.currentScene);
    })

    it('should have opened', async () => {
        await expect(page.title()).resolves.toMatch('Babylon.js MToon Material Test');
    });

    it('has Meshes', async () => {
        const meshLength = await page.evaluate(() => {
            return Promise.resolve(window.currentScene.meshes.length);
        });
        expect(meshLength).toBeDefined();
        expect(meshLength).toBeGreaterThan(0);
    })
});
