$('#c_messages_gridMessages_bodytable > tbody  > tr').each(function() { 
    if($("> td > span.link", this).text() == "Kurzus órarendi változás"){
        $(this).find("td > input[type=checkbox]").first().click();
    }

});
