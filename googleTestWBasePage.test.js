const {By,Capabilities}=require('selenium-webdriver')
const Google=require('../pageObject/extendingGooglePage')
const driver =new Builder().withCapabilities(Capabilities.chrome()).build()
const myPage=new Google(driver,'https://www.google.com/')

test ('Searching Google', async ()=>{

    await myPage,navigate()
    await myPage.doSearch('puuppies')

    expect(results).toContain('puuppies')
    await myPage.driver.quit()
})

