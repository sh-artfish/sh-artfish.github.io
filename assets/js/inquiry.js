window.onload=function() {

    $('#inquiry-form').submit(function(event) {
        // cancel submit
        event.preventDefault();

        var $form = $(this);
        var $message = $('#inquiry-message');
        var $button = $form.find('input[type=submit]');

        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: JSON.stringify($form.serializeArray()),
            timeout: 10000,
            dataType: 'json',

            beforeSend: function(xhr, settings) {
                // block twice clicking
                $button.attr('disabled', true);
                $message.text('');
            },

            success: function(data) {
                $form[0].reset();
                $message.removeClass().addClass('alert alert-success').text('送信完了しました。確認後折り返しご連絡します。しばらくお待ちください。');
            },
            error: function(xhr) {
                console.log(xhr.responseText);
                $message.removeClass().addClass('alert alert-danger').text('エラーが発生しました。電話よりお問合せください。');
            }
        });

    });

};