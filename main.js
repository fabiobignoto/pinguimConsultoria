$(document).ready(function(e){

    $(`#tel`).mask(`(00) 00000-0000`, {
        placeholder: `(00) 12345-6789`
    });

    $(`.card-button`).click(function(){
        const destino = $(`#contact`);
        let subject = "Solicitação de orçamento de "
        subject += $(this).parent().parent().find('.card-header').text();
        $(`#assunto`).val(subject)
        
        $(`html`).animate({
            scrollTop: destino.offset().top
        }, 1000)
    })



    $(`form`).validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            tel: {
                required: false,
            },
            mensagem: {
                required: true,
            },
            assunto: {
                required: true
            }
        },
        messages: {
            email: 'Por favor, insira um e-mail válido',
            nome: 'Insira seu nome.',
            mensagem: 'Por favor, insira sua mensagem',
            assunto: 'Por favor, insira o motivo da sua mensagem.',

        },

        submitHandler: function(form){
            preencheModal();
            $(`#modal-confirm`).modal('toggle');
        },

        invalidHandler: function(evento, validador){
            if(validador.numberOfInvalids()){
                alert(`Existem campos inválidos no formulário. Por favor, verifique.`);
            }
        }
    })

    $(`#submit-form`).on("click", function(){
        $(`#modal-message`).modal('toggle');
        limpaFormulario();
    })
    

    function limpaFormulario(){
        $(`#nome`).val("")
        $(`#email`).val("")
        $(`#assunto`).val("")
        $(`#tel`).val("")
        $(`#mensagem`).val("")

    }

    function preencheModal(){


        $(`#confirm-name`).html($(`#nome`).val())
        $(`#confirm-email`).html($(`#email`).val())
        $(`#confirm-tel`).html($(`#tel`).val())
        $(`#confirm-subject`).html($(`#assunto`).val())
        $(`#confirm-message`).html($(`#mensagem`).val())

    }
})