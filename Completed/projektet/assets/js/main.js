$(document).ready(function () {
    $("select").on('change', function () {
        $(this).find("option:selected").each(function () {
            var geeks = $(this).attr("value");
            if (geeks) {
                $(".option_select").not("." + geeks).hide();
                $("." + geeks).show();
            } else {
                $(".option_select").hide();
            }

        });
    }).change();
});