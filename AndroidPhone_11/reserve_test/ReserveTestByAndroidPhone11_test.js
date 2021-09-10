let reserveTestTable = new DataTable(['宿泊初日', '連泊数', '宿泊人数', '朝食', '昼からチェックインプラン', 'お得な観光プラン', '氏名', '合計料金', '向き']);
reserveTestTable.add(['Friday','3','1','off','on','on','直江愛子','26500','縦向き']);
reserveTestTable.add(['Monday','2','8','on','on','off','武田信子','136000','縦向き']);
reserveTestTable.add(['Saturday','1','2','on','on','on','柿崎家時','23500','縦向き']);
reserveTestTable.add(['Saturday','5','9','off','on','off','武田晴信','355500','縦向き']);
reserveTestTable.add(['Sunday','5','1','off','on','on','真田昌虎','38750','縦向き']);
reserveTestTable.add(['Sunday','9','2','on','on','on','山本寛太','158500','縦向き']);
reserveTestTable.add(['Thursday','1','2','off','off','off','上杉景虎','14000','縦向き']);
reserveTestTable.add(['Thursday','3','9','on','off','off','直江愛子','231750','縦向き']);
reserveTestTable.add(['Tuesday','9','9','on','on','on','武田信子','697500','縦向き']);
reserveTestTable.add(['Wednesday','1','2','on','off','off','柿崎家時','16000','縦向き']);

Feature('宿泊予約機能_By_AndroidPhone_v11');

Data(reserveTestTable).Scenario('Reserve Tests', async({I , current}) => {
    I.amOnPage('http://example.selenium.jp/reserveApp_Renewal/');
    let title = await I.grabTitle();
    if(current.向き == '縦向き'){
        I.setOrientation('PORTRAIT');
    }
    if(current.向き == '横向き'){
        I.setOrientation('LANDSCAPE');
    }

    I.fromDay(current.宿泊初日);
    I.click('//*[@id=\"guestname\"]');
//    I.selectOption('reserve_t', current.連泊数);
    I.dropDownSelectTerm(current.連泊数);
//    I.selectOption('hc', current.宿泊人数);
    I.dropDownSelectHeadCount(current.宿泊人数);
    if(current.朝食 == 'on'){
        I.checkOption('//*[@id=\"breakfast_on\"]');
    }else{
        I.checkOption('//*[@id=\"breakfast_off\"]');
    }
    if(current.昼からチェックインプラン == 'on'){
        I.checkOption('//*[@id=\"plan_a\"]');
    }
    if(current.お得な観光プラン == 'on') {
        I.checkOption('//*[@id=\"plan_b\"]');
    }
    I.fillField('//*[@id=\"guestname\"]', current.氏名);

//    let term = await I.grabValueFrom('select[name="reserve_t"]');
    let term = await I.getTerm();
//    let headcount = await I.grabValueFrom('select[name="hc"]');
    let headcount = await I.getHeadCount();

//    I.click('利用規約に同意して次へ');
    I.click('//*[@id=\"agree_and_goto_next\"]');

    I.see(current.合計料金);
    I.seeTerm(term);
    I.seeHeadCount(headcount);
    if(current.朝食 == 'on'){
        I.see('朝食: あり');
    }else{
        I.see('朝食: なし');
    }
    if(current.昼からチェックインプラン == 'on'){
        I.see('昼からチェックインプラン');
    }
    if(current.お得な観光プラン == 'on') {
        I.see('お得な観光プラン');
    }
    I.see(current.氏名);
//    I.click('確定');
    I.click('//*[@id=\"commit\"]');

    I.see('ご来館、心よりお待ちしております。');
    if(current.向き == '縦向き'){
//        I.click('body > div.navbar.navbar-fixed-top > div > div > a.btn.btn-navbar');
        I.clickNavButton();
    }
//    I.click('Home');
    I.clickMenu('Home');

});
