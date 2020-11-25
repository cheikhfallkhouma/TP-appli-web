window.onload = function () {
  document.querySelector("#name").addEventListener("keyup", function (event) {
    document.getElementById("nameCounter").textContent = `${event.target.value.length} car.`;
   });

 document.querySelector("#firstname").addEventListener("keyup", function (event) {
  document.getElementById("nameCounteer").textContent = `${event.target.value.length} car.`;});
  

  document.querySelector("#gps").addEventListener("click", function (event) {
    event.preventDefault();
    getLocation();
  });

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    contactStore.add(
      document.querySelector("#name").value,
      document.querySelector("#firstname").value,
      document.querySelector("#birth").value,
      document.querySelector("#adresse").value,
      document.querySelector("#mail").value
    );

    const contactList = contactStore.getList();

    

    for (var contact of contactList) {
      document.querySelector("table tbody").innerHTML  += `
        <tr>
            <td> ${contact.name}</td>
            <td> ${contact.firstname}</td>
            <td> ${contact.date}</td>
            <td> <a href="https://maps.google.com/?q=${contact.adress}">${contact.adress}</a></td>
            <td> <a href="mailto:${contact.mail}">${contact.mail}</a></td>
        <tr>`;
    }
  });
 };
