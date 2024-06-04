import puppeteer from "puppeteer";
import assert from 'assert';

describe('Téglalap kerületszámítás', function() {
    let browser;
    let page;
    before(async function(){
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });
    after(async function(){
        browser.close();
    });
    it('30, 35 bemenetre 130-t', async function(){
        await page.goto('http://localhost:3000');
        await page.type('#aSide', '30');
        await page.type('#bSide', '35');
        await page.click('#calcButton');
        const actual = await page.$eval('#perimeter', elem => elem.value);
        const expected = 130;
        assert.equal(actual, expected);
    });
});
