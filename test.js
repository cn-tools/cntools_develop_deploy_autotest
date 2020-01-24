function Init_TestFunctionByObserver(){
    var SelectizeOptions = {
        delimiter: '#asgdasasdf#',
        plugins: ['remove_button'],
        persist: false,
        createOnBlur: true,
        create: true,
    };

    $('#button').on('click', function(){
        try {
			alert('this is a test only');
        } catch(e) {
            alert(e);
            return;
        }
        $('.InputSelectize').selectize(SelectizeOptions);
    });

    $(document).on("click",'#table_container .remove_row', function(){
        // remove the actual row
        var row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    });

    $('#button').trigger('click');
};

$(document).ready(function(){
    var targetObj        	= $("#content")[0];
    var MutationObserver 	= window.MutationObserver || window.WebKitMutationObserver;
    var Observer         	= new MutationObserver(MutationHandler);
    var obsConfig           = {childList: true, characterData: true, attributes: true, subtree: true};

    if (targetObj){
        CntObserver.observe(targetObj, obsConfig);
    }

    function MutationHandler(mutationRecords) {
        mutationRecords.forEach(function (mutation){
            console.log('mutation', mutation);
            if ($('#button')){
                console.log('#button');
				Init_TestFunctionByObserver();
            }
        });
    };
});
