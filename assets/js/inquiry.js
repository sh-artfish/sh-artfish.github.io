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
                let elements = _.$el.elements;
                let data = {
                    "name": elements["name"].value,
                    "email": elements["email"].value,
                    "tel": elements["tel"].value,
                    "category": elements["category"].value,
                    "content": elements["content"].value
                };
    
                $.ajax({
                    url: "https://prod-20.japaneast.logic.azure.com:443/workflows/7940cb1cf6d94b28b48d3d360e521514/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=QPQ0EylyXbvSMpXEek70gAlrTNiFM3GibQpiTrQ4GNk",
                    type: 'post',
                    contentType: "application/json",
                    data: JSON.stringify(data),
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