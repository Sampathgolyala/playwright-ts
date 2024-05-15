import { test, Page,expect, BrowserContext } from '@playwright/test';
import { loginToVialtoEnterprise } from '../../../../../resources/utils/login_to_vialto_enterprise';
import { Corp_Site_HomePage } from '../../../pages/Corp_Site_HomePage';

let page: Page;
// let browserEngine = process.env.browser.toLocaleLowerCase();
let poolImage = process.env.vmImage;
let pageurl:string;
let browserEngine=process.env.browser?.toLocaleLowerCase()


test.describe("Open the Vialto Enterprise Site", async () =>{  
    let corp_homePage: Corp_Site_HomePage; 
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        corp_homePage=new Corp_Site_HomePage(page);
        await loginToVialtoEnterprise(page);
        await corp_homePage.clickAcceptAllCookies()        
    });
    
    test('validate Vialto Landing Page Basic Elements @regression @homepage @.com', async ({}) => {
        await test.step('Verify user navigated to Global Mobility Solutions | Vialto Partners Page', async () => 
        {
        let Title_of_the_page= await corp_homePage.get_page_title()
        expect(Title_of_the_page).toBe("Global Mobility Solutions | Vialto Partners")
        });
        expect(await corp_homePage.IsVialtoLogoPresent()).toBe(true);
        expect(await corp_homePage.IsHeaderPresent('Solutions')).toBe(true);
        expect(await corp_homePage.IsHeaderPresent('Technology')).toBe(true);
        expect(await corp_homePage.IsHeaderPresent('News and Insights')).toBe(true);
        expect(await corp_homePage.IsHeaderPresent('Careers')).toBe(true);
        expect(await corp_homePage.IsHeaderPresent('About Us')).toBe(true);
        expect(await corp_homePage.isGetStartedoRSignBtnEnabled('Contact Us')).toBe(true);
    })  
    test("validate Vialto Landing Page Paragraph Validation @regression @poolimage @.com",async ({}) => {
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){
                await expect(page).toHaveScreenshot('expected_vialtoPartners_Home_Page.png', {fullPage:true})
                } 
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_vialtoPartners_Home_Page-SF.png', {fullPage:true})
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_vialtoPartners_Home_Page-FF.png', {fullPage:true})
                } 
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){
                await expect(page).toHaveScreenshot('expected_vialtoPartners_Home_Page-linux.png', {fullPage:true})
                } 
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_vialtoPartners_Home_Page-SF-linux.png', {fullPage:true})
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_vialtoPartners_Home_Page-FF-linux.png', {fullPage:true})
                } 
        }
    }) 

    test("verify visual Comparision of the SubPages in Solutions tab @regression @.com",async({})=>
        {
            await test.step('Verify user navigated to Solutions Page and Compare the Page with Expected Solutions Page', async () => 
            {
            pageurl=await corp_homePage.selectchildPages('Solutions','Solutions Overview');            
            await expect(page).toHaveTitle("Global Mobility Solutions | Vialto Partners")            
            console.log("Solutions Page")
            expect(corp_homePage.verify_technology_link()).toBeTruthy()

            await page.evaluate(() => document.fonts.ready);
            if (poolImage=='windows-latest'){
                if (browserEngine=='chromium'){
                    await expect(page).toHaveScreenshot('solutions_Page.png', {fullPage:true})                
                } 
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_solutions_Page-SF.png', {fullPage:true})
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_solutions_Page-FF.png', {fullPage:true})
                }
            }
            if (poolImage=='ubuntu-latest'){
                if (browserEngine=='chromium'){
                await expect(page).toHaveScreenshot('expected_solutions_Page-linux.png', {fullPage:true})
                } 
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_solutions_Page-SF-linux.png', {fullPage:true})
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_solutions_Page-FF-linux.png', {fullPage:true})
                }
            }    
            })
            await test.step('Verify user navigated to Tax Services Page and Compare the Page with Expected Tax Services Page', async () => 
            {
                console.log("We are in Tax page Method")
                pageurl=await corp_homePage.selectchildPages('Solutions','Tax');
                await expect(page).toHaveTitle("Tax Solutions | Vialto Partners")
                console.log("Tax_Solutions Page")
                await page.evaluate(() => document.fonts.ready);
                if (poolImage=='windows-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Tax_Page.png', {fullPage:true})
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Tax_Page-SF.png', {fullPage:true})
                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Tax_Page-FF.png', {fullPage:true})
                    }
                }
                if (poolImage=='ubuntu-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Tax_Page-linux.png', {fullPage:true})
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Tax_Page-SF-linux.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Tax_Page-FF-linux.png', {fullPage:true})
                    }
                }
            })
            await test.step('Verify user navigated to Immigration Services Page and Compare the Page with Expected Immigration Services Page', async () => 
            {
                console.log("We are in Immigration services page Method")
                await corp_homePage.selectchildPages('Solutions','Immigration');
                await expect(page).toHaveTitle("Immigration Services | Vialto Partners")
                await page.evaluate(() => document.fonts.ready);
                if (poolImage=='windows-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Immigration_Page.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Immigration_Page-SF.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Immigration_Page-FF.png', {fullPage:true})
                    }
                }
                if (poolImage=='ubuntu-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Immigration_Page-linux.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Immigration_Page-SF-linux.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Immigration_Page-FF-linux.png', {fullPage:true})
                    }
                }
                
            })
            await test.step('Verify user navigated to Business Travel Page and Compare the Page with Expected Business Travel Page', async () => 
            {
                await corp_homePage.selectchildPages('Solutions','Business Travel');
                console.log("We are in Business_Travel page Method")
                await expect(page).toHaveTitle("Business Travel Solutions | Vialto Partners")
                await page.evaluate(() => document.fonts.ready); 
                if (poolImage=='windows-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Business_Travel_page.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Business_Travel_page-SF.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Business_Travel_page-FF.png', {fullPage:true})
                    }
                }
                if (poolImage=='ubuntu-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Business_Travel_page-linux.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Business_Travel_page-SF-linux.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Business_Travel_page-FF-linux.png', {fullPage:true})
                    }
                }
            })
            await test.step('Verify user navigated to Remote Work Page and Compare the Page with Expected Remote Work Page', async () => 
            {
                await corp_homePage.selectchildPages('Solutions','Remote Work');
                console.log("We are in Remote Work page Method")
                await expect(page).toHaveTitle("Remote Work | Vialto Partners")
                await page.evaluate(() => document.fonts.ready);
                if (poolImage=='windows-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Remote_Work_Page.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Remote_Work_Page-SF.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Remote_Work_Page-FF.png', {fullPage:true})
                    }
                }
                if (poolImage=='ubuntu-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Remote_Work_Page-linux.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Remote_Work_Page-SF-linux.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Remote_Work_Page-FF-linux.png', {fullPage:true})
                    }
                }
                
            })
            await test.step('Verify user navigated to Compensation and Rewards Page and Compare the Page with Expected Compensation and Rewards Page', async () => 
            { 
                await corp_homePage.selectchildPages('Solutions','Compensation and Rewards');
                console.log("We are in Compensation and Rewards page Method")
                await expect(page).toHaveTitle("Compensation and Rewards | Vialto Partners")
                await page.evaluate(() => document.fonts.ready);
                if (poolImage=='windows-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Compensation and Rewards_Page.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Compensation and Rewards_Page-SF.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Compensation and Rewards_Page-FF.png', {fullPage:true})
                    }
                }
                if (poolImage=='ubuntu-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Compensation and Rewards_Page-linux.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Compensation and Rewards_Page-SF-linux.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Compensation and Rewards_Page-FF-linux.png', {fullPage:true})
                    }
                }
            })
            await test.step('Verify user navigated to Managed Services Page and Compare the Page with Expected Managed Services Page', async () => 
            {
                await corp_homePage.selectchildPages('Solutions','Managed Services');
                console.log("We are in Managed Services page Method")
                await expect(page).toHaveTitle("Managed Services | Vialto Partners")
                await page.evaluate(() => document.fonts.ready);
                if (poolImage=='windows-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Managed Services_Page.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Managed Services_Page-SF.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Managed Services_Page-FF.png', {fullPage:true})
                    }
                }
                if (poolImage=='ubuntu-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Managed Services_Page-linux.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Managed Services_Page-SF-linux.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Managed Services_Page-FF-linux.png', {fullPage:true})
                    }
                }
            })
            await test.step('Verify user navigated to Social Security Page and Compare the Page with Expected Social Security Page', async () => 
            {
                await corp_homePage.selectchildPages('Solutions','Social Security');
                console.log("We are in Social Security page Method")
                await expect(page).toHaveTitle("Social Security Solutions | Vialto Partners")
                await page.evaluate(() => document.fonts.ready);
                if (poolImage=='windows-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Social Security_Page.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Social Security_Page-SF.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Social Security_Page-FF.png', {fullPage:true})
                    }
                }
                if (poolImage=='ubuntu-latest'){
                    if (browserEngine=='chromium'){               
                        await expect(page).toHaveScreenshot('expected_Social Security_Page-linux.png', {fullPage:true}) 
                    }
                    if (browserEngine=='webkit'){
                        await expect(page).toHaveScreenshot('expected_Social Security_Page-SF-linux.png', {fullPage:true})

                    } 
                    if (browserEngine=='firefox'){
                        await expect(page).toHaveScreenshot('expected_Social Security_Page-FF-linux.png', {fullPage:true})
                    }
                }
            })
    })

    test("verify visual Comparision and page content of the technology page @regression @.com",async({})=>
    {
        await test.step('Verify user navigated to Technology Page and Compare the Page with Expected Technology Page', async () => 
        {
        await corp_homePage.clickonpage('Technology');
        await expect(page).toHaveTitle("Global Mobility Technologies | Vialto Partners")
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Technology_Page.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Technology_Page-SF.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Technology_Page-FF.png', {fullPage:true})
            }
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Technology_Page-linux.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Technology_Page-SF-linux.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Technology_Page-FF-linux.png', {fullPage:true})
            }
        }
        })
    })
    test("verify visual Comparision of the SubPages in News and Insights tab @regression @.com",async({})=>
    {
        await test.step('Verify user navigated to Insights Page and Compare the Page with Expected Insights Page', async () => 
    {    
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){
                await page.locator("//span[text()='News and Insights']").hover()
                let get_insights_subpages_count= await page.$$("//span[text()='News and Insights']//parent::a//following-sibling::ul//li//a");
                //for (var individual_page in get_insights_subpages_count)
                for (let i=1;i<=get_insights_subpages_count.length;i++)
                {                   
                    const get_each_subpage_name=await page.locator(("(//span[text()='News and Insights']//parent::a//following-sibling::ul//li//a)" + "[" + `${[i]}`)+"]").textContent()
                    await page.locator("//span[text()='News and Insights']").hover()
                    await page.locator("//span[text()='News and Insights']//parent::a//following-sibling::ul//li//a//span[text()='" + `${get_each_subpage_name}` + "']").click()
                    await page.waitForLoadState('domcontentloaded')                                           
                    await expect(page).toHaveScreenshot('expected_'+`${get_each_subpage_name}`+'_Page.png', {fullPage:true})                  
                }  
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Insights_Page-SF.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                
                await expect(page).toHaveScreenshot('expected_Insights_Page-FF.png', {fullPage:true})
            } 
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){                 
                await expect(page).toHaveScreenshot('expected_Insights_Page-linux.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Insights_Page-SF-linux.png', {fullPage:true})
            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Insights_Page-FF-linux.png', {fullPage:true})
            } 
        }
        })
    })
     
    test("verify visual Comparision of the SubPages in Careers tab @regression @.com",async({})=>
    {
        await test.step('Verify user navigated to Work at Vialto Partners Page and Compare the Page with Expected Work at Vialto Partners Page', async () => 
        {
        await corp_homePage.selectchildPages('Careers','Work at Vialto Partners');
        await expect(page).toHaveTitle("Global Mobility Careers | Vialto Partners")
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Vialto Partners Global Mobility Careers_Page.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Vialto Partners Global Mobility Careers_Page-SF.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Vialto Partners Global Mobility Careers_Page-FF.png', {fullPage:true})
            }
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Vialto Partners Global Mobility Careers_Page-linux.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Vialto Partners Global Mobility Careers_Page-SF-linux.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Vialto Partners Global Mobility Careers_Page-FF-linux.png', {fullPage:true})
            }
        }
        })
        await test.step('Verify user navigated to Early Careers Page and Compare the Page with Expected Early Careers Page', async () => 
        {
        await corp_homePage.selectchildPages('Careers','Early Careers');
        await expect(page).toHaveTitle("Early Careers | Vialto Partners")
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Early Careers_Page.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Early Careers_Page-SF.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Early Careers_Page-FF.png', {fullPage:true})
            }
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Early Careers_Page-linux.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Early Careers_Page-SF-linux.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Early Careers_Page-FF-linux.png', {fullPage:true})
            }
        }
        })
    })

    test("verify visual Comparision of the SubPages in About Us tab @regression @.com",async({})=>
    {
        await test.step('Verify user navigated to Our Company Page and Compare the Page with Expected Our Company Page', async () => 
        {
        await corp_homePage.selectchildPages('About Us','Our Company');
        await expect(page).toHaveTitle("Our Company | Vialto Partners")
        await page.evaluate(() => document.fonts.ready);
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Our Company_Page.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Our Company_Page-SF.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Our Company_Page-FF.png', {fullPage:true})
            }
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Our Company_Page-linux.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Our Company_Page-SF-linux.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Our Company_Page-FF-linux.png', {fullPage:true})
            }
        }
        })
        await test.step('Verify user navigated to Business Alliances Page and Compare the Page with Expected Business Alliances Page', async () => 
        {
        await corp_homePage.selectchildPages('About Us','Business Alliances');
        await expect(page).toHaveTitle("Business Alliances | Vialto Partners")
        await page.evaluate(() => document.fonts.ready);
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Our Business Alliances_Page.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Our Business Alliances_Page-SF.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Our Business Alliances_Page-FF.png', {fullPage:true})
            }
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Our Business Alliances_Page-linux.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Our Business Alliances_Page-SF-linux.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Our Business Alliances_Page-FF-linux.png', {fullPage:true})
            }
        }
        })
        await test.step('Verify user navigated to Diversity, Equity, and Inclusion (DEI) Page and Compare the Page with Expected Diversity, Equity, and Inclusion (DEI) Page', async () => 
        {
        await corp_homePage.selectchildPages('About Us','Diversity, Equity, and Inclusion (DEI)');
        await expect(page).toHaveTitle("DEI | Vialto Partners")
        await page.evaluate(() => document.fonts.ready);
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Diversity, Equity, and Inclusion (DEI)_Page.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Diversity, Equity, and Inclusion (DEI)_Page-SF.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Diversity, Equity, and Inclusion (DEI)_Page-FF.png', {fullPage:true})
            }
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Diversity, Equity, and Inclusion (DEI)_Page-linux.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Diversity, Equity, and Inclusion (DEI)_Page-SF-linux.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Diversity, Equity, and Inclusion (DEI)_Page-FF-linux.png', {fullPage:true})
            }
        }
    })
        await test.step('Verify user navigated to Sustainability Page and Compare the Page with Expected Sustainability Page', async () => 
        {
        await corp_homePage.selectchildPages('About Us','Sustainability');
        await expect(page).toHaveTitle("Sustainability | Vialto Partners")
        await page.evaluate(() => document.fonts.ready);
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Sustainability_page.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Sustainability_page-SF.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Sustainability_page-FF.png', {fullPage:true})
            }
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at Sustainability_page-linux.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at Sustainability_page-SF-linux.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at Sustainability_page-FF-linux.png', {fullPage:true})
            }
        }     
    })

        await test.step('Verify user navigated to FAQs Page and Compare the Page with Expected FAQs Page', async () => 
        {
        await corp_homePage.selectchildPages('About Us','FAQs');
        await expect(page).toHaveTitle("FAQs | Vialto Partners")
        await page.evaluate(() => document.fonts.ready);
        if (poolImage=='windows-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at FAQs_page.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at FAQs_page-SF.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at FAQs_page-FF.png', {fullPage:true})
            }
        }
        if (poolImage=='ubuntu-latest'){
            if (browserEngine=='chromium'){               
                await expect(page).toHaveScreenshot('expected_Work at FAQs_page-linux.png', {fullPage:true}) 
            }
            if (browserEngine=='webkit'){
                await expect(page).toHaveScreenshot('expected_Work at FAQs_page-SF-linux.png', {fullPage:true})

            } 
            if (browserEngine=='firefox'){
                await expect(page).toHaveScreenshot('expected_Work at FAQs_page-FF-linux.png', {fullPage:true})
            }
        }
        })
    })

    test("verify visual Comparision of the footer Pages in Vialto website @regression @.com",async({})=>
    {
        await test.step('Verify user navigated to Ethics help line information Page and Compare the Page with Expected Work at Vialto Partners Page', async () => 
        {
            await corp_homePage.clickonpage('Ethics help line information');
            await expect(page).toHaveTitle("Ethics HelpLine Information | Vialto Partners")
            await page.evaluate(() => document.fonts.ready);
            if (poolImage=='windows-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Ethics HelpLine Information_Page.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Ethics HelpLine Information_Page-SF.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Ethics HelpLine Information_Page-FF.png', {fullPage:true})
                }
            }
            if (poolImage=='ubuntu-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Ethics HelpLine Information_Page-linux.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Ethics HelpLine Information_Page-SF-linux.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Ethics HelpLine Information_Page-FF-linux.png', {fullPage:true})
                }
            }
        })
        await test.step('Verify user navigated to Legal (Privacy statement) Page and Compare the Page with Expected Work at Vialto Partners Page', async () => 
        {
            await corp_homePage.clickonpage('Legal (Privacy statement)');
            await expect(page).toHaveTitle("Legal | Vialto Partners")
            await page.evaluate(() => document.fonts.ready);
            if (poolImage=='windows-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Legal_Page.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Legal_Page-SF.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Legal_Page-FF.png', {fullPage:true})
                }
            }
            if (poolImage=='ubuntu-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Legal_Page-linux.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Legal_Page-SF-linux.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Legal_Page-FF-linux.png', {fullPage:true})
                }
            }
        })
        await test.step('Verify user navigated to Disclosures Page and Compare the Page with Expected Work at Vialto Partners Page', async () => 
        {
            await corp_homePage.clickonpage('Disclosures');
            await expect(page).toHaveTitle("Disclosures | Vialto Partners")
            await page.evaluate(() => document.fonts.ready);
            if (poolImage=='windows-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Disclosures_Page.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Disclosures_Page-SF.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Disclosures_Page-FF.png', {fullPage:true})
                }
            }
            if (poolImage=='ubuntu-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Disclosures_Page-linux.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Disclosures_Page-SF-linux.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Disclosures_Page-FF-linux.png', {fullPage:true})
                }
            }
        })
        await test.step('Verify user navigated to Privacy Page and Compare the Page with Expected Work at Vialto Partners Page', async () => 
        {
            await corp_homePage.clickonpage('Privacy');
            await expect(page).toHaveTitle("Privacy policy | Vialto")
            await page.evaluate(() => document.fonts.ready);
            if (poolImage=='windows-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Privacy_Policy_Page.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Privacy_Policy_Page-SF.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Privacy_Policy_Page-FF.png', {fullPage:true})
                }    
            }
            if (poolImage=='ubuntu-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Privacy_Policy_Page-linux.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Privacy_Policy_Page-SF-linux.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Privacy_Policy_Page-FF-linux.png', {fullPage:true})
                }    
            }
        })
        await test.step('Verify user navigated to Cookie policy Page and Compare the Page with Expected Work at Vialto Partners Page', async () => 
        {
            await corp_homePage.clickonpage('Cookie policy');
            await expect(page).toHaveTitle("Cookies | Vialto Partners")
            await page.evaluate(() => document.fonts.ready);
            if (poolImage=='windows-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Cookies_Page.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Cookies_Page-SF.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Cookies_Page-FF.png', {fullPage:true})
                }
            }
            if (poolImage=='ubuntu-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Cookies_Page-linux.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Cookies_Page-SF-linux.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Cookies_Page-FF-linux.png', {fullPage:true})
                }
            }
        })
        await test.step('Verify user navigated to Terms and conditions Page and Compare the Page with Expected Work at Vialto Partners Page', async () => 
        {
            await corp_homePage.clickonpage('Terms and conditions');
            await expect(page).toHaveTitle("Terms | Vialto Partners")
            await page.evaluate(() => document.fonts.ready);
            if (poolImage=='windows-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Terms_Page.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Terms_Page-SF.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Terms_Page-FF.png', {fullPage:true})
                }
            }
            if (poolImage=='ubuntu-latest'){
                if (browserEngine=='chromium'){               
                    await expect(page).toHaveScreenshot('expected_Terms_Page-linux.png', {fullPage:true}) 
                }
                if (browserEngine=='webkit'){
                    await expect(page).toHaveScreenshot('expected_Terms_Page-SF-linux.png', {fullPage:true})
        
                } 
                if (browserEngine=='firefox'){
                    await expect(page).toHaveScreenshot('expected_Terms_Page-FF-linux.png', {fullPage:true})
                }
            }
        })
    })

    test("validate the contact form in vialto homepage @regression @.com",async({})=>
    {
        await corp_homePage.clickon_contactus_button('Contact Us');
        await corp_homePage.enter_first_name()
        await corp_homePage.enter_last_name()
        await corp_homePage.enter_email()
        await corp_homePage.enter_company()
        await corp_homePage.enter_job_title()
        await corp_homePage.select_located_country()
        await corp_homePage.select_interested_located_country()
        await corp_homePage.select_topic_of_interest()
        await corp_homePage.enter_comments()
        await corp_homePage.select_privacy_statement()
        await corp_homePage.select_email_opt()
        await corp_homePage.click_on_get_in_touch_button('Get in touch');
        expect(await corp_homePage.get_contact_us_successful_message()).toEqual("Got it, thanks for your interest");
    })

    test("validate the cookie settings in vialto homepage @regression @.com",async({})=>
    {   
        expect(await corp_homePage.get_cookie_attribute_value()).toBeTruthy()
        await corp_homePage.clickon_cookiesettings_button();
        await corp_homePage.clickon_cookies_button('Reject All')
        expect(await corp_homePage.get_cookie_attribute_value_inactive()).toBeTruthy()
        await corp_homePage.clickon_cookiesettings_button();
        await corp_homePage.clickon_consent_preferences('Targeting Cookies')
        await corp_homePage.clickon_Button('Confirm My Choices')
        expect(await corp_homePage.get_cookie_attribute_value()).toBeTruthy()
        await corp_homePage.clickon_cookiesettings_button();
        await corp_homePage.clickon_consent_preferences('Functional Cookies')
        await corp_homePage.clickon_Button('Confirm My Choices')
        expect(await corp_homePage.get_cookie_attribute_value()).toBeTruthy()
        await corp_homePage.clickon_cookiesettings_button();
        await corp_homePage.clickon_consent_preferences('Performance Cookies')
        await corp_homePage.clickon_Button('Confirm My Choices')
        expect(await corp_homePage.get_cookie_attribute_value()).toBeTruthy()
        await corp_homePage.clickon_cookiesettings_button();
        await corp_homePage.clickon_consent_preferences('Targeting Cookies')
        await corp_homePage.clickon_Button('Confirm My Choices')
        expect(await corp_homePage.get_cookie_attribute_value_inactive()).toBeTruthy() 
        await corp_homePage.clickon_cookiesettings_button();
        await corp_homePage.clickon_consent_preferences('Functional Cookies')
        await corp_homePage.clickon_Button('Confirm My Choices')
        expect(await corp_homePage.get_cookie_attribute_value_inactive()).toBeTruthy()        
        await corp_homePage.clickon_cookiesettings_button();
        await corp_homePage.clickon_Button('Allow All')
        expect(await corp_homePage.get_cookie_attribute_value()).toBeTruthy()
    })

    test("verify links in Solutions tab @regression @.com",async({})=>
    {
        await test.step('Verify 1navigated to Solutions Page and Compare the Page with Expected Solutions Page', async () => 
        {
        pageurl=await corp_homePage.selectchildPages('Solutions','Solutions Overview');            
        await expect(page).toHaveTitle("Global Mobility Solutions | Vialto Partners")            
        console.log("Solutions Page")
        expect(corp_homePage.verify_technology_link()).toBeTruthy()
        })
    })
})