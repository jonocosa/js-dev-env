import './index.css';
import {
  getUsers,
  deleteUser
} from './api/userApi';

getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
    </tr>`
  });

  global.decodeURIComponent.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.decodeURIComponent.getElementByClassName('deleteUser');

  // Must use Array.from to create a real array from a DOM collection
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
})
