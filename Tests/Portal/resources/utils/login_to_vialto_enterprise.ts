import { Page } from "@playwright/test";
import { Corp_Site_HomePage } from "../../src/EnterpriseApp/pages/Corp_Site_HomePage";
// import { Austria_HomePage } from "../../src/EnterpriseApp/pages/LoginandBasePage/Austria_HomePage";
// import { Global_Mobility_Site_HomePage } from "../../src/EnterpriseApp/pages/LoginandBasePage/Global_Mobility_Site_HomePage";
// import { Regional_Landers_China_HomePage } from "../../src/EnterpriseApp/pages/LoginandBasePage/Regional_Landers_China_HomePage";
// import { Regional_Landers_Singapore_HomePage } from "../../src/EnterpriseApp/pages/LoginandBasePage/Regional_Landers_Singapore_HomePage";
// import { France_HomePage } from "../../src/EnterpriseApp/pages/LoginandBasePage/France_HomePage";

export const loginToVialtoEnterprise= async (page: Page) => {
    const vialtoPage = new Corp_Site_HomePage(page);
    await vialtoPage.navigatetoURL()    
}

// export const loginToVialtoAustria= async (page: Page) => {
//     const austria_vialtoPage = new Austria_HomePage(page);
//     await austria_vialtoPage.navigatetoURL()
//     await austria_vialtoPage.clickAcceptAllCookies()
// }

// export const loginToVialtoAmazon= async (page: Page) => {
//     const amazon_vialtoPage = new Global_Mobility_Site_HomePage(page);
//     await amazon_vialtoPage.navigatetoURL()
//     await amazon_vialtoPage.clickAcceptAllCookies()
// }

// export const loginToVialtoChina= async (page: Page) => {
//     const china_vialtoPage = new Regional_Landers_China_HomePage(page);
//     await china_vialtoPage.navigatetoURL()
//     await china_vialtoPage.clickAcceptAllCookies()
// }

// export const loginToVialtoSingapore= async (page: Page) => {
//     const singapore_vialtoPage = new Regional_Landers_Singapore_HomePage(page);
//     await singapore_vialtoPage.navigatetoURL()
//     await singapore_vialtoPage.clickAcceptAllCookies()
// }

// export const loginToVialtoFrance= async (page: Page) => {
//     const france_vialtoPage = new France_HomePage(page);
//     await france_vialtoPage.navigatetoURL()
//     await france_vialtoPage.clickAcceptAllCookies()
// }
