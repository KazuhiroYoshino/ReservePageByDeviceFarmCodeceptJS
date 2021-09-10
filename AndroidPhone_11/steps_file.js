// in this file you can append custom step methods to 'I' object

module.exports = function() {
    var connector = require('./connector');
    var weekEnd;
    var firstDay;
    var lastDay;

    let today;
    let dateFrom;
    let dateTo;

  return actor({
        fromDay: function(startDay){
        var selector = "//*[@id=\"datePick\"]";
        var dateFrom;
        	switch (startDay) {
        	case 'Sunday':
                dateFrom = connector.sunday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case "Monday":
                dateFrom = connector.monday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.clearField(selector);
                this.fillField(selector, dateFrom);
                break;
        	case 'Tuesday':
                dateFrom = connector.tuesday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Wednesday':
                dateFrom = connector.wednesday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Thursday':
                dateFrom = connector.thursday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Friday':
                dateFrom = connector.friday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
        	case 'Saturday':
                dateFrom = connector.saturday();
                weekEnd = 0;
                firstDay = connector.dateFromSet();
                this.fillField(selector, dateFrom);
                break;
            default:
        	}
        },

        seeTerm: function(term){
            var termText = term + "泊";
            this.see(termText);
            this.see(firstDay);
            lastDay = connector.termSet(term);
            this.see(lastDay);
        },

        seeHeadCount: function(headcount){
            var headText = headcount + "名様";
            this.see(headText);
        },

        dropDownSelectTerm: function(textString){
            switch (textString) {
            case '1':
                this.executeScript(function(){
                    var selector = 'reserve_term';
                    var textString = 1;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '2':
                this.executeScript(function(){
                    var selector = 'reserve_term';
                    var textString = 2;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '3':
                this.executeScript(function(){
                    var selector = 'reserve_term';
                    var textString = 3;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '4':
                this.executeScript(function(){
                    var selector = 'reserve_term';
                    var textString = 4;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '5':
                this.executeScript(function(){
                    var selector = 'reserve_term';
                    var textString = 5;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '6':
                this.executeScript(function(){
                    var selector = 'reserve_term';
                    var textString = 6;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '7':
                this.executeScript(function(){
                    var selector = 'reserve_term';
                    var textString = 7;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '8':
                this.executeScript(function(){
                    var selector = 'reserve_term';
                    var textString = 8;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '9':
                this.executeScript(function(){
                    var selector = 'reserve_term';
                    var textString = 9;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
            }
        },

        dropDownSelectHeadCount: function(textString){
            switch (textString) {
            case '1':
                this.executeScript(function(){
                    var selector = 'headcount';
                    var textString = 1;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '2':
                this.executeScript(function(){
                    var selector = 'headcount';
                    var textString = 2;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '3':
                this.executeScript(function(){
                    var selector = 'headcount';
                    var textString = 3;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '4':
                this.executeScript(function(){
                    var selector = 'headcount';
                    var textString = 4;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '5':
                this.executeScript(function(){
                    var selector = 'headcount';
                    var textString = 5;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '6':
                this.executeScript(function(){
                    var selector = 'headcount';
                    var textString = 6;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '7':
                this.executeScript(function(){
                    var selector = 'headcount';
                    var textString = 7;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '8':
                this.executeScript(function(){
                    var selector = 'headcount';
                    var textString = 8;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
                break;
            case '9':
                this.executeScript(function(){
                    var selector = 'headcount';
                    var textString = 9;
                    var options = document.getElementById(selector).options;
                    for(var i = 0; i < options.length; i++){
                	    if(options[i].text == textString){
                		    options[i].selected = true;
                		    break;
                	    };
                    };
                });
            }
        },

        getTerm: function(){
            let termString = null;
            termString = this.executeScript(function(){
                var selector = 'reserve_term';
                var termText = document.getElementById(selector).value;
                return termText;
            });
            return termString;
        },

        getHeadCount: function(){
            let hcString = null;
            hcString = this.executeScript(function(){
                var selector = 'headcount';
                var hcText = document.getElementById(selector).value;
                return hcText;
            });
            return hcString;
        },

        clickNavButton: function(){
            this.executeScript(function(){
                var nav = document.querySelector('body > div.navbar.navbar-fixed-top > div > div > a.btn.btn-navbar');
                nav.click();
            });
        },

        clickMenu: function(menu){
            switch (menu){
                case 'Home':
                    this.click(locate('a').withAttr({href: 'index.html'}));
                    break;
                case 'Plan':
                    this.click(locate('a').withAttr({href: 'index.html'}));
                    break;
                case 'Access':
                    this.click(locate('a').withAttr({href: 'index.html'}));
                    break;
                case 'About':
                    this.click(locate('a').withAttr({href: 'index.html'}));
                    break;
                default:
            }
        }
  });
}
