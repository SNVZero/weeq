$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if((response.status == "success")&&(checkbox.classList.contains('checked'))){
                    alert("Ваша заявка оформлена");
                }else if(!checkbox.classList.contains('checked')){
                    alert('Вы не подтвердили согласине на обработку, подтвердите и попробуйте попытку позже')
                }
                else {
                    alert("Произошла ошибка при отправке формы, повторите попытку позже " + response.message);
                }
            }
        });
    });
});