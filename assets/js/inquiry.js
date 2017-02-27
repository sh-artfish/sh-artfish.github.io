window.onload=function() {

    new Vue({
        el: '#inquiry-form',
        data: {
            submitHtml: '<input type="submit" value="送信">',
            msgClass: false,
            msgText: ''
        },
        methods: {
            inquiry: function() {
                _ = this;
    
                $.ajax({
                    url: 'https://iav2l33uoj.execute-api.ap-northeast-1.amazonaws.com/release/sendmail',
                    type: 'post',
                    data: JSON.stringify($(_.$el).serializeArray()),
                    timeout: 10000,
                    dataType: 'json',
        
                    beforeSend: function(xhr, settings) {
                        _.submitHtml = '送信中';
                    },
        
                    complete: function(xhr, settings) {
                        _.submitHtml = '';
                    },
    
                    success: function(data) {
                        $(_.$el)[0].reset();
                        _.msgClass = 'alert alert-success';
                        _.msgText = '送信完了しました。確認後折り返しご連絡します。しばらくお待ちください。';
                    },  
                    error: function(xhr) {
                        console.log(xhr.responseText);  
                        _.msgClass = 'alert alert-danger';
                        _.msgText = 'エラーが発生しました。電話よりお問合せください。';
                    }
                });
            }
        }
    });

    var regex = RegExp("[?&]category=([^&]+)", 'i');
    var matched;
    if (matched = window.location.search.match(regex)) {
        category = decodeURIComponent(matched[1]).replace(/(　| )+/g, ' ');
        console.log(category)
        $('select[name="category"]').append('<option value="' + category + '" selected>' + category + '</option>');
    }
};