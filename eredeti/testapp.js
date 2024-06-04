import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.type('#aSide', '30');
    await page.type('#bSide', '35');
    await page.click('#calcButton');
    const actual = await page.$eval('#perimeter', elem => elem.value);
    // console.log('Eredmény:', actual);
    if(actual == '130') {
        console.log('Ok')
    }else {
        console.log('Hiba! A 30 35-re 130-t kell kapni!')
    }
    await browser.close();
})();
