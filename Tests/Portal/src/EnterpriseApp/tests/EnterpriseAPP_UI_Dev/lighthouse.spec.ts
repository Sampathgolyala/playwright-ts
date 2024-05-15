import { test} from '@playwright/test';
import { Page } from 'playwright';
import { LightHouseUtility } from 'vita-playwright';


let page: Page;
let browserEngine = process.env.browser?.toLocaleLowerCase()
let poolImage = process.env.vmImage
let pageurl:string;

test.describe("Accessibility testting for Enterprise Applications", async () =>{

    const dev_Urls=[//"https://vialto:4ZevAB23@vialto10dev.sbx.world/contact-us",
    "https://vialto10dev.sbx.world/contact-us",
    "https://vialto10dev.sbx.world/solutions",
    "https://vialto10dev.sbx.world/solutions/immigration-services",
    "https://vialto10dev.sbx.world/solutions/business-travel",
    "https://vialto10dev.sbx.world/solutions/remote-work",
    "https://vialto10dev.sbx.world/solutions/compensation-and-rewards",
    "https://vialto10dev.sbx.world/solutions/managed-services",
    "https://vialto10dev.sbx.world/solutions/social-security-services",
    "https://vialto10dev.sbx.world/technology",
    "https://vialto10dev.sbx.world/insights",
    "https://vialto10dev.sbx.world/news",
    "https://vialto10dev.sbx.world/regional-alerts",
    "https://vialto10dev.sbx.world/podcasts",
    "https://vialto10dev.sbx.world/careers",
    "https://vialto10dev.sbx.world/careers/early-careers",
    "https://vialto10dev.sbx.world/about-us",
    "https://vialto10dev.sbx.world/about-us/business-alliances",
    "https://vialto10dev.sbx.world/about-us/diversity-equity-and-inclusion",
    "https://vialto10dev.sbx.world/about-us/sustainability",
    "https://vialto10dev.sbx.world/about-us/faqs",
    "https://vialto10dev.sbx.world/client-login",
    "https://vialto10dev.sbx.world/copyright",
    "https://vialto10dev.sbx.world/ethics-helpline-information",
    "https://vialto10dev.sbx.world/legal",
    "https://vialto10dev.sbx.world/disclosures",
    "https://vialto10dev.sbx.world/privacy",
    "https://vialto10dev.sbx.world/cookies",
    "https://vialto10dev.sbx.world/terms",
    "https://vialto10dev.sbx.world/",
    "https://vialto10dev.sbx.world/solutions/international-services"
];

    const stage_Urls=["https://vialto10staging.sbx.world/contact-us",
    "https://vialto10staging.sbx.world/solutions",
    "https://vialto10staging.sbx.world/solutions/immigration-services",
    "https://vialto10staging.sbx.world/solutions/business-travel",
    "https://vialto10staging.sbx.world/solutions/remote-work",
    "https://vialto10staging.sbx.world/solutions/compensation-and-rewards",
    "https://vialto10staging.sbx.world/solutions/managed-services",
    "https://vialto10staging.sbx.world/solutions/social-security-services",
    "https://vialto10staging.sbx.world/technology",
    "https://vialto10staging.sbx.world/insights",
    "https://vialto10staging.sbx.world/news",
    "https://vialto10staging.sbx.world/regional-alerts",
    "https://vialto10staging.sbx.world/podcasts",
    "https://vialto10staging.sbx.world/careers",
    "https://vialto10staging.sbx.world/careers/early-careers",
    "https://vialto10staging.sbx.world/about-us",
    "https://vialto10staging.sbx.world/about-us/business-alliances",
    "https://vialto10staging.sbx.world/about-us/diversity-equity-and-inclusion",
    "https://vialto10staging.sbx.world/about-us/sustainability",
    "https://vialto10staging.sbx.world/about-us/faqs",
    "https://vialto10staging.sbx.world/client-login",
    "https://vialto10staging.sbx.world/copyright",
    "https://vialto10staging.sbx.world/ethics-helpline-information",
    "https://vialto10staging.sbx.world/legal",
    "https://vialto10staging.sbx.world/disclosures",
    "https://vialto10staging.sbx.world/privacy",
    "https://vialto10staging.sbx.world/cookies",
    "https://vialto10staging.sbx.world/terms",
    "https://vialto10staging.sbx.world/",
    "https://vialto10staging.sbx.world/solutions/international-services"];

    const prod_Urls=["https://vialtopartners.com/contact-us",
    "https://vialtopartners.com/solutions",
    "https://vialtopartners.com/solutions/immigration-services",
    "https://vialtopartners.com/solutions/business-travel",
    "https://vialtopartners.com/solutions/remote-work",
    "https://vialtopartners.com/solutions/compensation-and-rewards",
    "https://vialtopartners.com/solutions/managed-services",
    "https://vialtopartners.com/solutions/social-security-services",
    "https://vialtopartners.com/technology",
    "https://vialtopartners.com/insights",
    "https://vialtopartners.com/news",
    "https://vialtopartners.com/regional-alerts",
    "https://vialtopartners.com/podcasts",
    "https://vialtopartners.com/careers",
    "https://vialtopartners.com/careers/early-careers",
    "https://vialtopartners.com/about-us",
    "https://vialtopartners.com/about-us/business-alliances",
    "https://vialtopartners.com/about-us/diversity-equity-and-inclusion",
    "https://vialtopartners.com/about-us/sustainability",
    "https://vialtopartners.com/about-us/faqs",
    "https://vialtopartners.com/client-login",
    "https://vialtopartners.com/copyright",
    "https://vialtopartners.com/ethics-helpline-information",
    "https://vialtopartners.com/legal",
    "https://vialtopartners.com/disclosures",
    "https://vialtopartners.com/privacy",
    "https://vialtopartners.com/cookies",
    "https://vialtopartners.com/terms",
    "https://vialtopartners.com/",
    "https://vialtopartners.com/solutions/international-services"];

    test("Corp site",async ({ browser, page}) => {

        //    page = await browser.newPage();
        //   await page.goto('https://vialto:4ZevAB23@vialto10dev.sbx.world/contact-us');

        if( process.env.NODE_ENV=='test'){
            for(let i =0; i< dev_Urls.length; i++){
                await test.step(dev_Urls[i], async () => {
                page = await browser.newPage(); 
                let report = dev_Urls[i].replace(/\//g, "");   
                await LightHouseUtility.auditLightHouse(dev_Urls[i],process.env.Device_Type,report+".html")
                })
            }
        }
        else if(process.env.NODE_ENV=='stage'){        
            for(let i =0; i< stage_Urls.length; i++){
                 await test.step(stage_Urls[i], async () => {
                 page = await browser.newPage(); 
                 let report = stage_Urls[i].replace(/\//g, "");    
                 await LightHouseUtility.auditLightHouse(stage_Urls[i],process.env.Device_Type,report+".html")
                })
            }
        }
        else {
            for(let i = 0; i< prod_Urls.length; i++){
                await test.step(prod_Urls[i], async () => {
                page = await browser.newPage(); 
                let report = prod_Urls[i].replace(/\//g, "");  
                await LightHouseUtility.auditLightHouse(prod_Urls[i],process.env.Device_Type,report+".html")
                })
            }
        }
    })

    // test("Corpsite Mobile",async ({ browser, page }) => {
    //     for(let i =0; i< prod_Urls.length; i++){
    //          page = await browser.newPage(); 
    //          await LightHouseUtility.auditLightHouse(prod_Urls[i],"Mobile",prod_Urls[i]+".html")
    //      }
    // })

    test("Amazon site",async ({ browser, page }) => {

        page = await browser.newPage(); 

        if( process.env.NODE_ENV=='test'){
            await LightHouseUtility.auditLightHouse("https://vialto:4ZevAB23@h58m65hlw9w30ykel0js3j475.js.wpenginepowered.com/",process.env.Device_Type,"amazon_site_lighthouse_Dev.html")
        }
        else if(process.env.NODE_ENV=='stage'){              
            await LightHouseUtility.auditLightHouse("https://hzcofy1ogzbxu4hqjth0jlvqn.js.wpenginepowered.com/",process.env.Device_Type,"amazon_site_lighthouse_Stage.html")
        }
        else
         {           
             await LightHouseUtility.auditLightHouse("https://globalmobilityservices.vialto.com/",process.env.Device_Type,"amazon_site_lighthouse_Prod.html")
         }        
    })

    // test("Amazon site Mobile",async ({ page }) => {
    //     await LightHouseUtility.auditLightHouse("https://globalmobilityservices.vialto.com/","Mobile","amazon_site_lighthouse.html")
    // })
    test("Austria site",async ({ browser, page }) => {
        
        page = await browser.newPage(); 

        if( process.env.NODE_ENV=='test'){
            await LightHouseUtility.auditLightHouse("https://vialto:4ZevAB23@hhl3okh4zj81j9nypdwjclcp2.js.wpenginepowered.com/",process.env.Device_Type,"austria_site_lighthouse_Dev.html")
        }
        else if(process.env.NODE_ENV=='stage'){              
            await LightHouseUtility.auditLightHouse("https://hax8pnwez6iyyy2pcesjx1mls.js.wpenginepowered.com/",process.env.Device_Type,"austria_site_lighthouse_Stage.html")
        }
        else {           
             await LightHouseUtility.auditLightHouse("https://austria.vialtopartners.com/",process.env.Device_Type,"austria_site_lighthouse_Prod.html")
         }
        })

    // test("Austria site Mobile",async ({ page }) => {
    //     await LightHouseUtility.auditLightHouse("https://austria.vialtopartners.com/","Mobile","austria_site_lighthouse.html")
    // })

    test("China site",async ({ browser, page }) => {
        page = await browser.newPage(); 

        if( process.env.NODE_ENV=='test'){
            await LightHouseUtility.auditLightHouse("https://vialto:4ZevAB23@vrp-dev.sbx.world/china",process.env.Device_Type,"china_site_lighthouse_Dev.html")
        }
        else if(process.env.NODE_ENV=='stage'){              
            await LightHouseUtility.auditLightHouse("https://vrp-uat.sbx.world/china",process.env.Device_Type,"china_site_lighthouse_Stage.html")
        }
        else {           
            await LightHouseUtility.auditLightHouse("https://globalmobility.vialtopartners.com/china",process.env.Device_Type,"china_site_lighthouse_Prod.html")
        }

    })

    // test("China site Mobile",async ({ page }) => {
    //     await LightHouseUtility.auditLightHouse("https://globalmobility.vialtopartners.com/china","Mobile","china_site_lighthouse.html")
    // })

    test("Singapore site",async ({ browser, page }) => {
        page = await browser.newPage(); 

        if( process.env.NODE_ENV=='test'){
            await LightHouseUtility.auditLightHouse("https://vialto:4ZevAB23@vrp-dev.sbx.world/sg_analytics",process.env.Device_Type,"singapore_site_lighthouse_Dev.html")
        }
        else if(process.env.NODE_ENV=='stage'){              
            await LightHouseUtility.auditLightHouse("https://vrp-uat.sbx.world/sg_analytics",process.env.Device_Type,"singapore_lighthouse_Stage.html")
        }
        else {           
             await LightHouseUtility.auditLightHouse("https://globalmobility.vialtopartners.com/sg_analytics",process.env.Device_Type,"singapore_site_lighthouse_Prod.html")
         }
    })

    // test("Singapore site Mobile",async ({ page }) => {
    //     await LightHouseUtility.auditLightHouse("https://globalmobility.vialtopartners.com/sg_analytics","Mobile","singapore_site_lighthouse.html")
    // })

    
})

test.afterAll(async ({}) => {
    await LightHouseUtility.createLightHouseReport(process.cwd()+'/lighthouse/pages',process.cwd()+'/lighthouse/index.html','EnterpriseApp')

})