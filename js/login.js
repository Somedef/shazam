let = $('#id');
        let = $('#pw');
        let = $('#btn');

        $(btn).on('click', function () {
            if ($(id).val() == "") {
                $(id).next('label').addClass('warning');
                setTimeout(function () {
                    $('label').removeClass('warning');
                }, 1500);
            }
            else if ($(pw).val() == "") {
                $(pw).next('label').addClass('warning');
                setTimeout(function () {
                    $('label').removeClass('warning');
                }, 1500);
            }
        });
        // 로그인폼

        $("#xmark").click(function () {
            $(".label").fadeOut(200);
        });
        // 쿠키

        $(document).on('click', 'a[href="#"]', function (e) {
            e.preventDefault();
        });
        // 탑이동방지

        $(window).on('load', function () {
            setTimeout(function () {
                $("#waiting").fadeOut();
            }, 500);
        });
        // 로딩

        $(window).on('load',function(){
            $(".modal").fadeIn();
        })

        $(".modal").click(function(){
            $(".modal").fadeOut(300);
        })

        $("#close").click(function(){
            $(".layer").fadeOut(300);
        })
        // 접속시