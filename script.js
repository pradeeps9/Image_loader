document.addEventListener("DOMContentLoaded", function () {
  const imagesData = [
    { image: "user.png", name: "first", designation: "doctor" },
    { image: "user2.png", name: "second", designation: "doctor" },
    { image: "user3.png", name: "third", designation: "doctor" },
    { image: "user4.png", name: "fourth", designation: "doctor" },
    { image: "user.png", name: "fifth", designation: "doctor" },
    { image: "user.png", name: "sixth", designation: "doctor" },
    { image: "user2.png", name: "seventh", designation: "doctor" },
    { image: "user3.png", name: "eighth", designation: "doctor" },
    { image: "user4.png", name: "ninth", designation: "doctor" },
    { image: "user.png", name: "tenth", designation: "doctor" },
    { image: "user.png", name: "eleventh", designation: "doctor" },
    { image: "user2.png", name: "twelfth", designation: "doctor" },
    { image: "user3.png", name: "thirteenth", designation: "doctor" },
    { image: "user4.png", name: "forteenth", designation: "doctor" },
    { image: "user.png", name: "fifteenth", designation: "doctor" },
    { image: "user.png", name: "sixteenth", designation: "doctor" },
    { image: "user2.png", name: "seventeenth", designation: "doctor" },
    { image: "user3.png", name: "eifhteenth", designation: "doctor" },
    { image: "user4.png", name: "ninteenth", designation: "doctor" },
    { image: "user.png", name: "twentieth", designation: "doctor" },
    { image: "user.png", name: "twenty first", designation: "doctor" },
    { image: "user2.png", name: "twenty second", designation: "doctor" },
    { image: "user3.png", name: "twenty third", designation: "doctor" },
    { image: "user4.png", name: "twenty fourth", designation: "doctor" },
    { image: "user.png", name: "twenty fifth", designation: "doctor" },

    // { image: "image-url-25.jpg" },
  ];

  const container = document.getElementById("imageContainer");

  imagesData.forEach(function (data) {
    const img = new Image();
    img.src = data.image;
    img.alt = "Image";
    img.className = "image";

    const div = document.createElement("div");
    div.className = "image-item";
    div.appendChild(img);

    const para = document.createElement("div");
    div.className = "user-name";
    para.innerHTML = `<p>${data.name}</p> <p>${data.designation}</p>`;

    div.appendChild(para);

    container.appendChild(div);
  });
});
