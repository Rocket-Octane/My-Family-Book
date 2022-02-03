var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","father.png", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "grandma.png", "uncle.png", "aunt.png", "cousin_old.png", "cousin_little.png"];
var names = ["My Family Book", "Kaaushik Patel", "Savitri Patel", "Mansi Patel", "Abhi Patel", "Parvati Patel", "Jitendra Patel", "Hina Patel", "Honey Patel", "Vishwa Patel"];
var i = 0;
var number_of_members = 9
function update()
{
    i++;
    var number_of_members = 9
    if(i > number_of_members)
    {
        i = 0;
    }
    var updatedImage = images[i];

    var updatedName = names[i];

    document.getElementById("main_image").src = updatedImage;
    document.getElementById("member_name").innerHTML = updatedName;
}
