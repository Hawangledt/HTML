document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.addEventListener('click', function() {
        changeBackgroundColor('vermelho');
    });

    button2.addEventListener('click', function() {
        changeBackgroundColor('azul');
    });

    button3.addEventListener('click', function() {
        changeBackgroundColor('verde');
    });

    function changeBackgroundColor(color) {
        switch (color) {
            case 'vermelho':
                document.body.style.backgroundColor = 'red'
                break;

            case 'azul':
                document.body.style.backgroundColor = 'blue'
                break;

            case 'verde':
                document.body.style.backgroundColor = 'green'
                break;
        
            default:
                break;
        }
    }
});
