// Array JSON para representar las fotos
let fotos = [
  { url: 'https://firebasestorage.googleapis.com/v0/b/fanys-api-85b17.appspot.com/o/JavaScript%2FImage%2Fkarsten-winegeart-u-UTO55yDSg-unsplash.jpg?alt=media&token=601385e1-59c1-4ce3-bffd-56d907ffc50e', description: 'Lago con glaciares', author: 'Autor1', likes: 100 },
  { url: 'https://firebasestorage.googleapis.com/v0/b/fanys-api-85b17.appspot.com/o/JavaScript%2FImage%2Fneom-uqAUg1zvMXQ-unsplash.jpg?alt=media&token=01640c78-d7ac-464e-9910-2160f777d53d', description: 'Amanecer', author: 'Autor2', likes: 120 },
  { url: 'https://firebasestorage.googleapis.com/v0/b/fanys-api-85b17.appspot.com/o/JavaScript%2FImage%2Fluke-miller-19Cx3R3i7qE-unsplash.jpg?alt=media&token=71662504-e407-4651-971b-087053dbc034', description: 'Carro deportivo en autopista', author: 'Autor3', likes: 150 },
  { url: 'https://firebasestorage.googleapis.com/v0/b/fanys-api-85b17.appspot.com/o/JavaScript%2FImage%2Fneom-EbIvcXzgU4s-unsplash.jpg?alt=media&token=24c4ed79-77d1-411c-bbf7-8c0814cf597e', description: 'Acampando', author: 'Autor4', likes: 200 },
  { url: 'https://firebasestorage.googleapis.com/v0/b/fanys-api-85b17.appspot.com/o/JavaScript%2FImage%2Fneom-V8w0gSmxajY-unsplash.jpg?alt=media&token=a71b09ad-1099-44d9-9f28-e089c3a1d146', description: 'Foto buceando', author: 'Autor5', likes: 180 }
];

// Función para enviar una solicitud POST para agregar una foto
function postPhoto() {
  const url = $('#url').val();
  const description = $('#description').val();
  const author = $('#author').val();
  const likes = $('#likes').val();

  // Agregar la nueva foto al array fotos
  const nuevaFoto = { url, description, author, likes: parseInt(likes) };
  fotos.push(nuevaFoto);

  // Mostrar mensaje de éxito y la imagen agregada
  $('#resultado').html('<p>Foto agregada correctamente.</p>');
  $('#imagen').html(`<img src="${url}" alt="Foto agregada">`);
}

// Función para enviar una solicitud GET para obtener todas las fotos
function getPhotos() {
  // Construir el HTML de la tabla con las fotos existentes y controlar el tamaño de las imágenes
  let html = '<style>table { width: 100%; } table img { max-width: 200px; height: auto; }</style>';
  html += '<h2>Fotos</h2><table><thead><tr><th>URL</th><th>Descripción</th><th>Autor</th><th>Likes</th></tr></thead><tbody>';

  // Agregar las fotos predefinidas al HTML de la tabla
  fotos.forEach(photo => {
    html += `<tr><td><img src="${photo.url}" alt="Foto"></td><td>${photo.description}</td><td>${photo.author}</td><td>${photo.likes}</td></tr>`;
  });

  html += '</tbody></table>';
  $('#resultado').html(html);
}

