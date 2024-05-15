
import OR from '../../../resources/utils/OR.json'
import loginpagejson from '../../../resources/EnterpriseApp/pageLocators/loginPage/vialtoLoginPage.json'
import homepagejson from '../../../resources/EnterpriseApp/pageLocators/loginPage/vialtoHomePage.json'
import { LightHouseUtility, UIHelper} from 'vita-playwright';

export class Corp_Site_HomePage extends UIHelper {
    async navigatetoURL()
    {
        if (process.env.NODE_ENV=='test') {
            await this.page.goto(OR.corp.url_Test);
            // await this.page.locator("//ul[@aria-label='Language selector']//preceding-sibling::a").hover()
            // await this.page.click("//ul[@aria-label='Language selector']//a[@href='/de']")      
        }
        else if(process.env.NODE_ENV=='stage'){
            await this.page.goto(OR.corp.url_Stage);
            // await this.page.locator("//ul[@aria-label='Language selector']//preceding-sibling::a").hover()
            // await this.page.click("//ul[@aria-label='Language selector']//a[@href='/de']")         
        }
        else{
            await this.page.goto(OR.corp.url_prod);            
        }
        
    }
    async IsVialtoLogoPresent() 
    {
        return await this.isElementPresent(loginpagejson.vialtoLogo);
    }
    async IsHeaderPresent(name:string)
    {
        return await this.isElementPresent(`(//span[text()='${name}']|//a[text()='${name}'])[1]`);
    }
    async isGetStartedoRSignBtnPresent(btn_name:string) 
    {
        return this.isElementPresent(loginpagejson.buttons.contactusBtn.replace("name",`${btn_name}`))
    }
    async isGetStartedoRSignBtnEnabled(btn_name:string) 
    {
        return await this.page.getByRole('link',{name:`${btn_name}`}).isEnabled() 
    }
    async clickAcceptAllCookies() 
    {
        await this.clickonWebElement(loginpagejson.buttons.acceptAllCookies);
        await this.page.waitForTimeout(3000);
    }
    async clickRejectAllCookies() 
    {
        await this.clickonWebElement(loginpagejson.buttons.rejectAllCookies);
        await this.page.waitForTimeout(3000);
    }
    async get_title_header()
    {
        return await this.getText(loginpagejson.paragraph.Vialtosummary);
    }
    async get_home_page_hero_paragraph()
    {
        return await this.getText(loginpagejson.paragraph.heroparagraph);
    }

    // async validateVialtoLandingPageParagraphValidation() {
    // let s1="Your partner in a world of possibilities"
    // let hero_paragraph="Vialto is the world's first tech-enabled, people-first, global mobility company focused on cross-border compliance and risk assessment for tax, immigration, business travel, rewards and compensation, and remote work. As your ally, we spark meaningful change for your business—and your people."
    // expect.soft(await this.get_title_header()).toEqual(s1);
    // expect.soft(await this.get_home_page_hero_paragraph()).toEqual(hero_paragraph);
    // console.log("Texts Matched");
    // }
    async selectchildPages(lnk_name:String,sub_lnk_name:String)
    {
        await this.page.locator(`//span[text()='${lnk_name}']`).hover()
        await this.page.locator(`//span[text()='${sub_lnk_name}']`).click({timeout:20000})
        let current_url=await this.page.url()
        return current_url
    }
    
    async clickonpage(page_name:String) {
        await this.clickonWebElement(`(//span[text()='${page_name}']|//a[text()='${page_name}'])[1]`);
        await this.page.waitForLoadState('domcontentloaded')
    }
    async clickon_Button(button_name:String) {
        await this.clickonWebElement(`(//span[text()='${button_name}']|//button[text()='${button_name}']|//button[text()='${button_name}'])[1]`);
    }
    async clickon_contactus_button(button_name:String) {
        await this.page.getByRole('link',{name:`${button_name}`}).click()
        console.log('clicked')
    }
    async enter_random_string(starting_number:number,end_number:number)
    {
        let ran_name=Math.random().toString(36).slice(starting_number,end_number)
        return ran_name
    }    
    async enter_first_name()
    {
        let first_name=await this.enter_random_string(2,10)
        await this.filltheData(homepagejson.contactform.first_name,first_name)
    }
    async enter_last_name()
    {
        let last_name=await this.enter_random_string(2,10)
        await this.filltheData(homepagejson.contactform.last_name,last_name)
    }
    async enter_email()
    {
        let user_email=await this.enter_random_string(2,10)
        let mail_id=user_email+'@yahoo.com'
        await this.filltheData(homepagejson.contactform.email,mail_id)
    }
    async enter_job_title()
    {
        await this.clickonWebElement("#title")
        let title=await this.enter_random_string(2,10)
        await this.filltheData("#title",title)
    }
    async enter_company()
    {
        let user_company=await this.enter_random_string(2,10)
        await this.filltheData(homepagejson.contactform.company,user_company)
    }
    async select_located_country()
    {
        await this.clickonWebElement("#country")
        let country=await this.page.$("#country")
        let all_countries=await country.$$("option")
        let countries=await all_countries.length
        let ran_number=Math.random()*countries
        let select_country_index=Math.floor(ran_number)
        await this.page.selectOption("#country",{index:select_country_index})
    }

