(function () {
    var callApi, handleResponse, buildTableRow, bindDataToColumns, apiUrl;
    $(document).ready(function () {
        callApi();
        
    });
    apiUrl = "api/values";
    callApi = function () {
        //syntax
        $.ajax({
            url:apiUrl,
            method: "GET",
            success: handleResponse,
            error: handleErrorResponse
        });
        
    };
    handleResponse = function (response) {
        console.log(response);
        var gadgets = response;
        $.each(gadgets,function(index,item){
            var row = buildTableRow(item);
            $("#tblGadgets").append(row);
        })
    };
    handleErrorResponse = function (reponse) {
        console.log(response)
    };
    buildTableRow = function (data) {
        var row = $('<tr>');
        var columnForId = $("<td>");
        var columnForModel = $("<td>");
        var columnForPrice = $("<td>");
        $(columnForId).text(data.GadgetId);
        $(columnForModel).text(data.Model);
        $(columnForPrice).text(data.Price);
        $(row).append(columnForId);
        $(row).append(columnForModel);
        $(row).append(columnForPrice);
        return row;
    };
    bindDataToColumns = function () {

    };

})();
