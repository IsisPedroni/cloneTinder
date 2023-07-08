function dislike() {
    let img = document.getElementById('photo');
    let nome = document.getElementById('nome');
    let bio = document.getElementById('bio');

    let images = [
        'url(../img/1.jpg) center center/cover',
        'url(../img/3.jpg) center center/cover',
        'url(../img/4.jpg) center center/cover',
        'url(../img/5.jpg) center center/cover',
        'url(../img/6.jpg) center center/cover',
        'url(../img/7.jpg) center center/cover',
        'url(../img/8.jpg) center center/cover',
        'url(../img/9.jpg) center center/cover',
        'url(../img/10.jpg) center center/cover'
    ];

    img.style.background = images[Math.floor(Math.random() * images.length)];

    nome.innerText = 'Lorem ipsum,';
    bio.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quidem ipsum molestiae asperiores tempore ipsa maiores, possimus minus deserunt. Sint!';
}

let cliques = 0;

function like() {
    cliques++

    if (cliques === 1) {
        alert('Você deu MATCH');
    }
    dislike();
}

let numCliques = 0;

function star() {
    numCliques++;

    if (numCliques === 2) {
        document.getElementById('superLike').disabled = true;
    } else if (numCliques < 2) {
        dislike();
    } else{
        alert('Acabou seu super Like! Aperte outro botão!');
    }

}
