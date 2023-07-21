$(document).ready(function()
        {
            $("#input").change(function()
            {
                var input=$(this).val();
                console.log(input);
                $("#list").append('<li>' + input + '</li>');
                $(this).val('');
            }
            );

        }
        );

        $(document).ready(function()
        {
            $("button").click(function()
            {
            
            $("p").hide()
            });
        }
        );

    