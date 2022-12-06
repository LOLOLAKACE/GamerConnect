var content = [
    {
        "Nombre": "Mortal Kombat 11",
        "precio": "$1400",
        "stock": "12",
        "descripcion": "Pelea con tus personajes favoritos y obten la victoria.",
        "imagen": "http://drive.google.com/uc?export=view&id=1pg_rddEzzjmW6nkj2qHVIvVmiAnZGA-0",
        "genero": "Pelea"

    },

    {
        "Nombre": "Minecraft",
        "precio": "$700",
        "stock": "23",
        "descripcion": "Disfruta la vida en un mundo cuadrado, juega con tus amigos haciendo construcciones.",
        "imagen": "http://drive.google.com/uc?export=view&id=1VFhydqsDFcZ8c-p1MV6zET30hawyuyJm",
        "genero": "Aventura"
    },

    {
        "Nombre": "TLoZ: Breath of the Wild",
        "precio": "$1600",
        "stock": "14",
        "descripcion": "Defiende el mundo de Hyrule y rescata a la princesa Zelda",
        "imagen": "http://drive.google.com/uc?export=view&id=1XJNNjBaxZkGMujcB7-zHwnPpPxtPnOex",
        "genero": "Aventura"
    },

    {
        "Nombre": "Super Smash Brothers Ultimate",
        "precio": "$1600",
        "stock": "21",
        "descripcion": "Pelea con tus personajes favoritos de Nintendo y obten la victoria contra tus amigos.",
        "imagen": "http://drive.google.com/uc?export=view&id=1r8BJ78YZ4O0v3j_Ti33MOwXCyDRWu7CR",
        "genero": "Pelea"
    },

    {
        "Nombre": "Sekiro Shadows Die Twice",
        "precio": "$1200",
        "stock": "11",
        "descripcion": "Como un buen maestro de la espada, elimina a todos tus enemigos.",
        "imagen": "http://drive.google.com/uc?export=view&id=1XF1Y0o5RdjnXJr0ja79ggaQlT5pLjO67",
        "genero": "Aventura"
    },

    {
        "Nombre": "Resident Evil 4",
        "precio": "$700",
        "stock": "6",
        "descripcion": "Adentrate en el mundo de los zombies, trata de sobrevivir sin ser infectado.",
        "imagen": "http://drive.google.com/uc?export=view&id=1HDGvMVjD2TRbT176g9G3uD7hQa1x9myr",
        "genero": "Horror"
    },

    {
        "Nombre": "Spider-Man",
        "precio": "$1200",
        "stock": "6",
        "descripcion": "Jega como tu heroe favorito y buen vecino, Spider-man, salvando a todo el mundo.",
        "imagen": "http://drive.google.com/uc?export=view&id=13uvwCDmQXrhSAngfctAyOeY_JBvmfUhL",
        "genero": "Accion"
    },

    {
        "Nombre": "GTA V",
        "precio": "$547",
        "stock": "10",
        "descripcion": "En la ciudad de los Angeles, encarna a tres iconicos personajes y cumple cualquier mision.",
        "imagen": "http://drive.google.com/uc?export=view&id=1mYSUgLIHvfaoFnPBipzYsjyBzDvBK9WT",
        "genero": "Accion"
    },

    {
        "Nombre": "Super Mario Odyssey",
        "precio": "$1400",
        "stock": "15",
        "descripcion": "Una nueva aventura de Mario, en donde nuevamente tendras que salvar a la princesa.",
        "imagen": "http://drive.google.com/uc?export=view&id=1wWK9NWS2y54Bzs6Fvddd4b0tUDMYLtkh",
        "genero": "Aventura"
    },

    {
        "Nombre": "Killer Instinc",
        "precio": "$550",
        "stock": "13",
        "descripcion": "El mejor juego de peleas de toda la historia. Juega contra tus amigos en un combate a muerte",
        "imagen": "http://drive.google.com/uc?export=view&id=1X_v-XKuZgsVepw6-Beaxme-UdtuwxFz-",
        "genero": "Pelea"
    },
    {
        'email': 'admin@gmail.com',
        'password': '12345678'

    }


];



const element = document.getElementById('one')
console.log(element)

try {
    document.getElementById('one').innerText = content[0].Nombre
    document.getElementById('oned').innerText = content[0].descripcion
    document.getElementById('onep').innerText = content[0].precio
    document.getElementById('ones').innerText = content[0].stock
    document.getElementById('onei').setAttribute('src', content[0].imagen)
    document.getElementById('oneg').innerText = content[0].genero


} catch (error) {

}
try {
    document.getElementById('two').innerText = content[1].Nombre
    document.getElementById('twod').innerText = content[1].descripcion
    document.getElementById('twop').innerText = content[1].precio
    document.getElementById('twos').innerText = content[1].stock
    document.getElementById('twoi').setAttribute('src', content[1].imagen)
    document.getElementById('twog').innerText = content[1].genero

} catch (error) {

}
try {
    document.getElementById('z').innerText = content[2].Nombre
    document.getElementById('zd').innerText = content[2].descripcion
    document.getElementById('zp').innerText = content[2].precio
    document.getElementById('zs').innerText = content[2].stock
    document.getElementById('zi').setAttribute('src', content[2].imagen)
    document.getElementById('zg').innerText = content[2].genero

} catch (error) {

}



