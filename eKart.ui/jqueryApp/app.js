(
function () {
    'use strict';
    var callApi,
        handleResponse,
        handleErrorResponse,
        buildTableRow,
        buildTableColumns,
        buildEditButton,
        handleEdit;

    callApi = function () {
        var apiUrl = "api/values",
            methodType = "GET";
        $.ajax({
            url: apiUrl,
            method: methodType,
            data: "application/json"
        }).then(handleResponse)
          
    };
    handleResponse = function (response,secondParam,thirdParam) {
        buildTableRow(response);
    };
    handleErrorResponse = function (errorResponse) {
        console.log("error");
    };
    buildTableRow = function (data) {
        var table = $('#tblGadgets');
        $.each(data, function (index, item) {
            var row = buildTableColumns(item);
            $(table).append(row);
        });

    };
    buildTableColumns = function (item) {
        var row = $("<tr>"),
            firstCloumn = $('<td>'),
            secondCloumn = $('<td>'),
            thirdColumn = $('<td>'),
            columnForButton = $("<td>");
        firstCloumn.text(item.GadgetId);
        secondCloumn.text(item.Model);
        thirdColumn.text(item.Price);
        //get the button 
        var getButton = buildEditButton(item.GadgetId);
        //append the button the fourth Column;
        $(columnForButton).append(getButton);
        $(row).append(firstCloumn)
              .append(secondCloumn)
              .append(thirdColumn)
              .append(columnForButton);
        return row;
        };
    
    buildEditButton = function (gadgetId) {
        var button = $('<button>');
        $(button).addClass("btn btn-primary")
                 .text("Edit")
                 .attr('id', "btn" + gadgetId);
        $(button).bind("click", handleEdit);
        return button;
    };

    handleEdit = function () {
        console.log(this);
    };
    callApi();

} )();