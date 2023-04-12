//const puppeteer = require('puppeteer-extra');
const puppeteer = require('puppeteer');
var wait = require('wait-for-stuff');
//const StealthPlugin = require('puppeteer-extra-plugin-stealth')
//puppeteer.use(StealthPlugin())


var login=async function(email,password,page){

    await page.goto('https://www.jdsports.com.sg/myaccount/login/')

    await page.type("input[id='username']",email)
    await page.type("input[id='password']",password)
    
    await page.click("button[id='doLogin']")
    
}

var selection=async function(page,quantity){
	
	await page.goto('https://www.jdsports.com.sg/product/white-nike-air-force-1-07-lv8-emb/19286398_jdsportssg/');
    await page.waitForTimeout(3000)
   
    await page.click("button[title='Select Size 10']",)
    await page.waitForTimeout(3000)


    for(var i=1;i<quantity;i++)
    {await page.click("span[class='btn btn-default quantityPlus ']",)
      console.log('click')
      page.waitForTimeout(2000)
   }
    
    console.log('clicking basket')
    await page.click("button[title='Add to basket']",)
    console.log('done')
	
	
};

var payment=async function(page,card_name,card_no,cvv,expiry_date){


  await page.goto("https://www.jdsports.com.sg/cart/")
  await page.waitForTimeout(3000)
  await page.click("a[class='btn btn-level1 large wArro']")
  await page.waitForTimeout(28000)
  await page.goto("https://checkout.jdsports.com.sg/delivery")
  
  //await page.waitForNavigation()
  await page.click("span[class='StyledRadioButton__StyledRadioButtonLabel-g1f6ld-2 hsGJKv']")
  await page.waitForTimeout(3000)
  await page.type("input[id='name-id']",card_name)
  await page.type("input[id='encryptedCardNumber']",card_no)
  await page.type("input[id='encryptedExpiryDate']",expiry_date)
  await page.type("input[id='encryptedSecurityCode']",cvv)

  await page.click("button[aria-label='Checkout Securely']")



}


  async function main(){

    const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
    const email='zahir.inspireme@gmail.com'
    const password='mzbt70311'

    const card_name='MUHAMMAD ZAHIR'
    const card_no='424242424242'
    const cvv='123'
    const expiry_date='05/28'

    await login(email,password,page)
    wait.for.time(7)
    await selection(page,1)
    wait.for.time(3)
    await payment(page,card_name,card_no,cvv,expiry_date)
   
    //await browser.close();

  }



  main()










