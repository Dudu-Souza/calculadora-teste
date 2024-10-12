import { Builder, By } from 'selenium-webdriver';
import { expect } from 'chai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Testes da Calculadora', function () {
    this.timeout(30000);

    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    beforeEach(async function () {
        const filePath = `file://${path.resolve(__dirname, '../src/index.html')}`;
        await driver.get(filePath);
        await driver.findElement(By.xpath("//button[text()='C']")).click();
    });

    it('Deve carregar a página da calculadora', async function () {
        const title = await driver.getTitle();
        expect(title).to.equal('Calculadora');
    });

    it('Deve realizar a operação de soma corretamente', async function () {
        await driver.findElement(By.xpath("//button[text()='7']")).click();
        await driver.findElement(By.xpath("//button[text()='+']")).click();
        await driver.findElement(By.xpath("//button[text()='3']")).click();
        await driver.findElement(By.xpath("//button[text()='=']")).click();

        const result = await driver.findElement(By.id('resultado')).getAttribute('value');
        expect(result).to.equal('10');
    });

    it('Deve realizar a operação de subtração corretamente', async function () {
        await driver.findElement(By.xpath("//button[text()='9']")).click();
        await driver.findElement(By.xpath("//button[text()='-']")).click();
        await driver.findElement(By.xpath("//button[text()='4']")).click();
        await driver.findElement(By.xpath("//button[text()='=']")).click();

        const result = await driver.findElement(By.id('resultado')).getAttribute('value');
        expect(result).to.equal('5');
    });

    it('Deve realizar a operação de multiplicação corretamente', async function () {
        await driver.findElement(By.xpath("//button[text()='6']")).click();
        await driver.findElement(By.xpath("//button[text()='x']")).click();
        await driver.findElement(By.xpath("//button[text()='3']")).click();
        await driver.findElement(By.xpath("//button[text()='=']")).click();

        const result = await driver.findElement(By.id('resultado')).getAttribute('value');
        expect(result).to.equal('18');
    });

    it('Deve realizar a operação de divisão corretamente', async function () {
        await driver.findElement(By.xpath("//button[text()='8']")).click();
        await driver.findElement(By.xpath("//button[text()='/']")).click();
        await driver.findElement(By.xpath("//button[text()='2']")).click();
        await driver.findElement(By.xpath("//button[text()='=']")).click();

        const result = await driver.findElement(By.id('resultado')).getAttribute('value');
        expect(result).to.equal('4');
    });

    it('Deve mostrar erro ao dividir por zero', async function () {
        await driver.findElement(By.xpath("//button[text()='9']")).click();
        await driver.findElement(By.xpath("//button[text()='/']")).click();
        await driver.findElement(By.xpath("//button[text()='0']")).click();
        await driver.findElement(By.xpath("//button[text()='=']")).click();

        const result = await driver.findElement(By.id('resultado')).getAttribute('value');
        expect(result).to.equal('Erro');
    });

    it('Deve lidar com entrada inválida corretamente', async function () {
        await driver.findElement(By.xpath("//button[text()='+']")).click();
        await driver.findElement(By.xpath("//button[text()='=']")).click();

        const result = await driver.findElement(By.id('resultado')).getAttribute('value');
        expect(result).to.equal('Erro');
    });
});