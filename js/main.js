
$('#cheched').on('change', function () {
    if ( $('#cheched').prop('checked') ) {
        $('.button-reg').attr('disabled', false);
       
    } else {
        $('.button-reg').attr('disabled', true);
    }
});

if ( $('#cheched').prop('checked') ) {
    $(".button-reg").bind("click", function() {
        $("input[type=text], textarea").val("");
        $("input[type=email], textarea").val("");
        $("input[type=tel], textarea").val("");
        
    });
}