try {
    document.getElementById('s').innerText = content[3].Nombre
    document.getElementById('sd').innerText = content[3].descripcion
    document.getElementById('sp').innerText = content[3].precio
    document.getElementById('ss').innerText = content[3].stock
    document.getElementById('si').setAttribute('src', content[3].imagen)
    document.getElementById('sg').innerText = content[3].genero


} catch (error) {

}

try {
    document.getElementById('tw').innerText = content[4].Nombre
    document.getElementById('twd').innerText = content[4].descripcion
    document.getElementById('twp').innerText = content[4].precio
    document.getElementById('tws').innerText = content[4].stock
    document.getElementById('twi').setAttribute('src', content[4].imagen)
    document.getElementById('twg').innerText = content[4].genero
} catch (error) {

}

try {
    document.getElementById('r').innerText = content[5].Nombre
    document.getElementById('rd').innerText = content[5].descripcion
    document.getElementById('rp').innerText = content[5].precio
    document.getElementById('rs').innerText = content[5].stock
    document.getElementById('ri').setAttribute('src', content[5].imagen)
    document.getElementById('rg').innerText = content[5].genero
} catch (error) {

}




try {
    document.getElementById('spr').innerText = content[6].Nombre
    document.getElementById('spd').innerText = content[6].descripcion
    document.getElementById('spp').innerText = content[6].precio
    document.getElementById('sps').innerText = content[6].stock
    document.getElementById('spi').setAttribute('src', content[6].imagen)
    document.getElementById('spg').innerText = content[6].genero
} catch (error) {

}

try {
    document.getElementById('gta').innerText = content[7].Nombre
    document.getElementById('gtad').innerText = content[7].descripcion
    document.getElementById('gtap').innerText = content[7].precio
    document.getElementById('gtas').innerText = content[7].stock
    document.getElementById('gtai').setAttribute('src', content[7].imagen)
    document.getElementById('gtag').innerText = content[7].genero

} catch (error) {

}


try {
    document.getElementById('sm').innerText = content[8].Nombre
    document.getElementById('smd').innerText = content[8].descripcion
    document.getElementById('smp').innerText = content[8].precio
    document.getElementById('sms').innerText = content[8].stock
    document.getElementById('smi').setAttribute('src', content[8].imagen)
    document.getElementById('smg').innerText = content[8].genero

} catch (error) {

}


try {
    document.getElementById('k').innerText = content[9].Nombre
    document.getElementById('kd').innerText = content[9].descripcion
    document.getElementById('kp').innerText = content[9].precio
    document.getElementById('ks').innerText = content[9].stock
    document.getElementById('ki').setAttribute('src', content[9].imagen)
    document.getElementById('kg').innerText = content[9].genero
} catch (error) {

}







function login() {



    if (content[10].email == document.getElementById('exampleInputEmail1').value && content[10].password == document.getElementById('exampleInputPassword1').value) {
        console.log(true)
        location.href = "Admin.html";


    } else {
        console.log(false)
        location.href = "Main.html";
        return false
    }


}


try {
    document.getElementById('l1i').setAttribute('src', content[5].imagen)
    document.getElementById('l1').innerText = content[5].Nombre

    document.getElementById('l1p').innerText = content[5].precio
    document.getElementById('l1s').innerText = content[5].stock

    document.getElementById('l1g').innerText = content[5].genero
    document.getElementById('l1d').innerText = content[5].descripcion

} catch (error) {

}

try {
    document.getElementById('l2i').setAttribute('src', content[9].imagen)
    document.getElementById('l2').innerText = content[9].Nombre

    document.getElementById('l2p').innerText = content[9].precio
    document.getElementById('l2s').innerText = content[9].stock

    document.getElementById('l2g').innerText = content[9].genero
    document.getElementById('l2d').innerText = content[9].descripcion

} catch (error) {

}
try {
    document.getElementById('l3i').setAttribute('src', content[2].imagen)
    document.getElementById('l3').innerText = content[2].Nombre

    document.getElementById('l3p').innerText = content[2].precio
    document.getElementById('l3s').innerText = content[2].stock

    document.getElementById('l3g').innerText = content[2].genero
    document.getElementById('l3d').innerText = content[2].descripcion

} catch (error) {

}


try {
    function borrar(){
        document.getElementById('l1h').setAttribute('hidden', 'true')
    }
} catch (error) {
    
}


try {
    function borrar2(){
        document.getElementById('l2h').setAttribute('hidden', 'true')
    }
} catch (error) {
    
}

try {
    function borrar3(){
        document.getElementById('l3h').setAttribute('hidden', 'true')
    }
} catch (error) {
    
}

try {
    function card(){
        document.getElementById('l1h').setAttribute('hidden', 'true')
    
    }
} catch (error) {
    
}


try {
    function card2(){
        document.getElementById('l2h').setAttribute('hidden', 'true')
      
    }
} catch (error) {
    
}

try {
    function card3(){
        document.getElementById('l3h').setAttribute('hidden', 'true')
        
    }
} catch (error) {
    
}

try {
    function cart1(){
        document.getElementById('card1').setAttribute('hidden', 'true')
    
    }
} catch (error) {
    
}


try {
    function cart2(){
        document.getElementById('card2').setAttribute('hidden', 'true')
      
    }
} catch (error) {
    
}

try {
    function cart3(){
        document.getElementById('card3').setAttribute('hidden', 'true')
        
    }
} catch (error) {
    
}

try {
    function search(){
        
        console.log('hola')
        for(let i; i<=9; i++){
           if(content[i].Nombre == document.getElementById('search').value){
                location.href='Mario.html'
           } 
        }


    }
    
} catch (error) {
    console.log('mal')
}

