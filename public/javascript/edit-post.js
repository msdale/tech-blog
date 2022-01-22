async function editFormHandler(event) {
  event.preventDefault();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const content = document.querySelector('input[name="post-content"]').value;

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);