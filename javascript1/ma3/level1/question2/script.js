//Console.log out elements in JSON file
const data = {
    "video": [{
        "id": 12312412312,
        "name": "Ecuaciones Diferenciales",
        "url": "/video/math/edo/12312412312",
        "author": {
            "data": [{
                "name_author": "Alejandro Morales",
                "url": "/author/alejandro-morales",
                "type": "master"
            }]
        }
    }]
};

for(let i = 0; i < data.video.length; i++) {
    for(let key in data.video[i]) {
        if(key === "author") {
            for(let j = 0; j < data.video[i].author.data.length; j++) {
                for(let elm in data.video[i].author.data[j]) {
                    console.log(elm+":", data.video[i].author.data[j][elm]);
                }
            }
        } else {
            console.log(key+":", data.video[i][key]);
        }
    }
}