    async select_interested_located_country()
    {
        await this.clickonWebElement("#Location_Interested_In__c")
        let interested_country=await this.page.$("#Location_Interested_In__c")
        let list_interested_all_countries=await interested_country.$$("option")
        let countries_list=await list_interested_all_countries.length
        let ran_number=Math.random()*countries_list
        let random_select_country_index=Math.floor(ran_number)
        await this.page.selectOption("#Location_Interested_In__c",{index:random_select_country_index})
    }

    async select_topic_of_interest()
    {
        await this.clickonWebElement("#Topic_of_Interest__c")
        let interested_topic=await this.page.$("#Topic_of_Interest__c")
        let all_topic_of_interests=await interested_topic.$$("option")
        let topic_of_interests=await all_topic_of_interests.length
        let ran_number=Math.random()*topic_of_interests
        let select_interest_index=Math.floor(ran_number)
        await this.page.selectOption("#Topic_of_Interest__c",{index:select_interest_index})
        await this.page.waitForTimeout(3000);
    }

    async select_privacy_statement()
    {
        await this.clickonWebElement(homepagejson.contactform.chk_box_privacy_statement)
    }
    async select_email_opt()
    {
        await this.clickonWebElement(homepagejson.contactform.chk_box_Email_Opt_in)
        await this.page.waitForTimeout(5000);
    }
    async enter_comments()
    {
        let user_comments=await this.enter_random_string(2,10)
        await this.filltheData(homepagejson.contactform.comments_section,user_comments)

    }
    
    async click_on_get_in_touch_button(button_name:String)
     {
        await this.page.waitForTimeout(3000);
        await this.clickonWebElement(`(//a[text()='${button_name}'])[1]|(//span[text()='${button_name}'])[1]|//button[text()='${button_name}']`);
        await this.page.waitForTimeout(3000);
        
    }

    async click_on_captcha_enable() 
    {
        await this.clickonWebElement(homepagejson.contactform.clk_captcha_chkbox);
        await this.page.waitForTimeout(3000);
    }

    async get_contact_us_successful_message()
    {
        await this.page.waitForTimeout(3000);
        return this.getText(homepagejson.contactform.success_message);
    }

    async clickon_cookiesettings_button() {
        await this.page.waitForTimeout(3000);
        await this.clickonWebElement(homepagejson.cookie.btn_cookie);
        
    }

    async clickon_cookies_button(button_name:String) {
          //await this.page.getByRole('button',`{name:'${button_name}', exact: true}`).click();
          await this.clickonWebElement(`//button[text()='${button_name}']`)
          await this.page.waitForTimeout(3000)
    }

    async clickon_consent_preferences(button_name:String) {
        //await this.page.getByRole('button',`{name:'${button_name}', exact: true}`).click();
        await this.clickonWebElement(`//span[text()='${button_name}']//preceding-sibling::span`)
        await this.page.waitForTimeout(10000)
  }
  async clickon_confirm_choices_Button(button_name:String) {
    await this.clickonWebElement(`//button[text()='${button_name}']`);
    await this.page.waitForTimeout(10000)
}

async get_cookie_attribute_value_inactive()
{
    await this.page.waitForTimeout(3000)
    let field = this.page.locator("//script[@data-nscript='afterInteractive']");
    let value= await field.getAttribute('data-cookieconsent');
    return (value).includes('ignore')
}
async get_cookie_attribute_value()
{
    await this.page.waitForTimeout(3000)
    let field = this.page.locator("//script[@data-nscript='afterInteractive']");
    let value=  await field.getAttribute('src');
    return (value).includes('beacon')
}

async get_page_title()
    {
        await this.page.waitForTimeout(3000)
        return await this.page.title()
    }
async get_page_console_errors()
{
    
    this.page.on('console', msg => console.log(msg.text()));
    this.page.on('console', msg => {    
        if (msg.type() === 'error')
        console.log(`Error text: "${msg.text()}"`);
    });
}

async click_privacy_policy_link()
{
    await this.clickonWebElement(homepagejson.contactform.lnk_privacy_policy_link)
}

async verify_technology_link()
{
    let m= await this.page.locator("//a[text()='Technology']").isVisible();
    console.log(m)
    return await this.page.locator("//a[text()='Technology']").isVisible();
//    return await this.page.locator('p').filter({ hasText: /^Technology$/ }).getByRole('link').toBeVisible();
}

}